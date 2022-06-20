/* eslint-disable no-unused-vars */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import FlashMessage from 'react-native-flash-message';
import Register from './pages/Register/Register';


const Stack=createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginPage' component={Login} options={{
          headerShown:false
        }} />
        <Stack.Screen name='RegisterPage' component={Register} options={{
          headerShown:false
        }} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default Router;
