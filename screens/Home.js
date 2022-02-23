import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images, COLORS} from '../constants';
import NFTItem from '../components/NFTItem';
import CollectionItem from '../components/CollectionItem';

const nftData = [
  {img: images.NFT, id: '0', name: '#69', amount: '1', icon: images.NFTIcon},
  {img: images.NFT, id: '1', name: '#1', amount: '7', icon: images.NFTIcon},
  {img: images.NFT, id: '2', name: '#29', amount: '123', icon: images.NFTIcon},
  {img: images.NFT, id: '3', name: '#30', amount: '32', icon: images.NFTIcon},
  {img: images.NFT, id: '4', name: '#45', amount: '50', icon: images.NFTIcon},
  {img: images.NFT, id: '5', name: '#11', amount: '40', icon: images.NFTIcon},
  {img: images.NFT, id: '6', name: '#23', amount: '10', icon: images.NFTIcon},
];

const collectionData = [
  {
    img: images.Collection,
    id: '0',
    title: 'CRYMON',
    name: 'Cryptomoas',
    avatar: images.NFT,
    icon: images.NFTIcon,
    price: 35,
  },
  {
    img: images.Collection,
    id: '1',
    title: 'TEST',
    name: 'test',
    avatar: images.NFT,
    icon: images.NFTIcon,
    price: 45,
  },
  {
    img: images.Collection,
    id: '2',
    title: 'TEST2',
    name: 'test1',
    avatar: images.NFT,
    icon: images.NFTIcon,
    price: 55,
  },
  {
    img: images.Collection,
    id: '3',
    title: 'TEST3',
    name: 'test2',
    avatar: images.NFT,
    icon: images.NFTIcon,
    price: 65,
  },
  {
    img: images.Collection,
    id: '4',
    title: 'TEST4',
    name: 'test3',
    avatar: images.NFT,
    icon: images.NFTIcon,
    price: 75,
  },
];

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.dark,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 50,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
            Collections for sale 🔥
          </Text>
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
      <View style={{flex: 2}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.white,
              fontWeight: 'bold',
              padding: 20,
            }}>
            Top Items ⚡
          </Text>
        </View>

        <FlatList
          data={nftData}
          renderItem={({item}) => <NFTItem nft={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{flex: 3}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.white,
              fontWeight: 'bold',
              padding: 20,
            }}>
            Trending Collections 🚀
          </Text>
        </View>
        <ScrollView
          style={{flex: 1, width: '100%'}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {/* <FlatList
            data={collectionData}
            renderItem={({item}) => <CollectionItem collection={item} />}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            
          /> */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CollectionItem collection={collectionData[0]} />
            <CollectionItem collection={collectionData[1]} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CollectionItem collection={collectionData[2]} />
            <CollectionItem collection={collectionData[3]} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryDark,
  },
});
