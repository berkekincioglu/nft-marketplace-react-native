import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';

const CollectionItem = ({collection}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CollectionDetail', {params: {collection}})
      }
      style={{
        backgroundColor: COLORS.dark,
        width: SIZES.width / 2.2,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        height: 200,
        position: 'relative',
      }}>
      <Image
        source={collection.img}
        style={{
          height: '50%',
          width: '100%',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          margin: 0,
        }}
        resizeMode="cover"
      />

      <Text
        style={{alignSelf: 'center', color: COLORS.blue, fontWeight: 'bold'}}>
        {collection.title}
      </Text>
      <View
        style={{
          position: 'absolute',

          right: 5,
          top: 5,
          padding: 5,
          backgroundColor: 'white',
          borderRadius: 10,
          opacity: 0.7,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}>
          Pre-Sale: Now live
        </Text>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          color: COLORS.white,
          fontWeight: 'bold',
          marginTop: 5,
        }}>
        {collection.name}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Image
          source={collection.avatar}
          style={{width: 35, height: 35, borderRadius: 50}}
          resizeMode="cover"
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text style={{color: COLORS.gray, fontSize: 15}}>
              {collection.price}
            </Text>
            <Image
              source={collection.icon}
              style={{width: 15, height: 15, borderRadius: 10}}
              resizeMode="cover"
            />
          </View>
          <Text style={{color: COLORS.gray, fontSize: 12}}>floor price</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionItem;

const styles = StyleSheet.create({});
