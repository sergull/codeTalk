import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Rooms from './Pages/Rooms';

const Stack = createStackNavigator();



function App(){


  return (
  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginPage' component={Login}/>
        <Stack.Screen name='RegisterPage' component={Register}/>
        <Stack.Screen name='RoomsPage' component={Rooms}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
