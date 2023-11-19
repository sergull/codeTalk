import 'react-native-gesture-handler';
import Reactf, { useState, useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Rooms from './Pages/Rooms';
import auth from "@react-native-firebase/auth";
import Messages from './Pages/Messages';
import FlashMessage from "react-native-flash-message";
import Icon from "react-native-vector-icons/MaterialIcons"



const Stack = createStackNavigator();



function App() {

  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user))
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='RegisterPage' component={Register} />
      </Stack.Navigator>
    )
  }


  return (

    <NavigationContainer>
      <Stack.Navigator>
        {userSession ? (
          <>
            <Stack.Screen name='RoomsPage' component={Rooms} options={{headerTitle: "Odalar", headerTintColor: "#FFA33C" }} />
            <Stack.Screen name='MessagePage' component={Messages}  options={({route}) => ({
              title: route.params.item.room,
              headerTitleAlign: 'center',
              headerTintColor: "#FFA33C",
              headerRight:() =>(
                <Icon name="logout" size={27} style={{color:"#FFA33C", marginRight:8}} onPress={()=>auth().signOut()} />
              )
            })}/>
          </>
        ) : (
          <>
            <Stack.Screen name='AuthStackPage' component={AuthStack} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>

  );

  // return (

  //   <NavigationContainer>
  //     <Stack.Navigator>
  //           <Stack.Screen name='AuthStackPage' component={AuthStack} options={{ headerShown: false }} />
  //           <Stack.Screen name='RoomsPage' component={Rooms} />

  //     </Stack.Navigator>
  //   </NavigationContainer>

  // );
}


export default App;
