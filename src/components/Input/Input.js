import React from 'react';
import {TextInput,View,Text} from 'react-native';
import colors from '../../styles/colors';

import styles from './Input.style';

function Input({error,value,onChangeText,placeHolder,isSecure}) {
  return (
    <View>
     
      <Text style={styles.errorMessage}>
        {error}
      </Text>
      <TextInput 
        style={styles.text_input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        placeholderTextColor={colors.black}
        secureTextEntry={isSecure}
      />
    </View>
  );
}

export default Input;