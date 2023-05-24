import { StyleSheet, Text, View, Dimensions, } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ICON, COLOR } from '../../constants/Themes'
import TabThu from '../TestTab/TabThu';
import TabChi from '../TestTab/TabChi';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createMaterialTopTabNavigator();
const TopTabThuChi = () => {
    return (
        <SafeAreaView style={styles.container}>

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
                    swipeEnabled: true,

                }}

                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'gray',
                    indicatorStyle: {
                        backgroundColor: 'white',
                    },
                }}
                initialRouteName="TabThuChi">
                <Tab.Screen name="CHI TIÊU" component={TabChi} />
                <Tab.Screen name="THU NHẬP" component={TabThu} />
            </Tab.Navigator>
        </SafeAreaView>

    )
}

export default TopTabThuChi

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})