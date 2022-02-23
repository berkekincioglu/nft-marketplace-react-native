import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {images, COLORS, SIZES} from '../constants';

const NFTDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const nft = route.params.params.nft;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <View
            style={{
              width: 100,
              backgroundColor: '#fff',
              paddingVertical: 10,
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 20}}>0</Text>
            <Image source={images.NFTIcon} style={{width: 30, height: 30}} />
          </View>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 40,
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: 'black',
            }}>
            <Image
              source={images.back}
              style={{width: 30, height: 30, tintColor: COLORS.gray}}
            />
          </View>
        </TouchableOpacity>
      ),
      headerTitle: '',
      headerTransparent: true,
      headerStyle: {
        alignItems: 'center',
      },
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={{flex: 2, marginTop: 20}}>
        <View>
          <Image
            source={nft.img}
            style={{
              width: '90%',
              height: '80%',
              marginHorizontal: '5%',
              marginTop: '25%',
              borderRadius: 20,
            }}
          />
        </View>
      </View>
      <View style={{flex: 2, marginTop: '25%'}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: '5%',
              color: COLORS.white,
            }}>
            {nft.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: '5%',
              color: COLORS.white,
              marginTop: 5,
            }}>
            Receiving Wallet Address (optional)
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              marginLeft: '5%',
              color: COLORS.gray,
              marginTop: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: '5%',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </Text>
          <TextInput
            placeholderTextColor={COLORS.gray}
            placeholderStyle={{fontSize: 15, fontWeight: 'bold'}}
            style={{
              borderBottomColor: COLORS.gray,
              borderBottomWidth: 1,
              width: '90%',
              marginHorizontal: '5%',
              marginTop: 15,
              color: COLORS.gray,
            }}
            placeholder="e.g  0x6defhxnf0012820hasdbx012890"
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: '5%',
            color: COLORS.white,
            marginTop: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: '5%',
          }}>
          Chain Info:
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            marginLeft: '5%',
            color: COLORS.gray,
            marginTop: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: '5%',
          }}>
          Contract Link:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <Image
            source={images.wallet}
            style={{width: 20, height: 20, tintColor: COLORS.white}}
          />
          <Text
            style={{color: COLORS.blue, fontWeight: 'bold', marginLeft: 10}}>
            {' '}
            Contract Link
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          borderTopWidth: 1,
          borderTopColor: COLORS.gray,
        }}>
        <TouchableOpacity
          style={{
            width: '90%',
            backgroundColor: COLORS.blue,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: '5%',
            marginTop: 5,
            height: 50,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 20,
                marginRight: 10,
              }}>
              Buy Now 35
            </Text>
            <Image
              source={images.NFTIcon}
              style={{width: 30, height: 30, borderRadius: 10}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NFTDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
});
