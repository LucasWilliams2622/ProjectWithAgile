import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ItemTransaction = () => {
  return (
    <View style={{ marginTop: 150, }}>
      <View style={styles.boxItem}>
        <View style={styles.boxContent}>
          <Image style={styles.image} resizeMode='cover' source={require('../asset/icon/item/water.png')} />
          <View style={styles.boxText} >
            <Text style={styles.title}>Thuc An</Text>
            <Text style={styles.money}>-100.000 VND</Text>
            <Text style={styles.note}>Khong co ghi chu</Text>
          </View>

          <View style={styles.boxDetail}>
            <View style={styles.boxIcon}>
              <Image style={[styles.icon, { tintColor: COLOR.primary, width: 30, height: 27 }]} source={require('../asset/icon/icon_edit.png')} />
              <Image style={[styles.icon, { tintColor: COLOR.darkRed }]} source={require('../asset/icon/icon_delete.png')} />
            </View>
            <Text style={styles.date}>11-11-2222</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ItemTransaction

const styles = StyleSheet.create({
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
    marginLeft: 30,
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
    fontSize: 13,
  }
})