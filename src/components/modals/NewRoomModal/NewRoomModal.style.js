import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
  modal:{
    justifyContent:'flex-end',
    margin:0
  },
  container:{
    backgroundColor:colors.gray,
    padding:20,
    borderTopEndRadius:20,
    borderTopStartRadius:20,
    height:deviceSize.height/4,
    justifyContent:'space-between'
  },
  title:{
    color:colors.black,
    fontWeight:'bold'
  },
  input:{
    padding:3,
    color:colors.black
  }


});