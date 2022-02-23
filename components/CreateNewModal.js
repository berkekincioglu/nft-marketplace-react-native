import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';
import {SIZES} from '../constants';

const CreateNewModal = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red', height: SIZES.height / 2}}>
      <Text>CreateNewModal</Text>
    </View>
  );
};

export default CreateNewModal;

const styles = StyleSheet.create({});
