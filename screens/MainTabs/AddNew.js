import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { fontConfig } from 'react-native-paper/lib/typescript/src/styles/fonts'
import { TextInput } from 'react-native-paper'
import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors'
import TopTabThuChi from './TopTabThuChi'


const AddNew = (props) => {
  const { navigation } = props;
  
  return (
    <View style={styles.container} >
      <View style={styles.bgTop}>
        <TouchableOpacity>
          <Image style={styles.imgColorTop} source={require('../../Resource/back.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.textTitle}>Thêm chi tiêu cho hôm nay</Text>
      </View>


      <View style={styles.bgMain}>
        <View style={styles.bgTop}>
          <Image style={styles.imgColor} source={require('../../Resource/edit.png')}></Image>
          <TouchableOpacity >
            <TextInput  placeholderTextColor= 'white' underlineColor='transparent' style={styles.textMoney} placeholder='Nhập số tiền'></TextInput>
          </TouchableOpacity>
          <Text style={styles.textVND}>VNĐ</Text>
        </View>
      </View>

      <View>
        <View style={styles.input}>
          <TouchableOpacity >
            <Image style={styles.imgInput} source={require('../../Resource/calender.png')} />
          </TouchableOpacity>
          <TextInput style={styles.txtInput}></TextInput>
        </View>


      </View>


      <View style={{ top: 10 }}>
        <View style={styles.input}>
          <TouchableOpacity onPress={()=>{navigation.navigate('TopTabThuChi')}}>
            <Image style={styles.imgInput} source={require('../../Resource/type.png')} />
          </TouchableOpacity>
          <TextInput placeholder='Chọn loại' style={styles.txtInput}></TextInput>
        </View>
      </View>


      <View style={{ top: 10 }}>
        <View style={styles.input}>
          <Image style={styles.imgNote} source={require('../../Resource/note.png')} />
          <TextInput placeholder='Ghi chú' style={styles.txtInput}></TextInput>
        </View>
      </View>


      <TouchableOpacity style={styles.btnSave} >
        <Text style={styles.btnTxt}>Lưu chi tiêu</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddNew

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgTop: {
    backgroundColor: '#1488fa',
    flexDirection: 'row',
  },

  bgMain: {
    backgroundColor: '#1488fa',
    top: 50,
    borderTopLeftRadius: 20,
    padding: 20,
    height: 100,
    borderTopRightRadius: 20,
  },
  imgColorTop: {
    tintColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  imgColor: {
    top: 20,
    tintColor: "#fff",
    width: 30,
    height: 30,
  },
  textTitle: {
    color: '#fff',
    left: 50,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  textMoney: {
    top: 7,
    color: '#fff',
    fontSize: 25,
    width : 200,
    left: 60,
    backgroundColor : "transparent",
    overflow : 'visible',
    
  },
  textVND: {
    top: 17,
    color: '#fff',
    fontSize: 25,
    left: 100,
  },
  input: {
    flexDirection: 'row',
    top: 60,
  },
  imgInput: {
    width: 50,
    height: 50,
    top: 3,
  },

  imgNote: {
    top: 13,
    height: 45,
    width: 45,
    marginRight: 5
  },

  txtInput: {
    borderColor: "#fff",
    borderBottomColor: "#000",
    width: 357,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },

  btnSave: {
    top: 130,
    backgroundColor: '#1488fa',
    height: 50,
    padding: 10,
    borderRadius: 20
  },

  btnTxt: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  }




})