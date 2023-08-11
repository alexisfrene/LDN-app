import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
} from '../../components/commons';
import { ModalEditProducts } from '../../components/commons/ModalEditProducts';

export const ListOfProductsScreen = () => {
  const [selectedProduc, setSelectedProduc] = useState(null);
  const [producs, setProducs] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
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
  const openEditModal = (id) => {
    const select = producs.find((produc) => produc.id === id);
    setSelectedProduc({ ...select });
    setOpenEdit(true);
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#fdfac7', '#fc930a']}
        className="flex-1 px-1 min-h-screen"
      >
        {producs?.length && producs[0]?.publicUrl ? (
          <>
            <Title text="Lista de productos" />
            <View className=" flex flex-row flex-wrap mb-10 justify-evenly">
              {producs.length &&
                producs.map((product, i) => {
                  return (
                    <ImageMineature
                      title={product.produc_name}
                      imageURL={product.publicUrl}
                      onPress={() => openEditModal(product.id)}
                      key={i}
                    />
                  );
                })}
            </View>
          </>
        ) : (
          <SelectedCategory handlePress={handlePress} />
        )}
        <ModalEditProducts
          produc={selectedProduc}
          handle={openEdit}
          setHandle={setOpenEdit}
        />
      </LinearGradient>
      <Loading isVisible={loading} />
    </ScrollView>
  );
};
