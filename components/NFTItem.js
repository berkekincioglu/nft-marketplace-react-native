import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES, images, COLORS} from '../constants';
import {useNavigation} from '@react-navigation/native';

const NFTItem = ({nft}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NFTDetail', {params: {nft}})}
      style={{
        backgroundColor: COLORS.dark,
        width: SIZES.width / 3.3,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
      }}>
      <View style={{flex: 2}}>
        <Image
          source={nft.img}
          resizeMode="cover"
          style={{
            width: '90%',
            height: '100%',
            borderRadius: 10,
            margin: 5,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          justifyContent: 'flex-start',
          //   alignItems: 'center',
          flex: 1,
        }}>
        <Text style={{color: COLORS.gray, padding: 5, marginTop: 5}}>
          {nft.name}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <Text style={{fontSize: 15, color: COLORS.white, marginLeft: 5}}>
            {nft.amount}
          </Text>
          <Image
            source={nft.icon}
            style={{width: 18, height: 18, borderRadius: 5, marginLeft: 15}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NFTItem;

const styles = StyleSheet.create({});
