import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../styles/colors';

const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
  container:{
    flex:1,
  },
  message_button_container:{
    backgroundColor:colors.red,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:50,
    with:deviceSize.width,
  },
  send_button:{
    backgroundColor:colors.gray,
    width:'20%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center' 
  },
  send_text:{
    color:colors.black
  },
  message_input:{
    width:'80%',
    paddingHorizontal:10,
    color:colors.lightGray,
  },
  
  

});