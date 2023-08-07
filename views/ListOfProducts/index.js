import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { supabase } from '../../lib/supabse';

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
      <View className="bg-slate-200 flex flex-row flex-wrap  mb-52 justify-start">
        {producs.length &&
          producs.map((producs, i) => {
            let url = downloadAvatar(producs.image_url);
            return (
              <View key={i} className="p-0.5">
                <Text className="w-28 bg-blue-400">{producs.name}</Text>
                {url?.publicUrl && (
                  <Image src={url.publicUrl} className="h-28 w-28" />
                )}
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};
