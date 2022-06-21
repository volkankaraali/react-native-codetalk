/* eslint-disable no-unused-vars */
import React from 'react';
import {View,Text,TouchableWithoutFeedback } from 'react-native';

import styles from './RoomCard.style';

function RoomCard({data,navigation}) {

  const goToRoomDetail=()=>{
    navigation.navigate('RoomDetailPage',{data});
  };
  return (
    <TouchableWithoutFeedback onPress={()=>goToRoomDetail()} >
      <View style={styles.container}>
        <Text style={styles.text}>{data}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RoomCard;