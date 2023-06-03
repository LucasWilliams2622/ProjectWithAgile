
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ToastAndroid, StatusBar, Platform } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import AxiosIntance from '../../constants/AxiosIntance'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ICON, COLOR } from '../../constants/Themes'

const AddNew = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const [category, setCategory] = useState('');

  const [name, setname] = useState('');
  const [money, setMoney] = useState('');
  const [note, setNote] = useState('');
  let title = params?.name;
  const [value, setValue] = useState('');
  const handleCheckInput = () => {
    const floatValue = parseFloat(value.replace(',', '.'));
    if (name.trim() === '') {
      Alert.alert('Vui lòng nhập tiêu đề');
    } else if (isNaN(floatValue) || floatValue <= 0) {
      Alert.alert('Vui lòng nhập số tiền hợp lệ');
    }
  };

  // const handleCheckInput = () => {
  //   const floatValue = parseFloat(money.replace(',', '.')); 
  //   if (name.trim() === '') {
  //     Alert.alert('Vui lòng nhập tiêu đề');
  //     console.log(title);
  //   } else if(isNaN(floatValue) || floatValue <= 0) {
  //     Alert.alert('Vui lòng nhập số tiền hợp lệ');
  //   }
  // };
  const addNew = async () => {
    try {

      const floatValue = parseFloat(money.replace(',', '.'));
      if (title.trim() === '') {
        Alert.alert('Vui lòng nhập tiêu đề');
      } else if (isNaN(floatValue) || floatValue <= 0) {
        Alert.alert('Vui lòng nhập số tiền hợp lệ');
      }
      else {
        const response = await AxiosIntance()
          .post("transaction/api/add-new", { money: money, note: title });
        console.log(response);
        if (response.result === true) {
          ToastAndroid.show("Thêm mới thành công", ToastAndroid.SHORT);
          navigation.navigate("BottomTabs");

        }
        else {
          ToastAndroid.show("Thêm mới không thành công không thành công", ToastAndroid.SHORT);
        }

      }

    } catch (e) {
      console.log("aaaa", e);

    }
  }
  return (
    <View style={styles.container} >

      <View style={styles.bgTop}>
        <Text style={styles.textTitle}>Thêm chi tiêu cho hôm nay</Text>
      </View>
     

      <View style={styles.shadowView}>
        <View style={styles.bgMain}>
          <View style={styles.bgTop}>
            <Image style={styles.imgColor} source={require('../../asset/icon/icon_edit.png')}></Image>
            <TouchableOpacity >
              <TextInput value={money} onChangeText={setMoney} keyboardType="numeric" returnKeyType="done" placeholderTextColor='white' underlineColor='transparent' style={styles.textMoney} placeholder='Nhập số tiền'></TextInput>
            </TouchableOpacity>
            <Text style={styles.textVND}>VNĐ</Text>
          </View>
        </View>

        <View >
          <View style={styles.input}>
            <TouchableOpacity
            >
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
            <TextInput placeholder='Chọn loại' style={styles.txtInput} value={title}></TextInput>
          </View>
        </View>



        <View style={{ top: 10 }}>
          <View style={styles.input}>
            <Image style={styles.imgInput} source={require('../../asset/icon/icon_note.png')} />
            <TextInput onChangeText={setNote} placeholder='Ghi chú' style={styles.txtInput}></TextInput>
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.viewSave} onPress={handleCheckInput}>
          <Text style={styles.textSave}>Lưu Chi tiêu</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />

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
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  bgView: {
    backgroundColor: '#1488fa',
    height: 70,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20

  },

  bgTop: {
    backgroundColor: COLOR.background2,
    flexDirection: 'row',
    tintColor: 'black',
    height:70,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },

  bgMain: {
    backgroundColor: COLOR.background2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: 100,

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
    left: 70,
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
    width: 25,
    height: 25,
    marginTop: 20,
    marginLeft: 10


  },

  txtInput: {
    borderColor: "#fff",
    borderBottomColor: "#000",
    width: 310,
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginTop: 5
  },
  viewSave: {
    left: 10,
    right: 10
  },


  btnSave: {
    top: 100,
    backgroundColor: COLOR.background2,
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
    backgroundColor: COLOR.background2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10
  },
  textSave: {
    fontFamily: 'Klarna Text',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.white
  },

}
)
