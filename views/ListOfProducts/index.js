import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { downloadImage, filterCategoryProducts } from '../../redux/slices';
import { ModalEditProducts } from '../../components/commons';
import { ImageMineature, SelectedCategory, Title } from '../../components';

export const ListOfProductsScreen = () => {
  const [producs, setProducs] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const [selectedProduc, setSelectedProduc] = useState(null);

  const handlePress = async (category) => {
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
    </ScrollView>
  );
};
