import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes';
const windowWIdth = Dimensions.get('window').width;

const ItemCollect = () => {
  return (
    <View style={styles.ItemCollect}>
      <Image style={styles.icon} 
      source={require('../asset/image/bedroom.png')} />
      <Text style={styles.text}>ItemCollect</Text>
    </View>
  )
}

export default ItemCollect

const styles = StyleSheet.create({
  ItemCollect: {
    width: windowWIdth / 2 - 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    height: 35,
    width: 35,
    marginHorizontal: 5,

  },
  text: {
    marginLeft: 12,
    color: COLOR.dark,
    letterSpacing: 0.2,
    fontWeight: '400',
    fontSize: 14,
    fontStyle: 'normal'

  }
})