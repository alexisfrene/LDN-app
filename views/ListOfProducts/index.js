import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
  ImageMineature,
  ModalEditProducts,
  SelectedCategory,
  Title,
} from '../../components';
import {
  getAllProducs,
  getCategoryProducs,
  downloadProducImage,
} from '../../services';
import { LinearGradient } from 'expo-linear-gradient';

export const ListOfProductsScreen = () => {
  const [producs, setProducs] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedProduc, setSelectedProduc] = useState(null);

  const handlePress = async (category) => {
    if (category === 'all') {
      const { data, error } = await getAllProducs();

      return error ? console.log(error) : setProducs(data);
    } else {
      const { data, error } = await getCategoryProducs(category);

      return error ? console.log(error) : setProducs(data);
    }
  };
  const openEditModal = (id, url) => {
    const select = producs.find((produc) => produc.id === id);
    setSelectedProduc({ ...select, url });
    setOpenEdit(true);
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#fdfac7', '#fc930a']}
        className="flex-1 px-1 min-h-screen"
      >
        {producs?.length ? (
          <>
            <Title text="Lista de productos" />
            <View className=" flex flex-row flex-wrap mb-10 justify-evenly">
              {producs.length &&
                producs.map((producs, i) => {
                  let url = downloadProducImage(producs.produc_image_url);
                  return (
                    <ImageMineature
                      title={producs.produc_name}
                      imageURL={url.publicUrl}
                      onPress={() => openEditModal(producs.id, url)}
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
