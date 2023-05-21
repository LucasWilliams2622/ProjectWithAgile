import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PieChartScreen from './PieChartScreen'
import TestPicker from './Test'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
    return (
    
            // <Tab.Navigator initialRouteName='PieChartScreen' screenOptions={{

            //     // tabBarActiveTintColor: 'black',
            //     // tabBarLabelStyle: { fontSize: 12 },
            //     // tabBarStyle: { backgroundColor: 'white', marginHorizontal: 120, fontWeight: 'bold' },
            //     // tabBarItemStyle: {
            //     //     borderRadius: 10,
            //     // }

            // }}>
            //     <TopTab.Navigator name="PieChartScreen" component={PieChartScreen} />
            //     <TopTab.Navigator name="TestPicker" component={TestPicker} />
            // </Tab.Navigator>
         <Tab.Navigator>
         <Tab.Screen name="PieChartScreen" component={PieChartScreen} />
         <Tab.Screen name="TestPicker" component={TestPicker} />
       </Tab.Navigator>
    )
}

export default TopTab

const styles = StyleSheet.create({})