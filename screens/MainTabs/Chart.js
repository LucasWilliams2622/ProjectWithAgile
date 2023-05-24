import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemYear from '../../component/ItemYear';
import ItemMonth from '../../component/ItemMonth';
import { ICON, COLOR } from '../../constants/Themes'
import { PieChart } from 'react-native-charts-wrapper';
const Tab = createMaterialTopTabNavigator();

const windowWidth = Dimensions.get('window').width;

const Chart = () => {
  return (

    <Tab.Navigator 
    tabBarShowLabel
            // tabBarPressColor='white'
            tabBarActiveTintColor='red'
            tabBarShowIcon={true}
            keyboardDismissMode='interactive'
            backBehavior='initialRoute'
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14 },
                tabBarItemStyle: { width: windowWidth / 2 },
               tabBarStyle: { backgroundColor: COLOR.primary },
                swipeEnabled:true,
            
            }}
           
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'white',
                indicatorStyle: {
                    backgroundColor: 'white',
                },
              }}
            initialRouteName="ItemMonth"
    >
      <Tab.Screen name="Theo Tháng" component={ItemMonth} />
      <Tab.Screen name="Theo Năm" component={ItemYear} />
    </Tab.Navigator>

  )
}

export default Chart

const styles = StyleSheet.create({})