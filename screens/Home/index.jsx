import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  DollarCard,
  SummaryCard,
  SummaryProducts,
  Title,
} from '../../components';
import { getDollar } from '../../services';
import { setDollarToDay } from '../../redux/slices';
import { useIsFocused } from '@react-navigation/native';

export const HomeScreen = ({ navigation }) => {
  const [dollar, setDollar] = useState();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const priceDollar = async () => {
    const dollarToDay = await getDollar();
    dispatch(setDollarToDay(dollarToDay));
    setDollar(dollarToDay);
  };

  useEffect(() => {
    if (isFocused) {
      priceDollar();
    }
  }, [isFocused]);

  return (
    <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1 px-2">
      <Title text="Informacion :" />
      <DollarCard dollar={dollar} />
      <SummaryCard />
      <SummaryProducts />
    </LinearGradient>
  );
};
