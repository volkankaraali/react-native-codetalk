import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  text_input:{
    borderWidth:1,
    marginBottom:10,
    borderRadius:10,
    paddingHorizontal:15,
    borderColor:colors.darkgray,
  },
  errorMessage:{
    color:colors.red
  }
});