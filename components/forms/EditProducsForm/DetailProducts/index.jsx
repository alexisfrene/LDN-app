import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, View, Pressable } from 'react-native';
import { Dialog, Divider, ListItem } from 'react-native-elements';
import { generateInfoProduc } from '../../../../utils';
import { MarkSoldModa } from '../MarkSoldModal';
import {
  startLoading,
  stopLoading,
  updateProduc,
} from '../../../../redux/slices';

export const DetailProducts = ({
  produc,
  openDetail,
  setOpenDetail,
  setOpenEdit,
}) => {
  const [markSold, setMarkSold] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const { mainInfo, moreInfo } = generateInfoProduc(produc);
  const handleMarckSold = async (produc) => {
    dispatch(startLoading());
    await dispatch(updateProduc({ id: produc.id, produc_state: false }));
    dispatch(stopLoading());
    setMarkSold(false);
    setOpenDetail(false);
  };

  return (
    <Dialog isVisible={openDetail} onBackdropPress={() => setOpenDetail(false)}>
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
      {produc?.produc_state && (
        <Pressable
          className="flex flex-row justify-evenly bg-green-500 rounded-xl py-1 active:bg-green-300"
          onPress={() => setMarkSold(true)}
        >
          <Text className="font-bold">Marcar como vendido</Text>
          <MaterialIcons name="add-business" size={24} color="black" />
        </Pressable>
      )}
      <MarkSoldModa
        markSold={markSold}
        setMarkSold={setMarkSold}
        produc={produc}
        handleMarckSold={handleMarckSold}
      />
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
