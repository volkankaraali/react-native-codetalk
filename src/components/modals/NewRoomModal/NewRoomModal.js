/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import {View,Text,TextInput} from 'react-native';

import styles from './NewRoomModal.style';
import Button from '../../Button/Button';
import colors from '../../../styles/colors';
function NewRoomModal({visible,onClose,onSend}) {

  const [text, setText] = useState('');

  return (
    <Modal 
      style={styles.modal}
      isVisible={visible} 
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <View style={styles.container}>
        <Text style={styles.title}>add new room</Text>
        <TextInput style={styles.input} placeholderTextColor={colors.black} placeholder='type a room name' onChangeText={setText} multiline/>
        <Button text='add' onPress={()=>onSend(text)} />
      </View>
    </Modal>
  );
}

export default NewRoomModal;