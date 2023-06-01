
import {
  Pressable, StyleSheet, Text, TextInput, View,
  Image, ToastAndroid, Alert, TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { ICON, COLOR } from '../../constants/Themes'

const Register = (props) => {
  const { navigation } = props;
  const [toggLeCheckBox, settoggLeCheckBox] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [name, setname] = useState(false);
  const [email, setEmail] = useState('');
  const [passwordUser, setpasswordUser] = useState("")
  const goLogin = () => {
    navigation.navigate('Login')

  }

  // const dangKyNe = async () => {
  //   console.log(emailUser, passwordUser, nameUser);
  //   try {
  //     const response = await AxiosIntance().post("/user/register", { email: emailUser, password: passwordUser, name: nameUser });
  //     console.log(response)
  //     if (response.error === false) {
  //       ToastAndroid.show("Ðang ký thành công", ToastAndroid.SHORT);
  //       navigation.navigate("Login")
  //     } else {
  //       ToastAndroid.show("Ðang ký th?t b?i", ToastAndroid.SHORT);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }


  const kiemtra = (text) => {
    let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (reg.test(text) === true) {
      setVerifiedEmail({ email: text });
      console.log("Ban da nhap dung");
      setVerifiedEmail(true);
      return true;
    }
    else {
      setVerifiedEmail({ email: text });
      console.log("Ban da nhap sai");
    }
  }
  const kiemten = (text2) => {
    let reg = /^[a-z0-9_-]{3,15}$/;
    if (reg.test(text2) === true) {
      //(1) Tên được phép chứa các ký tự, các số, gạch dưới, gạch nối.
      //(2) Tên phải có độ dài trong khoảng cho phép từ 3 đến 15 ký tự.
      setname({ name: text2 });
      console.log("Ban da nhap dung");
      setname(true);
      return true;
    }
    else {
      setname({ name: text2 });
      console.log("Ban da nhap sai");
    }
  }

  const chuyen = () => {
    if (verifiedEmail == true && name == true) {
      ToastAndroid.show("Nhập đúng", ToastAndroid.SHORT);
      //  navigation.navigate('Resigter');
    }
    else {
      Alert.alert('Error', 'Email bạn chưa nhập hoặc nhập sai! vui lòng kiểm tra lại.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.textSignIn}>Sign Up</Text>
      </View>

      <View style={styles.center}>
        <Image style={styles.imageLogin} source={require('../../asset/image/LoginAndRegister/signup.png')}></Image>
      </View>

      <TextInput placeholder='Name Surname' style={styles.inputEmailAndPass} onChangeText={(text2) => kiemten(text2)}></TextInput>

      <View style={styles.viewInputPass}>
        <TextInput placeholder='Email' style={styles.inputEmailAndPass} onChangeText={(text) => kiemtra(text)}></TextInput>
      </View>

      <View style={{ marginTop: 7, marginLeft: 5 }}>
        <Text style={styles.textInstruct}>We need to verify you. We will send you a one time verification code.</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Pressable style={styles.viewPressable} onPress={chuyen}>
          <Text style={styles.textPressable}>Sign in</Text>
        </Pressable>
      </View>

      <View style={styles.center}>
        <Text style={styles.textNoneAcc}>Already have an account?</Text>
        <TouchableOpacity onPress={() => { goLogin() }}>
          <Text style={[styles.textNoneAcc, { color: COLOR.primary, marginLeft: 5 }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    marginStart: 16,
    marginEnd: 16,
    marginTop: 10
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textSignIn: {
    fontFamily: 'Klarna Text',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.primary
  },
  imageLogin: {
    width: 347.28,
    height: 331.24,
    marginTop: -5
  },
  textInstruct: {
    fontFamily: 'Klarna Text',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.brown,
  },
  inputEmailAndPass: {
    width: 343,
    height: 48,
    backgroundColor: COLOR.lightGray,
    borderRadius: 5,
    marginTop: 15,
    fontFamily: 'Klarna Text',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.black,
    paddingLeft: 20
  },
  viewInputPass: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageIcon: {
    width: 24,
    height: 24,
    marginLeft: -33,
    marginTop: 15
  },
  textForgote: {
    fontFamily: 'Klarna Text',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.background2
  },
  viewPressable: {
    width: 343,
    height: 50,
    borderRadius: 30,
    backgroundColor: COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  textPressable: {
    fontFamily: 'Klarna Text',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.white
  },
  textNoneAcc: {
    fontFamily: 'Klarna Text',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.black
  }
})
