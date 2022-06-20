/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {SafeAreaView,View,Text,TextInput,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import Input from '../../components/Input/Input';


import { Formik } from 'formik';
import * as yup from 'yup';

import styles from './Login.style';

function Login() {

  
  
  const login=()=>{

    auth().signInWithEmailAndPassword('test@mail.com','123123')
      .then(res=>console.log(res))
      .catch(e=>console.log(e));

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
          auth=>console.log(auth)
        }
      >
        {
          ({values,errors,handleChange,handleSubmit})=>
            (
              <View style={styles.form_container}>
                <Input error={errors.email} value={values.email} onChangeText={handleChange('email')} placeHolder='type email'/>

                <Input error={errors.password} value={values.password} onChangeText={handleChange('password')} isSecure={true} placeHolder='type password'/>
                <Input error={errors.repassword} value={values.repassword} onChangeText={handleChange('repassword')} isSecure={true} placeHolder='type repasswor'/>

                <Button 
                  title='register'
                  onPress={handleSubmit}
                />
                <Button title='login' />

              </View>

            )
          
        }
  

      </Formik>
   
    </SafeAreaView>
  );
}

export default Login;