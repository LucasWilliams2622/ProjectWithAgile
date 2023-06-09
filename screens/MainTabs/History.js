import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView, TouchableOpacity, FlatList, ToastAndroid, StatusBar, SafeAreaView, RefreshControl, Alert } from 'react-native'
import React, { useState, useEffect,useContext } from 'react'

import { ICON, COLOR } from '../../constants/Themes'
import ItemTransaction from '../../component/ItemTransaction';
import AxiosInstance from '../../constants/AxiosInstance';
import { AppContext } from '../../utils/AppContext'
import { Card } from 'react-native-paper';
import moment from 'moment';

const windowWIdth = Dimensions.get('window').width;
const History = (props) => {
  const { navigation, route } = props;
  // const { params } = route;
  const [data, setData] = useState([]);
  const [createAt, setCreateAt] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [stateList, setStateList] = useState(0);
  const [refreshControl, setRefreshControl] = useState();
  const { idUser, infoUser } = useContext(AppContext);

  const goAddNew = () => {
    navigation.navigate('AddNew');
  }
  const getTransactionRecent = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate()-1;
    console.log(`Ngày tháng năm: ${year}-0${month}-0${day}`)
    const response = await AxiosInstance().get("transaction/api/search-by-recent?date=" + `${year}-0${month}-0${day}`);
    console.log(response.transaction);
    if (response.result) // lấy dữ liệu thành công
    {
      console.log("===>");
      setData(response.transaction);
      setCreateAt(response.transaction.createAt)
      console.log(response.transaction.createAt);
      setIsLoading(false)
    } else {
      ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT)
    }
  }
  useEffect(() => {

    getTransactionRecent();
    return () => {

    }
  }, []);

  const DeleteTransactionAll = async () => {
    const response = await AxiosInstance().delete("transaction/api/delete-all?idUser=" +idUser);
    console.log(">>>>>>>>>>>>>>>>>>>>>", response);
    console.log(response);
    if (response.result) {
      ToastAndroid.show("Xoá bài viết thành công", ToastAndroid.SHORT);
      // console.log(">>>>>>>>>>>>>>>>>", transaction);
    } else {
      ToastAndroid.show("Xoá bài viết thất bại", ToastAndroid.SHORT)
    }
  }
  const checkDeleteTransaction = async () => {
    Alert.alert(
      'Xóa tất cả',
      'Bạn có muốn xóa tất cả ?',
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
            DeleteTransactionAll();
          }
        }])
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}></View>
      <Text style={styles.text}>Lịch sử chi tiêu</Text>
      <View style={styles.viewSearch}>
        <TextInput placeholder='Tìm kiếm ' style={styles.input} ></TextInput>
        <TouchableOpacity>
          <Image style={styles.imageSearch} source={require('../../asset/icon/icon_search.png')}></Image>
        </TouchableOpacity>
      </View>
      {
        isLoading == true ? (
          <View>
            <View style={styles.jusCenter}>
              <Text style={styles.textToday}>{createAt ? createAt : "00/00/0000"}</Text>

              <View style={styles.viewLine}></View>
            </View>
            <ScrollView>
              <View style={styles.viewListGiveAndPay}>
                <TouchableOpacity onPress={() => { goAddNew() }}>
                  <Image style={{ height: 300, width: 300 }} source={require('../../asset/gif/home.gif')}></Image>
                  <View style={{ marginTop: 30 }}>
                    <Text style={styles.textGif}>Không có chi tiêu nào. Chạm vào đây dể thêm.</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        ) :
          (
            <ScrollView style={{ marginTop: 20 }}>
              <View style={styles.viewLine}></View>
              <View style={styles.viewListGiveAndPay}>
                <View>
                  <FlatList
                    style={{ height: '100%', width: '100%' }}
                    data={data}
                    renderItem={({ item }) => <ItemTransaction data={item} navigation={navigation} />}
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
                  <View style={styles.viewDeleteAll}>
                    <TouchableOpacity style={styles.center} onPress={checkDeleteTransaction}>
                      <Image style={styles.imageDelete} source={require('../../asset/icon/icon_delete.png')}></Image>
                      <Text style={styles.textDelete}>Xoá tất cả</Text>
                    </TouchableOpacity>
                  </View>

                </View>

              </View>
            </ScrollView>
          )
      }
      <StatusBar style="auto" barStyle="dark-content" backgroundColor={COLOR.background2} />
    </SafeAreaView>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
  background: {
    backgroundColor: COLOR.background2,
    height: 200,
    borderRadius: 30,
    marginTop: -40
  },
  jusCenter: {
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 20,
    marginTop: -135,
    color: COLOR.white
  },
  input: {

    width: windowWIdth - 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.gray,
    marginLeft: 30,
    backgroundColor: COLOR.white,
    paddingLeft: 20
  },
  viewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    height: 50,
    marginHorizontal: 15,
  },
  imageSearch: {
    height: 25,
    width: 25,
    left: -40,
    tintColor: COLOR.primary,
  },
  textToday: {
    fontSize: 14,
    fontWeight: '400',
    color: COLOR.black,
    marginLeft: 20,
    marginTop: 15,
    fontStyle: 'italic'
  },
  viewLine: {
    borderBottomWidth: 1,
    width: 350,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 6,
  },
  viewListGiveAndPay: {
    height: '100%', width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  textGif: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  viewDeleteAll: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  center: {
    width: windowWIdth - 200,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLOR.primary,
    backgroundColor: COLOR.white,
    marginBottom: 100

  },
  imageDelete: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 10,
    tintColor: COLOR.darkRed
  },
  textDelete: {
    bottom: 30,
    textAlign: "center",
    left: 10,
    fontSize: 25,
    color: COLOR.primary

  },

})