import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CollectionDetail from '../screens/CollectionDetail';
import NFTDetail from '../screens/NFTDetail';
import MyNFTs from '../screens/MyNFTs';
import AddNFTModule from '../screens/AddNFTModule';
import NFTcoin from '../screens/NFTcoin';

const Stack = createNativeStackNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {images, COLORS} from '../constants/index';
import CreateNewModal from '../components/CreateNewModal';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          console.log(route.name);
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={images.home}
                  resizeMode="contain"
                  style={{tintColor, width: size, height: size}}
                />
              );
            case 'AddNFTModule':
              return (
                <Image
                  source={images.plus}
                  resizeMode="contain"
                  style={{
                    tintColor: COLORS.blue,
                    marginTop: size / 2,
                  }}
                />
              );

            case 'MyNFTs':
              return (
                <Image
                  source={images.account}
                  resizeMode="contain"
                  style={{tintColor, width: size, height: size}}
                />
              );
          }
        },
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
          height: '10%',
        },
        headerShadowVisible: false,
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="AddNFTModule"
        options={{
          tabBarLabel: '',
          headerShown: false,
        }}
        component={AddNFTModule}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('CreateNewModal');
          },
        })}
        gesture
      />

      <Tab.Screen
        name="MyNFTs"
        options={{headerShown: false}}
        component={MyNFTs}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Root"
          component={Tabs}
        />
        <Stack.Screen name="CollectionDetail" component={CollectionDetail} />
        <Stack.Screen name="NFTDetail" component={NFTDetail} />
        <Stack.Screen
          name="CreateNewModal"
          component={CreateNewModal}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NFTcoin"
          component={NFTcoin}
          options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
