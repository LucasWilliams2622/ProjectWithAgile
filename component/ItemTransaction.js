import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React,{useEffect, useState} from 'react'
import { COLOR } from '../constants/Themes'
import AxiosInstance from '../constants/AxiosInstance';
import moment from 'moment';
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ItemTransaction = (props) => {
  
  const { data, navigation } = props;
  const [createAt, setCreateAt] = useState('');
  const [image2, setImage] = useState('')
  // const [data, setData] = useState([])
  const forMatDate = ()=>{
    const date = new Date(data.createAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
   setCreateAt(`0${day}-0${month}-${year}`);
  }
  
  const EditTransaction = async () => {
    console.log('click item');
    navigation.navigate("AddNew", { id: data._id });
  }

  const DeleteTransaction = async () => {
    const response = await AxiosInstance().delete("transaction/api/delete-by-id?id=" + data._id);
    console.log(response);
    if (response.result == true) {//lấy thành công
      ToastAndroid.show("Xoá thành công", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Xoá thất bại", ToastAndroid.SHORT)
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
  useEffect(() => {
    forMatDate();
    return () => {

    }
  }, []);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.boxItem}>
        <View style={styles.boxContent}>
          <Image style={styles.image} resizeMode='cover'
          //  source={{uri:transaction.category.image}} 
          source={require('../asset/icon/item/drink.png')}

           />
          <View style={styles.boxText} >
          <Text style={styles.title}>{data.category.name}</Text>
            <Text style={styles.money}>{data.money}</Text>
            <Text style={styles.note}>{data.note}</Text>
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
            <Text style={styles.date}>{createAt}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default ItemTransaction

const styles = StyleSheet.create({
  container: {
    marginTop: 5, flexDirection: 'column',
   left:-8,
    // borderWidth:2,
    // borderColor:'red',
   marginBottom:10,
  },
  boxItem: {
    flexDirection: 'row',
    backgroundColor: COLOR.secondary,
    marginLeft: 40,
  },
  image: {
    borderRadius: 1000,
    borderColor: COLOR.black,
    height: 60,
    width: 60,
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
    left: -30,
    width:100,
    // borderWidth:2,
    // borderColor:'red',
  },
  boxDetail: {
    flexDirection: 'column',
    marginLeft: 15,
    justifyContent: 'space-between',
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
    fontSize: 24,
    fontWeight: '400',
    color: COLOR.black,
    left: -5,
  },
  money: {
    fontWeight: '450',
    fontSize: 18,
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