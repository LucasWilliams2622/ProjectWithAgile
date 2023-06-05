import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosInstance from '../../constants/AxiosInstance';


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
    const [data, setData] = useState([]);

    useEffect(() => {
        const getAllExpense = async () => {
            const response = await AxiosInstance().get("category/api/search-by-type?type=false");
            console.log(response.category);
            if (response.result) // lấy dữ liệu thành công
            {
                setData(response.category);
            } else {
                ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT)
            }
        }
        getAllExpense();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => <View style={{
                    width: Dimensions.get('window').width / 2.2,

                }} >
                    <TouchableOpacity style={styles.itemContainer}
                        onPress={() => navigation.navigate('AddNew', { name: item.name, image: item.image })}>
                        <Image style={styles.image} source={{uri:item.image}} />
                        <Text style={styles.txt}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
                }
            />
            {/* <FlatList
            data={data}
            renderItem={({ item }) => <ItemCollect dulieu={item} navigation={navigation} />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          /> */}
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