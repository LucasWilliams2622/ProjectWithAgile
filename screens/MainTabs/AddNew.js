import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ICON, COLOR } from '../../constants/Themes'


const AddNew = (props) => {
  const { navigation } = props;
  const [name, setname] = useState('');
  const [value, setValue] = useState('');
  const handleCheckInput = () => {
    const floatValue = parseFloat(value.replace(',', '.')); 
    if (name.trim() === '') {
      Alert.alert('Vui lòng nhập tiêu đề');
    } else {
     
    }
  };

  return (


    <View style={styles.container} >

      <View style={styles.bgTop}>
        <TouchableOpacity>
          <Image style={styles.imgColorTop} source={require('../../asset/icon/icon_back.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.textTitle}>Thêm chi tiêu cho hôm nay</Text>
      </View>

      <View style={styles.shadowView}>

      <View style={styles.bgMain}>
        <View style={styles.bgTop}>
          <Image style={styles.imgColor} source={require('../../asset/icon/icon_edit.png')}></Image>
          <TouchableOpacity >
            <TextInput placeholderTextColor='white' underlineColor='transparent' style={styles.textMoney} placeholder='Nhập số tiền'></TextInput>
          </TouchableOpacity>
          <Text style={styles.textVND}>VNĐ</Text>
        </View>
      </View>

        <View >
          <View style={styles.input}>
            <TouchableOpacity >
              <Image style={styles.imgInput} source={require('../../asset/icon/icon_calender.png')} />
            </TouchableOpacity>
            <TextInput style={styles.txtInput} value={name}
              onChangeText={setname}></TextInput>
          </View>
        </View>

        <View style={{ top: 10 }}>
          <View style={styles.input}>
            <TouchableOpacity onPress={() => { navigation.navigate('TopTabThuChi') }}>
              <Image style={styles.imgInput} source={require('../../asset/icon/icon_type.png')} />
            </TouchableOpacity>
            <TextInput placeholder='Chọn loại' style={styles.txtInput}></TextInput>
          </View>
        </View>

        <View style={{ top: 10 }}>
          <View style={styles.input}>
            <Image style={styles.imgNote} source={require('../../asset/icon/icon_note.png')} />
            <TextInput placeholder='Ghi chú' style={styles.txtInput}></TextInput>
          </View>
        </View>

      </View>
    
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.viewSave} onPress={handleCheckInput}>
          <Text style={styles.textSave}>Lưu Chi tiêu</Text>
        </TouchableOpacity>
      </View>
     
    </View>

  )
}

export default AddNew

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewIn4Menu1: {
    marginTop: 10
  },
  shadowView: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    height: 350,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3,

  },
  bgTop: {
    backgroundColor: '#1488fa',
    flexDirection: 'row',
  },

  bgMain: {
    backgroundColor: '#1488fa',
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
    right: 10
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
    width: 200,
    left: 40,
    backgroundColor: "transparent",
    overflow: 'visible',

  },
  textVND: {
    top: 17,
    color: '#fff',
    fontSize: 25,
    left: 60,
  },
  input: {
    flexDirection: 'row',
    top: 10,
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
    width: 310,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  viewSave:{
    left:10, 
    right:10
  },

  btnSave: {
    top: 100,
    backgroundColor: '#1488fa',
    height: 50,
    padding: 10,
    borderRadius: 20,
   
  },

  btnTxt: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  viewSave: {
    width: 360,
    height: 50,
    borderRadius: 30,
    backgroundColor:'#1488fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  textSave: {
    fontFamily: 'Klarna Text',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.white
  },



})