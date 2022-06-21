import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container:{
    margin:5,
    backgroundColor:colors.lightGray,
    flex:1,
    height:90,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  text:{
    color:colors.black
  }

});