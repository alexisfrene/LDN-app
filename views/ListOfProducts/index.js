import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
  ImageMineature,
  ModalEditProducts,
  SelectedCategory,
} from '../../components';
import {
  getAllProducs,
  getCategoryProducs,
  downloadProducImage,
} from '../../services';

export const ListOfProductsScreen = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedProduc, setSelectedProduc] = useState(null);
  const [producs, setProducs] = useState(false);
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
      {producs?.length ? (
        <View className="bg-slate-200 flex flex-row flex-wrap mb-52 justify-evenly">
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
      ) : (
        <SelectedCategory handlePress={handlePress} />
      )}
      <ModalEditProducts
        produc={selectedProduc}
        handle={openEdit}
        setHandle={setOpenEdit}
      />
    </ScrollView>
  );
};
