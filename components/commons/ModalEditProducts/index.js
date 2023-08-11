import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Image, View, Pressable } from 'react-native';
import { Dialog, Divider, ListItem } from 'react-native-elements';
import { Loading } from '../Loading';
import { EditProducsForm } from '../../forms/EditProducsForm';
import { generateInfoProduc } from '../../../utils';
import { startLoading, stopLoading, updateProduc } from '../../../redux/slices';

export const ModalEditProducts = ({ produc, handle, setHandle }) => {
  const loading = useSelector((state) => state.commons.loading);
  const [markSold, setMarkSold] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const { mainInfo, moreInfo } = generateInfoProduc(produc);
  const handleMarckSold = async (produc) => {
    dispatch(startLoading());
    await dispatch(updateProduc({ id: produc.id, produc_state: false }));
    dispatch(stopLoading());
    setMarkSold(false);
    setHandle(false);
  };

  return (
    <Dialog isVisible={handle} onBackdropPress={() => setHandle(false)}>
      {openEdit ? (
        <EditProducsForm
          produc={produc}
          setOpenEdit={setOpenEdit}
          setHandle={setHandle}
        />
      ) : (
        <>
          <View className="flex flex-row justify-between">
            <Dialog.Title
              title={`${produc?.produc_name}(${produc?.produc_code})`}
            />
            <MaterialIcons
              name="edit"
              size={24}
              color="black"
              onPress={() => setOpenEdit(true)}
            />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image src={produc?.publicUrl} className="h-[250] w-[250]" />
          </View>

          {mainInfo.map((item, i) => {
            return (
              <InfoRowDialog
                key={i}
                textLeft={item.textLeft}
                textRigth={item.textRigth}
              />
            );
          })}
          <ListItem.Accordion
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title>Mas informacion</ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <ListItem bottomDivider>
              <ListItem.Content>
                {moreInfo.map((item, i) => {
                  return (
                    <InfoRowDialog
                      key={i}
                      textLeft={item.textLeft}
                      textRigth={item.textRigth}
                    />
                  );
                })}
              </ListItem.Content>
            </ListItem>
          </ListItem.Accordion>
        </>
      )}
      {produc?.produc_state && (
        <Pressable
          className="flex flex-row justify-evenly bg-green-500 rounded-xl py-1 active:bg-green-300"
          onPress={() => setMarkSold(true)}
        >
          <Text className="font-bold">Marcar como vendido</Text>
          <MaterialIcons name="add-business" size={24} color="black" />
        </Pressable>
      )}
      <Dialog isVisible={markSold} onBackdropPress={() => setMarkSold(false)}>
        <Dialog.Title title="Marcar como vendido :" />
        <Text>{`Nombre : ${produc?.produc_name}`}</Text>
        <Text>{`Precio : $${produc?.produc_price}`}</Text>
        <View className="flex flex-row justify-evenly mt-3">
          <Pressable
            className="flex flex-row justify-evenly bg-green-500 rounded-xl p-1 active:bg-green-300"
            onPress={() => handleMarckSold(produc)}
          >
            <Text className="font-bold pr-1">Confirmar</Text>
            <MaterialIcons name="add-business" size={24} color="black" />
          </Pressable>
          <Pressable
            className="flex flex-row justify-evenly bg-red-500 rounded-xl p-1 active:bg-red-300"
            onPress={() => setMarkSold(false)}
          >
            <Text className="font-bold">Cancelar</Text>
            <MaterialIcons name="close" size={24} color="black" />
          </Pressable>
        </View>
      </Dialog>
      <Loading isVisible={loading} />
    </Dialog>
  );
};

const InfoRowDialog = ({ textLeft, textRigth }) => {
  return (
    <View className="flex flex-row space-x-2">
      <Text className="w-20 font-semibold">{textLeft}</Text>
      <Divider orientation="vertical" />
      <Text>{textRigth}</Text>
    </View>
  );
};
