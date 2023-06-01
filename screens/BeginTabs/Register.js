import {Pressable, StyleSheet, Text, TextInput, View,Image, ToastAndroid, Alert, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { ICON, COLOR } from '../../constants/Themes'
import AxiosIntance from '../../constants/AxiosIntance'
const Register = (props) => {
  const { navigation } = props;
  const [toggLeCheckBox, settoggLeCheckBox] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [name, setname] = useState('');
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
  const checkEmail = (setEmail) => {
    let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (reg.test(setEmail) === true) {
      setVerifiedEmail({ email: setEmail });

      console.log("ban da nhap dung");
      setVerifiedEmail(true);
      return true;
    }
    else
    {
      setVerifiedEmail({ email: setEmail });
      console.log("ban da nhap sai");
    }
  }
  const checkName = (name) => {
    let reg = /^[a-z0-9_-]{3,15}$/;
    if (reg.test(name) === true) {

      //(1) Tên được phép chứa các ký tự, các số, gạch dưới, gạch nối.
      //(2) Tên phải có độ dài trong khoảng cho phép từ 3 đến 15 ký tự.
      setname({ name: name });
      console.log("ban da nhap dung");
      setname(true);
      return true;
    }
    else
    {
      setname({ name: name });
      console.log("ban da nhap sai");
    }
  }
  
  // const check = () => {
  //   if (verifiedEmail == true && name == true) {
  //     ToastAndroid.show("Nhập đúng", ToastAndroid.SHORT);
  //     console.log(verifiedEmail);
  //     //  navigation.navigate('Resigter');
  //   }
  //   else {
  //     Alert.alert('Error', 'Email bạn chưa nhập hoặc nhập sai! vui lòng kiểm tra lại.');
  //   }
  // }
  const sendVerifiedEmail = async () => {
    try {
      //http://localhost:3000
      console.log("email  ", email);
      console.log("name  ", name);
      const result = await AxiosIntance().post("user/api/send-verification-code", { email: email });
      console.log(result);
      if (result) {
        ToastAndroid.show("Đã gửi code", ToastAndroid.SHORT);
        navigation.navigate('SignCode', { email: email, name: name });
      } else {

      }
    } catch (error) {

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
      <TextInput placeholder='Name Surname' style={styles.inputEmailAndPass} onChangeText={(name)=>checkName(name)}></TextInput>

      <View style={styles.viewInputPass}>
        <TextInput placeholder='Email' style={styles.inputEmailAndPass}  onChangeText={(setEmail)=>checkEmail(setEmail)}></TextInput>
        </View> 
      <View style={{ marginTop: 7, marginLeft: 5 }}>
        <Text style={styles.textInstruct}>We need to verify you. We will send you a one time verification code.</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Pressable style={styles.viewPressable} onPress={sendVerifiedEmail}>
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