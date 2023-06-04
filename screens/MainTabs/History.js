import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView, TouchableOpacity, FlatList, ToastAndroid, StatusBar, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { ICON, COLOR } from '../../constants/Themes'
import ItemTransaction from '../../component/ItemTransaction';
import AxiosInstance from '../../constants/AxiosInstance';
const windowWIdth = Dimensions.get('window').width;
const History = (props) => {

  const { navigation, route } = props;
  const { params } = route;
  const [data, setdata] = useState([]);
  const [createAt, setCreateAt] = useState("");
  const [isLoading, setisLoading] = useState(false)
  const [stateList, setStateList] = useState(0);
  const [refreshControl, setRefreshControl] = useState();
  const goAddNew = () => {
    navigation.navigate('AddNew');
  }
  useEffect(() => {
    const getTransaction = async () => {
      const response = await AxiosIntance().get("transaction/api/get-all-transaction");
      console.log(response.transaction);
      if (response.result == true) // lấy dữ liệu thành công
      {
        setdata(response.transaction);
      } else {
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT)
      }
    }
    getTransaction();
  }, [stateList]);
  const checkIsLoading = () => {
    if (data.length === 0) {
      setisLoading(true);
    }
    else {
      setisLoading(false);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}></View>
      <Text style={styles.text}>Lịch sử chi tiêu</Text>
      <View style={styles.viewSearch}>
        <TextInput placeholder='Tìm kiếm theo ngày(2003-02-01)' style={styles.input} value={createAt} onChangeText={(text) => setCreateAt(text)}></TextInput>
        <TouchableOpacity onPress={getTransactionByDate}>
          <Image style={styles.imageSearch} source={require('../../asset/icon/icon_search.png')}></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.textToday}>{createAt ?createAt :"00/00/0000" }</Text>
      {
        isLoading == true ? (
          <View>
            <View style={styles.jusCenter}>
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
        ) : (
          <ScrollView style={{ marginTop: 20 }}>
            <View style={styles.viewListGiveAndPay}>
              <View>
                <FlatList
                  data={data}
                  renderItem={({ item }) => <ItemTransaction dulieu={item} navigation={navigation} />}
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
                {/* data.map((item)=><ItemTransaction dulieu={item} key={item._id} navigation={navigation} />) */}
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
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.black,
    marginTop: 55,
    marginLeft: 20,
    marginBottom: 10
  },
  viewLine: {
    borderBottomWidth: 1,
    width: 350,
    marginRight: 20,
    marginLeft: 20
  },
  viewListGiveAndPay: {
    width: 400,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  textGif: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  }
})