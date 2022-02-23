import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {images, COLORS} from '../constants';

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
      <View style={{flex: 2, backgroundColor: 'red'}}></View>
      <View style={{flex: 4, backgroundColor: 'blue'}}></View>
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
