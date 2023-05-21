import { StyleSheet, Text, View, Dimensions, } from 'react-native'
import React from 'react'

import PieChartScreen from './PieChartScreen'
import TestPicker from './Test'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ICON, COLOR } from '../../constants/Themes'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
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
                inactiveTintColor: 'gray',
                indicatorStyle: {
                    backgroundColor: 'white',
                },
              }}
            initialRouteName="TestPicker">
            <Tab.Screen name="PieChartScreen" component={PieChartScreen} />
            <Tab.Screen name="TestPicker" component={TestPicker} />
        </Tab.Navigator>
    )
}

export default TopTab

const styles = StyleSheet.create({})