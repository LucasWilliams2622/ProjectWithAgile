import { Alert, SafeAreaView, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/BeginTabs/Login'
import Register from './screens/BeginTabs/Register'
import ChangePassword from './screens/BeginTabs/ChangePassword'
import SignPassword from './screens/BeginTabs/SignPassword'
import Welcome from './screens/BeginTabs/Welcome'
import SignCode from './screens/BeginTabs/SignCode'
import TabThu from './screens/MainTabs/TabThu';

import Intro from './screens/BeginTabs/Intro'

import AddNew from './screens/MainTabs/AddNew'
import BottomTabs from './screens/MainTabs/BottomTabs'
import Chart from './screens/MainTabs/Chart'
import History from './screens/MainTabs/History'
import Home from './screens/MainTabs/Home'
import Item from './screens/MainTabs/Item'

import Setting from './screens/MainTabs/Setting'
import Profile from './screens/MainTabs/Profile'
import Test from './screens/TestTab/AddGif'
import Test2 from './screens/TestTab/Test'
import ItemTransaction from './component/ItemTransaction'
import ItemCollect from './component/ItemCollect'
import ItemYear from './component/ItemYear'

import TestPicker from './screens/TestTab/TestPicker'
import PieChartScreen from './screens/TestTab/PieChartScreen'
import messaging from '@react-native-firebase/messaging';


const Stack = createNativeStackNavigator();
const StackBegin = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />


    </Stack.Navigator>
  )
}
const App = () => {
  useEffect(() => {
    getDeviceToken();

  }, []);
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message arrived in foreground mode!',
        JSON.stringify(remoteMessage),
      );
    });
    return unsubscribe;
  }, []);
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="StackBegin" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="StackBegin" component={StackBegin} />
    //     <Stack.Screen name="Profile" component={Profile} />
    //     <Stack.Screen name="BottomTabs" component={BottomTabs} />
    //     <Stack.Screen name="AddNew" component={AddNew} />
    //     <Stack.Screen name="Setting" component={Setting} />
    //    </Stack.Navigator>
    //  </NavigationContainer>
    <Login />
  )
}

export default App

