import { useState } from 'react';
import { View, Pressable, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
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
  EditProducsForm,
  ModalSuccefull,
  LinerGradientConteiner,
} from '../../components';

export const ListOfProductsScreen = () => {
  const [selectedProduc, setSelectedProduc] = useState(null);
  const [typeSearch, setTypeSearch] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [producs, setProducs] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.commons.loading);
  const handlePress = async (filter) => {
    dispatch(startLoading());
    const {
      payload: { data },
    } = await dispatch(filterCategoryProducts(filter));
    const producsWithUrls = await Promise.all(
      data.map(async (produc) => {
        let { payload } = await dispatch(
          downloadImage(produc.produc_image_url),
        );
        return { publicUrl: payload.publicUrl, ...produc };
      }),
    );
    dispatch(stopLoading());
    if (producsWithUrls.length > 0) {
      setSelectedProduc(producsWithUrls);
      setProducs(producsWithUrls);
      setTypeSearch(filter);
    } else {
      return setModalOpen(true);
    }
  };
  const openDetailModal = (id) => {
    const select = producs.find((produc) => produc.id === id);
    setSelectedProduc({ ...select });
    setOpenDetail(true);
  };
  const resetProducts = () => {
    setProducs(null);
  };

  return (
    <>
      <LinerGradientConteiner>
        {producs?.length && producs[0]?.publicUrl ? (
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            numColumns={3}
            data={producs}
            renderItem={({ item }) => {
              return (
                <ImageMineature
                  title={item.produc_name}
                  imageURL={item.publicUrl}
                  price={item.produc_price}
                  size={item.produc_size}
                  onPress={() => openDetailModal(item.id)}
                  key={item.produc_name}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <SelectedCategory handlePress={handlePress} />
        )}
      </LinerGradientConteiner>
      <EditProducsForm
        produc={selectedProduc}
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        typeSearch={typeSearch}
        handlePress={handlePress}
      />
      <View>
        {producs?.length > 0 && (
          <Pressable
            onPress={resetProducts}
            className="absolute bottom-1 rounded-full bg-amber-300 p-4 m-3 active:bg-amber-200"
          >
            <MaterialIcons name="keyboard-return" size={30} color="black" />
          </Pressable>
        )}
      </View>
      <ModalSuccefull
        title="No hay productos que mostrar!"
        isVisible={modalOpen}
        setSuccefull={setModalOpen}
      >
        <View className="flex flex-row justify-center">
          <MaterialIcons name="warning" size={70} color="black" />
        </View>
      </ModalSuccefull>
      <Loading isVisible={loading} />
    </>
  );
};
