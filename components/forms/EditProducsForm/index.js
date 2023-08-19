import { useState } from 'react';
import { View } from 'react-native';
import { DetailProducts } from './DetailProducts';
import { ModalEditProducts } from './ModalEditProducts';

export const EditProducsForm = ({ produc, setOpenDetail, openDetail }) => {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <View>
      <DetailProducts
        produc={produc}
        setOpenDetail={setOpenDetail}
        openDetail={openDetail}
        setOpenEdit={setOpenEdit}
      />
      <ModalEditProducts
        produc={produc}
        setOpenEdit={setOpenEdit}
        openEdit={openEdit}
        setOpenDetail={setOpenDetail}
      />
    </View>
  );
};
