import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:colors.gray,
    margin:5,
    borderRadius:10
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:9,
  },
  username:{
    color:colors.red,
    fontWeight:'bold',
  },
  date:{
    fontSize:11,
    color:colors.black,
  },
  text:{
    color:colors.black
  }

});