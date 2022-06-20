import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:15,
    backgroundColor:colors.lightGray
  },
  brand:{
    fontSize:100,
    color:colors.red,
    textAlign:'center'
  },
  form_container:{
    padding:10,
  }
});