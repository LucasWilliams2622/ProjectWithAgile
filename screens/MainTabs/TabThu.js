import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'


const data = [
    {
        id: 1,
        name: 'Chứng khoán',
        img: require('../../asset/icon/item/stock.png')
    },
    {
        id: 2,
        name: 'Quà tặng',
        img: require('../../asset/icon/item/gift.png')
    },
    {
        id: 3,
        name: 'Thưởng',
        img: require('../../asset/icon/item/wage.png')

    },
    {
        id: 4,
        name: 'Kinh doanh',
        img: require('../../asset/icon/item/business.png')
    },
    {
        id: 5,
        name: 'Lì xì',
        img: require('../../asset/icon/item/money.png')
    },
    {
        id: 6,
        name: 'Luong',
        img: require('../../asset/icon/item/bonus.png')
    },
    {
        id: 7,
        name: 'Trúng thưởng',
        img: require('../../asset/icon/item/prize.png')
    },
    {
        id: 8,
        name: 'Khác',
        img: require('../../asset/icon/item/other.png')
    }
]

const TabThu = (props) => {
    const { navigation } = props;

    return (
        <View style={{ flex: 1 }}>
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

export default TabThu

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
});