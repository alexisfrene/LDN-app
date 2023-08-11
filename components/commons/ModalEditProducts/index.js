import { useState } from 'react';
import { Dialog, Divider, ListItem } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Image, View } from 'react-native';
import { EditProducsForm } from '../../forms';

export const ModalEditProducts = ({ produc, handle, setHandle }) => {
  const [expanded, setExpanded] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const mainInfo = [
    { textLeft: 'Categoria :', textRigth: produc?.produc_category },
    { textLeft: 'Precio :', textRigth: `$ ${produc?.produc_price}` },
    {
      textLeft: produc?.produc_category === 'sneakers' ? 'Numero :' : 'Talle :',
      textRigth: produc?.produc_size,
    },
  ];

  const moreInfo = [
    { textLeft: 'Edad :', textRigth: produc?.produc_age },
    { textLeft: 'Color :', textRigth: produc?.produc_color },
    { textLeft: 'Descuento :', textRigth: produc?.produc_discount },
    { textLeft: 'Genero :', textRigth: produc?.produc_gender },
    {
      textLeft: 'Estado :',
      textRigth: produc?.produc_state ? 'Disponible' : 'Vendido',
    },
    { textLeft: 'Unidades :', textRigth: produc?.produc_stock },
    {
      textLeft: 'Estilo :',
      textRigth: produc?.produc_style,
    },
    { textLeft: 'Marca :', textRigth: produc?.product_brand },
  ];

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
            <ListItem onPress={() => console.log('fff')} bottomDivider>
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
