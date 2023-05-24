import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const data = [
  {
      id: 1,
      name: 'Chứng khoán',
      img: require('../../Resource/chungkhoan.png')
  },
  {
      id: 2,
      name: 'Quà tặng',
      img: require('../../Resource/quatang.png')
  },
  {
      id: 3,
      name: 'Thưởng',
      img: require('../../Resource/thuong.png')
  },
  {
      id: 4,
      name: 'Kinh doanh',
      img: require('../../Resource/kinhdoanh.png')
  },
  {
      id: 5,
      name: 'Lì xì',
      img: require('../../Resource/lixi.png')
  },
  {
      id: 6,
      name: 'Luong',
      img: require('../../Resource/luong.png')
  },
  {
      id: 7,
      name: 'Trúng thưởng',
      img: require('../../Resource/trungthuong.png')
  },
  {
      id: 8,
      name: 'Khác',
      img: require('../../Resource/khac.png')
  }
  

]

const TabThu = () => {

  return (
      <View style={{flex : 1}}>


          <FlatList

              data={data}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              renderItem={({ item, index }) => <View style={{

                  width: Dimensions.get('window').width / 2.2,


              }} >
                  <TouchableOpacity style={styles.itemContainer}>
                      <Image style={styles.image} source={item.img} />
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