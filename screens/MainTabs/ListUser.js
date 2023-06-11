import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, RefreshControl } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { AppContext } from '../../utils/AppContext';
import AxiosInstance from '../../constants/AxiosInstance';
import ItemInfoUser from '../../component/ItemInfoUser';

const ListUser = (props) => {
    const { navigation } = props
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([])
    //   const { idUser, infoUser ,currentDay} = useContext(AppContext);
    const [stateList, setStateList] = useState(0)
    const [refreshControl, setRefreshControl] = useState(false)

    const getAllUser = async () => {
        try {
            const response = await AxiosInstance().get("/user/api/list");
            console.log("All  User: ", response.users);
            if (response.result) {
                setUsers(response.users);
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllUser();
        return () => {

        }
    }, [stateList])
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image style={[styles.iconBack, { tintColor: COLOR.white }]} source={require('../../asset/icon/icon_back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.title}>Danh sách người dùng:</Text>
                <Text></Text>
            </View>
            <View style={styles.boxContent}>
                <FlatList
                    style={{ height: 1000, width: '100%', marginBottom: 800 }}
                    data={users}
                    renderItem={({ item }) => <ItemInfoUser users={item} navigation={navigation} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshControl} onRefresh={() => {
                            setRefreshControl(true)
                            console.log("Refresh")
                            setStateList(stateList + 1)
                            console.log(stateList)

                            setRefreshControl(false)
                        }} colors={['green']} />
                    }
                />
            </View>
        </SafeAreaView>

    )
}

export default ListUser

const styles = StyleSheet.create({
    container: {

    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.background2,
        height: 60,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        flexDirection: 'row',


    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        fontStyle: 'italic',
        color: COLOR.white,
    },
    iconBack: {
        width: 25,
        height: 25,
    },
    boxContent: {
        marginHorizontal: 10,
        marginTop:10,
    }
})