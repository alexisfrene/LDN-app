import { useEffect, useState } from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';
import {
  downloadImage,
  filterCategoryProducts,
  startLoading,
  stopLoading,
} from '../../redux/slices';
import {
  Loading,
  ImageMineature,
  SelectedCategory,
  Title,
  EditProducsForm,
} from '../../components';

export const ListOfProductsScreen = () => {
  const [selectedProduc, setSelectedProduc] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const [producs, setProducs] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.commons.loading);
  const handlePress = async (category) => {
    dispatch(startLoading());
    const {
      payload: { data },
    } = await dispatch(filterCategoryProducts(category));

    const producsWithUrls = await Promise.all(
      data.map(async (produc) => {
        let { payload } = await dispatch(
          downloadImage(produc.produc_image_url),
        );
        return { publicUrl: payload.publicUrl, ...produc };
      }),
    );
    dispatch(stopLoading());
    setSelectedProduc(producsWithUrls);
    setProducs(producsWithUrls);
  };
  const openDetailModal = (id) => {
    const select = producs.find((produc) => produc.id === id);
    setSelectedProduc({ ...select });
    setOpenDetail(true);
  };

  return (
    <>
      <ScrollView>
        <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1 px-1">
          {producs?.length && producs[0]?.publicUrl ? (
            <>
              <Title text="Lista de productos" />
              <View className="flex flex-row flex-wrap mb-10 justify-evenly h-screen">
                {producs.length &&
                  producs.map((product, i) => {
                    return (
                      <ImageMineature
                        title={product.produc_name}
                        imageURL={product.publicUrl}
                        onPress={() => openDetailModal(product.id)}
                        key={i}
                      />
                    );
                  })}
              </View>
            </>
          ) : (
            <SelectedCategory handlePress={handlePress} />
          )}
          <EditProducsForm
            produc={selectedProduc}
            openDetail={openDetail}
            setOpenDetail={setOpenDetail}
          />
        </LinearGradient>
        <Loading isVisible={loading} />
      </ScrollView>
      {producs.length && (
        <Pressable
          onPress={() => setProducs(false)}
          className="absolute bottom-1 rounded-full bg-amber-300 p-4 m-3 active:bg-amber-200"
        >
          <MaterialIcons name="keyboard-return" size={30} color="black" />
        </Pressable>
      )}
    </>
  );
};
