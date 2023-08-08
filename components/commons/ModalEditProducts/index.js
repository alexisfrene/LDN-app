import React, { useState } from 'react';
import { Dialog, Divider, Icon, ListItem } from 'react-native-elements';
import { Text, Image, View } from 'react-native';

const user = {
  produc_code: 3,
  produc_description: '',
  user: null,
};

export const ModalEditProducts = ({ produc, handle, setHandle }) => {
  const [expanded, setExpanded] = useState(false);
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
    { textLeft: 'Descuento :', textRigth: produc?.produc_discount },
    { textLeft: 'Unidades :', textRigth: produc?.produc_stock },
    {
      textLeft: 'Estilo :',
      textRigth: produc?.produc_style,
    },
    { textLeft: 'Marca :', textRigth: produc?.product_brand },
  ];

  return (
    <View className="w-96 bg-red-200">
      <Dialog isVisible={handle} onBackdropPress={() => setHandle(false)}>
        <Dialog.Title
          title={`${produc?.produc_name}(${produc?.produc_code})`}
        />
        <Image src={produc?.url.publicUrl} className="h-64 w-64" />
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
      </Dialog>
    </View>
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
