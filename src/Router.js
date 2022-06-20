/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import FlashMessage from 'react-native-flash-message';
import Register from './pages/Register/Register';
import auth from '@react-native-firebase/auth';
import Rooms from './pages/Rooms/Rooms';

const Stack=createNativeStackNavigator();


const RequiredAuth=()=>{  
  //auth().onAuthStateChanged((user)=>console.log(user));
  auth().signOut();
};


const AuthStack=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginPage' component={Login} options={{
        headerShown:false
      }} />
      <Stack.Screen name='RegisterPage' component={Register} options={{
        headerShown:false
      }} />
    </Stack.Navigator>
  );
};



function Router() {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    auth().onAuthStateChanged((user)=>{
      console.log(user);
      setUserSessions(!!user);
    });
  }, []);
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSessions ? <AuthStack/>
            :
            <Stack.Screen name='RoomsPage' component={Rooms}/>
        }
        
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default Router;
