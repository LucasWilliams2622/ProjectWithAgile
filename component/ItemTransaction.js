import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes'
import AxiosInstance from '../constants/AxiosInstance';
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ItemTransaction = (props) => {
  const { dulieu, navigation } = props;

  const EditTransaction = async () => {
    console.log('click item');
    navigation.navigate("AddNew", { id: dulieu._id });
  }

  const DeleteTransaction = async () => {
    const response = await AxiosInstance().delete("transaction/api/delete-by-id?id=" + dulieu._id);
    console.log(response);
    if (response.result == true) {//lấy thành công
      ToastAndroid.show("Xoá bài viết thành công", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Xoá bài viết thất bại", ToastAndroid.SHORT)
    }
  }

  const checkDeleteTransaction = async () => {
    Alert.alert(
      //Title
      'Xóa 1 mục',
      //Body
      'Bạn có muốn xóa mục này ?',
      [
        {
          text: 'Không',
          onPress: () => {
            console.log('Không xóa');
          }
        },
        {
          text: 'Có',
          onPress: () => {
            DeleteTransaction();
          }
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxItem}>
        <View style={styles.boxContent}>
          <Image style={styles.image} resizeMode='cover' source={require('../asset/icon/item/water.png')} />
          <View style={styles.boxText} >
            <Text style={styles.title}>{dulieu.note}</Text>
            <Text style={styles.money}>{dulieu.money}</Text>
            <Text style={styles.note}>Không có ghi chú</Text>
          </View>
          <View style={styles.boxDetail}>
            <View style={styles.boxIcon}>
              <TouchableOpacity onPress={EditTransaction}>
                <Image style={[styles.icon, { tintColor: COLOR.primary, width: 30, height: 27 }]} source={require('../asset/icon/icon_edit.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={checkDeleteTransaction}>
                <Image style={[styles.icon, { tintColor: COLOR.darkRed }]} source={require('../asset/icon/icon_delete.png')} />
              </TouchableOpacity>

            </View>
            <Text style={styles.date}>{dulieu.createAt}</Text>
          </View>
        </View>
      </View>
    </View>

  )
}

export default ItemTransaction

const styles = StyleSheet.create({
  container: {
    marginTop: 5, flexDirection: 'column'
  },
  boxItem: {
    flexDirection: 'row',
    backgroundColor: COLOR.secondary,
    marginLeft: 40,
  },
  image: {
    borderRadius: 1000,
    borderColor: COLOR.black,
    height: 55,
    width: 55,
    left: -36,
  },
  boxContent: {
    borderColor: COLOR.black,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    width: windowWIdth - 50,

  },
  boxText: {
    flexDirection: 'column',
    marginRight: 30,
    borderColor: COLOR.red,
    borderWidth: 1,
    left: -45,
  },
  boxDetail: {
    flexDirection: 'column',
    marginLeft: 15,
    justifyContent: 'space-between',
    borderColor: COLOR.red,
    borderWidth: 1,
    marginRight: 5,
  },
  boxIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  icon: {
    width: 25,
    height: 25,
    margin: 3,
  },
  title: {
    fontSize: 21,
    fontWeight: '400',
    color: COLOR.black,
    left: -5,
  },
  money: {
    fontWeight: '450',
    fontSize: 10,
    color: COLOR.black,
    fontStyle: 'italic',
    marginVertical: 7,
  },
  note: {
    fontWeight: '400',
    fontSize: 13,
    color: COLOR.black,
    left: -5,

  },
  date: {
    fontWeight: '500',
    color: COLOR.black,
    fontSize: 10,
  }
})