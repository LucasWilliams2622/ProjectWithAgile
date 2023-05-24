import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const Home = () => {

  const [isShow, setisShow] = useState(true);
  return (
    <View>
      <Text>Home</Text>
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
    height: 180,
    borderRadius: 20,
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
    fontSize: 12,
    // fontFamily:,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.black
  },
  textToday: {
    //fontFamily:
    fontSize: 14,
    // fontFamily:,
    fontStyle: 'italic',
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