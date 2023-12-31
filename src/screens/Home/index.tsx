import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getDollar } from '../../services';
import { setDollarToDay } from '../../redux/slices';
import {
  DollarCard,
  SummaryProducts,
  Title,
  LinerGradientConteiner,
} from '../../components';
interface DollarInfo {
  compra: string;
  venta: string;
}

export const HomeScreen = () => {
  const [dollar, setDollar] = useState<DollarInfo>({ compra: '1', venta: '1' });
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
    <LinerGradientConteiner>
      <Title text="Informacion :" />
      <DollarCard dollar={dollar} />
      <SummaryProducts dollayToDay={dollar?.venta} />
    </LinerGradientConteiner>
  );
};
