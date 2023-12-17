import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Image,
  Text,
  View,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Dialog, ListItem } from '@rneui/themed';
import { generateInfoProduc } from '../../../../utils';
import { MarkSoldModal } from '../MarkSoldModal';
import {
  startLoading,
  stopLoading,
  updateProduc,
} from '../../../../redux/slices';
import { getImageByCloudinary } from '@/lib';

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

  const handleMarkSold = async (produc) => {
    dispatch(startLoading());
    await dispatch(updateProduc({ id: produc.id, produc_state: false }));
    dispatch(stopLoading());
    setMarkSold(false);
    setOpenDetail(false);
  };

  return (
    <Dialog isVisible={openDetail} onBackdropPress={() => setOpenDetail(false)}>
      <View style={styles.header}>
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
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: getImageByCloudinary(produc?.produc_image_url) }}
          style={styles.image}
        />
      </View>
      <ScrollView>
        {mainInfo.map((item, i) => (
          <InfoRowDialog
            key={i}
            textLeft={item.textLeft}
            textRigth={item.textRigth}
          />
        ))}
        <ListItem.Accordion
          content={
            <ListItem.Content>
              <ListItem.Title>Mas informacion</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded}
          onPress={() => setExpanded(!expanded)}
        >
          <ListItem bottomDivider>
            <ListItem.Content>
              {moreInfo.map((item, i) => (
                <InfoRowDialog
                  key={i}
                  textLeft={item.textLeft}
                  textRigth={item.textRigth}
                />
              ))}
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>
      </ScrollView>
      {produc?.produc_state && (
        <Pressable
          style={styles.markSoldButton}
          onPress={() => setMarkSold(true)}
        >
          <Text style={styles.markSoldButtonText}>Marcar como vendido</Text>
          <MaterialIcons name="add-business" size={24} color="black" />
        </Pressable>
      )}
      <MarkSoldModal
        markSold={markSold}
        setMarkSold={setMarkSold}
        produc={produc}
        handleMarkSold={handleMarkSold}
      />
    </Dialog>
  );
};

const InfoRowDialog = ({ textLeft, textRigth }) => {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLeft}>{textLeft}</Text>
      <Text>{textRigth}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 250,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  infoLeft: {
    width: 100,
    fontWeight: 'bold',
  },
  markSoldButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 8,
    marginVertical: 16,
  },
  markSoldButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
