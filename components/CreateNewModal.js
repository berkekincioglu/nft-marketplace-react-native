import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SIZES, COLORS, images} from '../constants';
import {useNavigation} from '@react-navigation/native';

const Button = ({text, color}) => (
  <TouchableOpacity
    style={{
      width: '70%',
      backgroundColor: color,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    }}>
    <Text style={{fontWeight: 'bold', color: COLORS.white, fontSize: 20}}>
      {text}
    </Text>
  </TouchableOpacity>
);

const CreateNewModal = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: '5%',
            marginHorizontal: '5%',
          }}>
          <Text style={{fontSize: 20, color: COLORS.white, fontWeight: 'bold'}}>
            Choose your mode
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={images.down}
              style={{width: 25, height: 25, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 4}}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button text="Pixel Editor" color={COLORS.gray} />
          <Button text="Pixelizer" color={COLORS.gray} />
          <Button text="Upload Your Own" color={COLORS.gray} />
          <Button text="Mint NFT" color={COLORS.blue} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryDark,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default CreateNewModal;
