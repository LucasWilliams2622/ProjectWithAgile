import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const data = [
    {
        id: 1,
        name: 'Quần Áo',
        img: require('../../Resource/clothes.png')
    },
    {
        id: 2,
        name: 'Bus',
        img: require('../../Resource/bus.png')
    },
    {
        id: 3,
        name: 'Tiền nhà',
        img: require('../../Resource/buyhome.png')
    },
    {
        id: 4,
        name: 'Điện',
        img: require('../../Resource/electric.png')
    },
    {
        id: 5,
        name: 'Cafe',
        img: require('../../Resource/cafe.png')
    },
    {
        id: 6,
        name: 'Ăn uống',
        img: require('../../Resource/eat.png')
    },
    {
        id: 7,
        name: 'Giải trí',
        img: require('../../Resource/entertainment.png')
    },
    {
        id: 8,
        name: 'Xăng',
        img: require('../../Resource/gas.png')
    },
    {
        id: 9,
        name: 'Kinh doanh',
        img: require('../../Resource/kinhdoanh.png')
    },
    {
        id: 10,
        name: 'Sửa chữa',
        img: require('../../Resource/machine.png')
    },
    {
        id: 11,
        name: 'Xem phim',
        img: require('../../Resource/movie.png')
    },
    {
        id: 12,
        name: 'Vé máy bay',
        img: require('../../Resource/plane.png')
    },
    {
        id: 13,
        name: 'Quà tặng',
        img: require('../../Resource/quatang.png')
    },
    {
        id: 14,
        name: 'Thuê mượn',
        img: require('../../Resource/rent.png')
    },
    {
        id: 15,
        name: 'Mua sắm',
        img: require('../../Resource/shopping.png')
    },
    {
        id: 16,
        name: 'Giày dép',
        img: require('../../Resource/shoe.png')
    },
    {
        id: 17,
        name: 'Taxi',
        img: require('../../Resource/taxi.png')
    },
    {
        id: 18,
        name: 'Du lịch',
        img: require('../../Resource/travel.png')
    },
    {
        id: 19,
        name: 'Tiền nước',
        img: require('../../Resource/water.png')
    },
    {
        id: 21,
        name: 'Đồ gia dụng',
        img: require('../../Resource/cooking.png')
    },
    {
        id: 33,
        name: 'Tiền nước',
        img: require('../../Resource/water.png')
    },
    {
        id: 55,
        name: 'Đồ gia dụng',
        img: require('../../Resource/cooking.png')
    },
    {
        id: 888,
        name: 'Tiền nước',
        img: require('../../Resource/water.png')
    },
    {
        id: 66,
        name: 'Đồ gia dụng',
        img: require('../../Resource/cooking.png')
    },
    {
        id: 65,
        name: 'Tiền nước',
        img: require('../../Resource/water.png')
    },
    {
        id: 99,
        name: 'Đồ gia dụng',
        img: require('../../Resource/cooking.png')
    },

]

const TopTabThuChi = () => {

    return (
        <View style={{flex : 1}}>


            <FlatList

                data={data}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => <View style={{

                    width: Dimensions.get('window').width / 2.2,


                }} >
                    <TouchableOpacity style={styles.itemContainer}>
                        <Image style={styles.image} source={item.img} />
                        <Text style={styles.txt}>{item.name}</Text>
                    </TouchableOpacity>
                </View>

                }
            />
        </View>
    );
}

export default TopTabThuChi

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    name: {
        fontSize: 16,
        marginRight: 10,
    },
    image: {
        width: 50,
        height: 50,
    },
    txt: {
        fontSize: 15,
    }
})