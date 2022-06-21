import React from 'react';
import {SafeAreaView,Text} from 'react-native';

function RoomDetail({route,navigation}) {

  const {data:roomName}=route.params;
  navigation.setOptions({title:roomName});
  return (
    <SafeAreaView>
      <Text>room detail-{roomName}</Text>
    </SafeAreaView>
  );
}

export default RoomDetail;