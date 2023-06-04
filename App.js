import { Alert, SafeAreaView, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/BeginTabs/Login'
import Register from './screens/BeginTabs/Register'
import ChangePassword from './screens/BeginTabs/ChangePassword'
import SignPassword from './screens/BeginTabs/SignPassword'
import Welcome from './screens/BeginTabs/Welcome'
import SignCode from './screens/BeginTabs/SignCode'
import TabThu from './screens/MainTabs/TabThu';
import TabChi from './screens/MainTabs/TabChi';
import Intro from './screens/BeginTabs/Intro'

import AddNew from './screens/MainTabs/AddNew'
import BottomTabs from './screens/MainTabs/BottomTabs'
import Chart from './screens/MainTabs/Chart'
import History from './screens/MainTabs/History'
import Home from './screens/MainTabs/Home'

import Setting from './screens/MainTabs/Setting'
import Profile from './screens/MainTabs/Profile'
import ItemTransaction from './component/ItemTransaction'
import Loading from './component/Loading'

import ItemCollect from './component/ItemCollect'
import ItemYear from './component/ItemYear'
import TopTabThuChi from './screens/MainTabs/TopTabThuChi';
import TestPicker from './screens/TestTab/TestPicker'
import Test from './screens/TestTab/TestReduxNo2'

import messaging from '@react-native-firebase/messaging';
import { Provider } from 'react-redux';
import Redux from './redux/store'
const Stack = createNativeStackNavigator();
const StackBegin = () => {
  return (
    <Stack.Navigator initialRouteName="Test" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SignPassword" component={SignPassword} />
      <Stack.Screen name="SignCode" component={SignCode} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Test" component={Test} />



    </Stack.Navigator>
  )
}
const App = () => {
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    // console.log("TOKEN NOTIFICATION",token);
  };
  useEffect(() => {
    getDeviceToken();
    // Lắng nghe sự kiện khi ứng dụng chạy ngầm
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message arrived in foreground mode!',
        JSON.stringify(remoteMessage),
      );
    });
    return unsubscribe;
  }, []);
  const [isLogin, setIsLogin] = useState(false)
  return (
    <Provider store={Redux.store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
          {
            !isLogin ?
              <Stack.Screen name="StackBegin" component={StackBegin} />
              :
              <Stack.Screen name="BottomTabs" component={BottomTabs} setIsLogin={setIsLogin} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App

