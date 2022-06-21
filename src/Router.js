/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import FlashMessage from 'react-native-flash-message';
import Register from './pages/Register/Register';
import auth from '@react-native-firebase/auth';
import Rooms from './pages/Rooms/Rooms';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import colors from './styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActivityIndicator } from 'react-native';

const Stack=createNativeStackNavigator();


const AuthStack=()=>{
  return (
    <>
      <Stack.Screen name='LoginPage' component={Login} options={{
        headerShown:false
      }} />
      <Stack.Screen name='RegisterPage' component={Register} options={{
        headerShown:false
      }} />
    </>
  );
};



function Router() {
  const [userSessions, setUserSessions] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    auth().onAuthStateChanged((user)=>{
      setUserSessions(!!user);
      setloading(false);
    });

  }, []);
  
  const logout=()=>{
    auth().signOut();
  };

  if(loading){
    return <ActivityIndicator size={30}/>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:colors.red,
            color:colors.black
          }
        }}
      >
        {
          !userSessions 
            ? 
            AuthStack()
            :
            <>
              <Stack.Screen name='RoomsPage' component={Rooms} options={{
                title:'Rooms',
                headerRight:()=><Icon name='logout' onPress={logout} color={colors.black} size={30}/>
              }}/>
              <Stack.Screen name='RoomDetailPage'  component={RoomDetail} options={{
                title:'Room detail',
                headerRight:()=><Icon name='logout' onPress={logout} color={colors.black} size={30}/>,
              }}/>
            </>
        }
        
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default Router;
