import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {images, COLORS} from '../constants';
import CollectionItem from '../components/CollectionItem';
import {collectionData} from './Home';

const CollectionDetail = () => {
  const route = useRoute();
  const collection = route.params.params.collection;
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
    <View style={styles.container}>
      <View style={{flex: 2, backgroundColor: 'red', position: 'relative'}}>
        <Image
          source={collection.img}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          flex: 4,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            alignItems: 'center',
          }}>
          <Image
            source={collection.img}
            style={{
              width: 100,
              height: 100,

              position: 'absolute',
              top: -100,
              borderRadius: 50,
              borderWidth: 5,

              borderColor: COLORS.blue,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              position: 'absolute',
              top: -50,
              right: '35%',
              backgroundColor: COLORS.blue,
              borderRadius: 50,
            }}>
            <Text style={{fontSize: 30}}>✔️</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              padding: 10,
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
            {collection.name}
          </Text>
          {/* <Text>{collection?.description}</Text> */}

          <Text
            style={{
              fontSize: 14,
              padding: 10,
              color: COLORS.gray,
              padding: 10,
              fontWeight: 'bold',
            }}>
            Lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                padding: 10,
                color: COLORS.gray,
              }}>
              333 {'\n'}
              Total Items
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                padding: 10,
                color: COLORS.gray,
              }}>
              123 {'\n'}
              Owners
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                padding: 10,
                color: COLORS.gray,
              }}>
              35{'  '}
              {'\n'}
              Floor Price
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                padding: 10,
                color: COLORS.gray,
              }}>
              35.500 ETH {'\n'}
              Traded
            </Text>
          </View>
        </View>
        <ScrollView
          style={{flex: 1, width: '100%', marginTop: 20}}
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

export default CollectionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
});
