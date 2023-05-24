import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemYear from '../../component/ItemYear';
import ItemMonth from '../../component/ItemMonth';
import { ICON, COLOR } from '../../constants/Themes'
import { PieChart } from 'react-native-charts-wrapper';
const Tab = createMaterialTopTabNavigator();


const Chart = () => {
  return (
    
      <Tab.Navigator screenOptions={{tabBarStyle: { backgroundColor: 'blue' },tabBarActiveTintColor: COLOR.white}}>
      <Tab.Screen name="Theo Tháng" component={ItemMonth} />
      <Tab.Screen name="Theo Năm" component={ItemYear} />
    </Tab.Navigator>
    
  )
}

export default Chart

const styles = StyleSheet.create({})