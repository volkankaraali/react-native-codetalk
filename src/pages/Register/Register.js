/* eslint-disable no-unused-vars */
import React from 'react';

import {SafeAreaView,View,Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Register.style';
import authErrorMessageParse from '../../utils/authErrorMessageParse';
import { showMessage, hideMessage } from 'react-native-flash-message';

function Register({navigation}) {

  const register=async (userData)=>{
    try {
      const req= await auth().createUserWithEmailAndPassword(`${userData.email}`,`${userData.password}`);
      console.log(req);
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParse(error.code),
        type: 'danger',
      });
    }
  };

  const goToLogin=()=>{
    navigation.navigate('LoginPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.brand}>
        code Talk
      </Text>

      <Formik
        initialValues={{
          email:'',
          password:'',
          repassword:'',
        }}
         
        validationSchema={
          yup.object().shape({
            email:
              yup.string().email('no valid email.').required('must be email.'),
            password:
              yup.string().min(6,'Min 6 char.').max(32,'Max 32 char.').required('must be password'),
            repassword:
              yup.string().oneOf([yup.ref('password')],'must be same with password').required('must be repassword')
          })
        }  

        onSubmit={
          userData=>register(userData)
        }
      >
        {
          ({values,errors,handleChange,handleSubmit})=>
            (
              <View style={styles.form_container}>
                <Input error={errors.email} value={values.email} onChangeText={handleChange('email')} placeHolder='type email'/>
                <Input error={errors.password} value={values.password} onChangeText={handleChange('password')} isSecure={true} placeHolder='type password'/>
                <Input error={errors.repassword} value={values.repassword} onChangeText={handleChange('repassword')} isSecure={true} placeHolder='type repassword'/>
                <Button text='register' onPress={handleSubmit} theme='primary'/>
                <Button text='login' onPress={goToLogin} theme='secondary' />
              </View>
            ) 
        }
      </Formik>
    </SafeAreaView>
  );
}

export default Register;