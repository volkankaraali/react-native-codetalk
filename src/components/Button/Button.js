import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.style';

function Button({text,onPress,theme='primary'}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles[`${theme}`].container}>
      <Text style={styles[`${theme}`].text} >{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;