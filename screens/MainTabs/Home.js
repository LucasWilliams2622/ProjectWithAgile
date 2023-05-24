import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const Home = () => {

  const [isShow, setisShow] = useState(true);

  return (
    <View>
      <View style={styles.background}></View>

      <TouchableOpacity>
        <View style={styles.viewAvatarAndText}>
          <Image source={require('../../asset/icon/icon_editprofile.png')} style={styles.imageProfile}></Image>
          <Text style={styles.textHello}>Hello Bro</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.viewMenu}>
        <View style={styles.viewIn4Menu}>

          <View style={styles.viewIn4Menu1}>
            <View style={[styles.flex, { alignItems: 'center' }]}>
              <Image style={styles.image} source={require('../../asset/icon/icon_calender.png')}></Image>
              <Text style={styles.textDate}>23-05-2023</Text>
            </View>
            <TouchableOpacity onPress={() => setisShow(!isShow)}>
              {
                isShow ? <Image style={styles.imageInvisible} source={require('../../asset/icon/icon_closed_eye.png')}></Image> : <Image style={styles.imageInvisible} source={require('../../asset/icon/icon_eye.png')}></Image>
              }
            </TouchableOpacity>
          </View>

          <View style={styles.viewIn4Menu2}>
            <Text style={styles.textPrice}>Tổng: </Text>
            {
              isShow ? <Text style={styles.textPrice}>********</Text> : <Text style={styles.textPrice}>0 VND</Text>
            }

          </View>

          <View style={styles.viewIn4Menu3}>
            <View style={[styles.flex, { alignItems: 'center' }]}>
              <Text style={styles.textGiveAndPay}>Thu Nhập:</Text>
              {
                isShow ? <Text style={styles.textGiveAndPay}>********</Text> : <Text style={styles.textGiveAndPay}>1.000 VND</Text>
              }
            </View>
            <View style={[styles.flex, { alignItems: 'center' }]}>
              <Text style={styles.textGiveAndPay}>Chi Tiêu:</Text>
              {
                isShow ? <Text style={styles.textGiveAndPay}>********</Text> : <Text style={styles.textGiveAndPay}>-1.000 VND</Text>
              }
            </View>
          </View>

        </View>
      </View>

      <Text style={styles.textToday}>Hôm nay:</Text>

      <ScrollView>
        <View style={styles.viewListGiveAndPay}>
          <View>
            <TouchableOpacity>
              <Image style={{ height: 100, width: 100 }} source={require('../../asset/image/bedroom.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity>
              <Text style={styles.textGif}>Hãy thêm chi tiêu hôm nay. Chạm vào đây dể thêm.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row'
  },
  jusCenter: {
    justifyContent: 'center'
  },
  itemCenter: {
    alignItems: 'center'
  },
  background: {
    backgroundColor: COLOR.title,
    height: 200,
    borderRadius: 30,
    marginTop: -40
  },
  viewAvatarAndText: {
    flexDirection: 'row',
    //fontFamily:
    alignItems: 'center',
    marginTop: -125,
    marginLeft: 17
  },
  imageProfile: {
    height: 50,
    width: 50,
    marginRight: 13
  },
  textHello: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.white
  },
  viewMenu: {
    alignItems: 'center',
    marginTop: 10
  },
  viewIn4Menu: {
    backgroundColor: COLOR.secondary,
    height: 100,
    width: 310,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLOR.gray,
    marginTop: -70
  },
  viewIn4Menu1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12
  },
  viewIn4Menu2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3
  },
  viewIn4Menu3: {
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'space-between'
  },
  image: {
    height: 30,
    width: 30
  },
  textDate: {
    //fontFamily:
    fontSize: 14,
    // fontFamily:,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 10,
    color: COLOR.black
  },
  imageInvisible: {
    height: 30,
    width: 30
  },
  textPrice: {
    //fontFamily:
    fontSize: 20,
    // fontFamily:,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 10,
    color: COLOR.black
  },
  textGiveAndPay: {
    //fontFamily:
    fontSize: 14,
    // fontFamily:,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.black
  },
  textToday: {
    //fontFamily:
    fontSize: 14,
    // fontFamily:,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.black,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5
  },
  viewListGiveAndPay: {
    width: 400,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGif: {
    //fontFamily:
    fontSize: 14,
    // fontFamily:,
    fontStyle: 'normal',
    fontWeight: '400',
  }
})