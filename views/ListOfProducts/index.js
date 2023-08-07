import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import {
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';
import { supabase } from '../../lib/supabse';
import { LinearGradient } from 'expo-linear-gradient';
const pantalones = require('../../assets/pantalones.png');
const collar = require('../../assets/collar.png');
const elipsis = require('../../assets/elipsis.png');
const todo = require('../../assets/todo.png');

const downloadAvatar = (path) => {
  const { data: publicUrl } = supabase.storage
    .from('ldn_bucket')
    .getPublicUrl(path);

  return publicUrl;
};
export const ListOfProductsScreen = () => {
  const [producs, setProducs] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('ldn_producs').select('*');
      if (error) {
        console.log(error);
      } else {
        setProducs(data);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ScrollView>
      {producs ? (
        <View className="bg-slate-200 flex flex-row flex-wrap  mb-52 justify-start">
          {producs.length &&
            producs.map((producs, i) => {
              let url = downloadAvatar(producs.produc_image_url);
              return (
                <View key={i} className="p-0.5">
                  <Text className="w-28 bg-blue-400">
                    {producs.produc_name}
                  </Text>
                  {url?.publicUrl && (
                    <Image src={url.publicUrl} className="h-28 w-28" />
                  )}
                </View>
              );
            })}
        </View>
      ) : (
        <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1">
          <View className="p-2">
            <CardCategory title="Ver todos">
              <Image source={todo} className="h-16 w-16 ml-1" />
            </CardCategory>
            <CardCategory title="Zapatillas">
              <MaterialCommunityIcons
                name="shoe-sneaker"
                size={64}
                color="black"
              />
            </CardCategory>
            <CardCategory title="Remeras">
              <Ionicons name="shirt" size={64} color="black" />
            </CardCategory>
            <CardCategory title="Pantalones">
              <Image source={pantalones} className="h-16 w-16 ml-1" />
            </CardCategory>
            <CardCategory title="Accesorios">
              <Image source={collar} className="h-16 w-16 ml-1" />
            </CardCategory>
            <CardCategory title="Otros">
              <Image source={elipsis} className="h-16 w-16 ml-1" />
            </CardCategory>
          </View>
        </LinearGradient>
      )}
    </ScrollView>
  );
};

const CardCategory = ({ title, children }) => {
  return (
    <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1">
      <Pressable className="active:bg-amber-500 rounded-2xl m-1">
        <View className="h-32 overflow-hidden">
          <Text className="text-3xl font-semibold tracking-widest text-blue-800 text-center mt-2">
            {title}
          </Text>
          <View className=" rounded-full bg-amber-500 w-20 ml-36 p-1">
            {children}
          </View>
        </View>
      </Pressable>
    </LinearGradient>
  );
};
