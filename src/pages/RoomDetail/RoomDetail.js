import React, { useEffect, useState } from 'react';
import {FlatList,Text, SafeAreaView,TextInput,View,TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import RoomTextCard from '../../components/RoomTextCard/RoomTextCard';
import auth from '@react-native-firebase/auth';

import styles from './RoomDetail.style';

function RoomDetail({route,navigation}) {

  const {data:roomName}=route.params;
  navigation.setOptions({title:roomName});
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');


  useEffect(() => {
    database()
      .ref(`rooms/${roomName}/messages`)
      .on('value',snapshot=>setMessages(parseContentData(snapshot.val())));
  }, []);

  const sendMessage=()=>{
    console.log(text);
    const userEmail=auth().currentUser.email;
    database()
      .ref(`rooms/${roomName}/messages`)
      .push({
        text,
        username:userEmail.split('@')[0],
        date:new Date().toISOString(),
      })
      .then(res=>console.log(res))
      .catch(e=>console.log(e));
    setText('');
  };

  const renderMessages=({item})=> <RoomTextCard data={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList  data={messages} renderItem={renderMessages} />
      <View style={styles.message_button_container}>
        <TextInput style={styles.message_input} value={text} onChangeText={setText} placeholder='type message' multiline/>
        <TouchableOpacity style={styles.send_button} onPress={sendMessage}>
          <Text style={styles.send_text}>send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RoomDetail;