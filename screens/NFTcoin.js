import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images, COLORS, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';

const Card = ({price, amount}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '90%',
      height: 60,
      marginHorizontal: '5%',
      marginVertical: '5%',
      borderRadius: 20,
      borderWidth: 0.5,
      borderColor: COLORS.pink,
    }}>
    <View
      style={{
        marginLeft: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-evenly',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.white}}>
        {amount}
      </Text>
      <Image
        source={images.NFTIcon}
        style={{width: 30, height: 30, borderRadius: 10}}
      />
    </View>
    <View
      style={{
        marginRight: '10%',
        backgroundColor: 'white',
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>{price}$</Text>
    </View>
  </View>
);

const NFTcoin = () => {
  const navigation = useNavigation();

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
              marginRight: 20,
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
              backgroundColor: COLORS.pink,
              marginLeft: 20,
            }}>
            <Image
              source={images.down}
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.white,
              }}
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
    <View style={styles.container}>
      <View
        style={{
          flex: 1,

          marginTop: '20%',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Mint with NFT Coins
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={images.polygon}
              style={{width: 70, height: 70, borderRadius: 50}}
            />
            <Text style={{color: COLORS.white, fontSize: 15, marginTop: 5}}>
              Polygon {'\n'} (Matic)
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 10,
              }}>
              <Text
                style={{color: COLORS.white, fontSize: 17, fontWeight: 'bold'}}>
                10
              </Text>
              <Image
                source={images.NFTIcon}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={images.nftdrop}
              style={{width: 70, height: 70, borderRadius: 50}}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 15,
                marginTop: 5,
                textAlign: 'center',
              }}>
              NFT Collection {'\n'} Drops
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 10,
              }}>
              <Text
                style={{color: COLORS.white, fontSize: 17, fontWeight: 'bold'}}>
                10-100
              </Text>
              <Image
                source={images.NFTIcon}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Card price={32.99} amount={10} />

        <Card price={59.99} amount={20} />
        <Card price={99.99} amount={40} />
        <Card price={199.99} amount={100} />
      </View>
    </View>
  );
};

export default NFTcoin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
