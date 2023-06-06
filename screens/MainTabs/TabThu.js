import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosInstance from '../../constants/AxiosInstance';



const TabThu = (props) => {
    const { navigation } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        const getAllExpense = async () => {
            const response = await AxiosInstance().get("category/api/search-by-type?type=false");
            console.log(response);
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