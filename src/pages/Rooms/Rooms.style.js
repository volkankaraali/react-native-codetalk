import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container:{
    padding:5,
  },
  addButton_container:{
    backgroundColor:colors.red,
    position:'absolute',
    width:40,
    height:40,
    bottom:20,
    right:20,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  addButton_text:{
    color:colors.black
  }

});