/* eslint-disable no-unused-vars */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';


const Stack=createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen name='LoginPage' component={Login} options={{
          headerShown:false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
