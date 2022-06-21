/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import {TouchableOpacity ,Text,FlatList} from 'react-native';

import database from '@react-native-firebase/database';
import RoomCard from '../../components/RoomCard/RoomCard';
import auth from '@react-native-firebase/auth';

import styles from './Rooms.style';
import NewRoomModal from '../../components/modals/NewRoomModal/NewRoomModal';

function Rooms({navigation}) {

  const [rooms, setRooms] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    database()
      .ref()
      .on('value',snapshot=>setRooms(Object.keys(snapshot.val()?.rooms || [])));
    
  }, []);
  
  const renderRooms=({item,i})=> <RoomCard navigation={navigation} data={item} i={i} />;
  
  const AddNewRoom=(newRoomName)=>{
    const userEmail=auth().currentUser.email;
    console.log(userEmail);
    database()
      .ref(`rooms/${newRoomName}/messages`)
      .push({
        text:'room is created',
        username:userEmail.split('@')[0],
        date:new Date().toISOString(),
      })
      .then(res=>console.log(res))
      .catch(e=>console.log(e));
      
    setIsModalVisible(false);
  };


  const openModal=()=>{
    setIsModalVisible(true);
  };

  const closeModal=()=>{
    setIsModalVisible(false);
  };
  return (
    <>
      <FlatList 
        style={styles.container} 
        data={rooms} 
        numColumns={2} 
        renderItem={renderRooms}
      />
      <TouchableOpacity style={styles.addButton_container} onPress={()=>openModal()} >
        <Text style={styles.addButton_text}>+</Text>
      </TouchableOpacity>
      <NewRoomModal onClose={closeModal} onSend={AddNewRoom} visible={isModalVisible}/>
    </>
    
  );
}

export default Rooms;