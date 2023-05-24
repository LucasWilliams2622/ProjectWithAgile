import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'


const data = [
    {
        id: 1,
        name: 'Quần Áo',
        img: require('../../asset/image/clothes.png')
    },
    {
        id: 2,
        name: 'Bus',
        img: require('../../asset/image/bus.png')
    },
    {
        id: 3,
        name: 'Tiền nhà',
        img: require('../../asset/image/buyhome.png')
    },
    {
        id: 4,
        name: 'Điện',
        img: require('../../asset/image/electric.png')
    },
    {
        id: 5,
        name: 'Cafe',
        img: require('../../asset/image/cafe.png')
    },
    {
        id: 6,
        name: 'Ăn uống',
        img: require('../../asset/image/eat.png')
    },
    {
        id: 7,
        name: 'Giải trí',
        img: require('../../asset/image/entertainment.png')
    },
    {
        id: 8,
        name: 'Xăng',
        img: require('../../asset/image/gas.png')
    },
    {
        id: 9,
        name: 'Kinh doanh',
        img: require('../../asset/image/kinhdoanh.png')
    },
    {
        id: 10,
        name: 'Sửa chữa',
        img: require('../../asset/image/machine.png')
    },
    {
        id: 11,
        name: 'Xem phim',
        img: require('../../asset/image/movie.png')
    },
    {
        id: 12,
        name: 'Vé máy bay',
        img: require('../../asset/image/plane.png')
    },
    {
        id: 13,
        name: 'Quà tặng',
        img: require('../../asset/image/quatang.png')
    },
    {
        id: 14,
        name: 'Thuê mượn',
        img: require('../../asset/image/rent.png')
    },
    {
        id: 15,
        name: 'Mua sắm',
        img: require('../../asset/image/shopping.png')
    },
    {
        id: 16,
        name: 'Giày dép',
        img: require('../../asset/image/shoe.png')
    },
    {
        id: 17,
        name: 'Taxi',
        img: require('../../asset/image/taxi.png')
    },
    {
        id: 18,
        name: 'Du lịch',
        img: require('../../asset/image/travel.png')
    },
    {
        id: 19,
        name: 'Tiền nước',
        img: require('../../asset/image/water.png')
    },
    {
        id: 20,
        name: 'Đồ gia dụng',
        img: require('../../asset/image/cooking.png')
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