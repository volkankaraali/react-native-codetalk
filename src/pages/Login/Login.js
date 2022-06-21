/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {SafeAreaView,View,Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import Input from '../../components/Input/Input';


import { Formik } from 'formik';
import * as yup from 'yup';

import styles from './Login.style';
import Button from '../../components/Button/Button';
import { showMessage, hideMessage } from 'react-native-flash-message';
import authErrorMessageParse from '../../utils/authErrorMessageParse';

function Login({navigation}) {

  const [loading, setLoading] = useState(false);
  
  
  const register=async (userData)=>{
    setLoading(true);
    try {
      const req= await auth().signInWithEmailAndPassword(`${userData.email}`,`${userData.password}`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showMessage({
        message: authErrorMessageParse(error.code),
        type: 'danger',
      });
    }

  };

  const goToRegisterPage=()=>{
    navigation.navigate('RegisterPage');
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


                <Button text={loading ? <ActivityIndicator/>:'login'} onPress={handleSubmit} theme='primary'/>

                <Button text='register' onPress={goToRegisterPage} theme='secondary' />

              </View>

            )
          
        }
  

      </Formik>
   
    </SafeAreaView>
  );
}

export default Login;