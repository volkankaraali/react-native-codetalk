import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';


const base_style= StyleSheet.create({
  container:{
    alignItems:'center',
    marginVertical:5,
    padding:10,
    borderRadius:10,
  },
  text:{
    fontSize:16
  }
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container:{
      ...base_style.container,
      backgroundColor:'#FF5252',
    },
    text:{
      ...base_style.text,
      color:'#212121'
    }
  }),

  secondary: StyleSheet.create({
    ...base_style,
    container:{
      ...base_style.container,
      backgroundColor:colors.lightGray,
      borderWidth:1,
      borderColor:colors.red
    },
    text:{
      ...base_style.text,
      color:colors.black
    }
  }),
};