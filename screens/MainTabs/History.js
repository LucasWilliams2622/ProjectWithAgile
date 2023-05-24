import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'

const History = () => {
  return (
    <View>

      <View style={styles.background}></View>

      <Text style={styles.text}>Lịch sử chi tiêu</Text>

      <View style={styles.viewSearch}>
        <TextInput placeholder='Tìm kiếm' style={styles.input}></TextInput>
        <Image style={styles.imageSearch} source={require('../../asset/icon/icon_search.png')}></Image>
      </View>

      <Text style={styles.textToday}>23-05-2023</Text>

      <View style={styles.jusCenter}>
        <View style={styles.viewLine}></View>
      </View>

      <ScrollView>
        <View style={styles.viewListGiveAndPay}>
          <View>
            <TouchableOpacity>
              <Image style={{ height: 100, width: 100 }} source={require('../../asset/image/bedroom.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity>
              <Text style={styles.textGif}>Không có chi tiêu nào. Chạm vào đây dể thêm.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default History

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLOR.title,
    height: 200,
    borderRadius: 30,
    marginTop: -40
  },
  jusCenter: {
    justifyContent: 'center'
  },
  text: {
    //fontFamily:
    fontSize: 20,
    // fontFamily:,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 10,
    marginTop: -135,
    color: COLOR.white
  },
  input: {
    height: 40,
    width: 360,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.gray,
    marginTop: 4,
    paddingLeft: 6,
    backgroundColor: COLOR.white
  },
  viewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imageSearch: {
    height: 30,
    width: 30,
    marginLeft: -40
  },
  textToday: {
    //fontFamily:
    fontSize: 14,
    // fontFamily:,
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
    //fontFamily:
    fontSize: 14,
    // fontFamily:,
    fontStyle: 'normal',
    fontWeight: '400',
  }
})