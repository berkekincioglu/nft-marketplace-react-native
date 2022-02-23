import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, images, SIZES} from '../constants';

const MyNFTs = () => {
  const navigation = useNavigation();
  const [galleryToggle, setGalleryToggle] = useState(false);

  const onGalleryClick = toggle => setGalleryToggle(toggle);

  const myNfts = () => {
    return (
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={images.wallet}
              style={{
                width: 40,
                height: 40,
                tintColor: COLORS.white,
                marginHorizontal: 20,
              }}
              resizeMode="cover"
            />
            <Text
              style={{fontSize: 20, color: COLORS.white, fontWeight: 'bold'}}>
              Wallet Address:{' '}
            </Text>

            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: COLORS.gray,
                padding: 15,
                borderRadius: 10,
              }}>
              <Text>0x6defhxnf..</Text>
            </View>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: COLORS.white,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.8,
              }}>
              <Text>i</Text>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 40,
              backgroundColor: COLORS.white,
              marginTop: 15,
              marginHorizontal: '5%',
              borderRadius: 10,
            }}>
            <Button title="Need an help?" color={COLORS.dark} />
          </View>
        </View>
      </View>
    );
  };

  const gallery = () => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.blue}}>
          No image is saved to gallery yet
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.dark,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{margin: 30, marginTop: 60}}>
          <Text style={{fontSize: 40, color: COLORS.white, fontWeight: 'bold'}}>
            MY NFT's
          </Text>
        </View>
        <View style={{margin: 30, marginTop: 60}}>
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
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginRight: 30}}
            onPress={() => onGalleryClick(false)}>
            <Text
              style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
              MY NFT's
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onGalleryClick(true)}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: COLORS.dark,
              borderRadius: 10,
            }}>
            <Text
              style={{color: COLORS.gray, fontSize: 20, fontWeight: 'bold'}}>
              Gallery
            </Text>
          </TouchableOpacity>
        </View>
        {galleryToggle ? gallery() : myNfts()}
      </View>

      <View style={{flex: 3}}>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={{color: COLORS.white, fontSize: 20}}>
            No NFTs is in your wallet
          </Text>
        </View>
        <View style={{flex: 2}}>
          <View
            style={{
              width: '90%',
              height: 60,
              backgroundColor: COLORS.blue,
              marginTop: 15,
              marginHorizontal: '5%',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Text
                style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
                Make an NFT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyNFTs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryDark,
  },
});
