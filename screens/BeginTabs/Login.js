import {
  Pressable, StyleSheet, Text, Alert, TextInput, Dimensions,
  View, Image, ToastAndroid, TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { ICON, COLOR } from '../../constants/Themes'

const windowWIdth = Dimensions.get('window').width;
const Login = (props) => {
  const { navigation } = props;
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [verifiedPass, setVerifiedPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [getPasswordVisible, setPasswordVisible] = useState(false)


  //chuy?n qua màn hình dang ký
  const goRegister = () => {
    navigation.navigate('Register')
  }

  const dangNhapNe = async () => {
    try {
      const response = await AxiosIntance().post("/user/login", { email: emailUser, password: passwordUser });
      if (response.returnData.error === false) {
        console.log(response.returnData.data.token);
        await AsyncStorage.setItem("token", response.returnData.data.token);
        ToastAndroid.show("Ðang nh?p thành công", ToastAndroid.SHORT);
        setinfoUser(response.returnData.data.user);
        setupdatenew(response.returnData.data);
        setisLogin(true);
      } else {
        ToastAndroid.show("Ðang nh?p th?t b?i", ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log(e);
    }
  }

  // //validate email
  // const handleEmailSubmit = () => {
  //   if (!email) {
  //     Alert.alert('Error', 'Please enter an email address');
  //   } else if (!validateEmail(email)) {
  //     Alert.alert('Error', 'Please enter a valid email address');
  //   } else if (!pass) {
  //     Alert.alert('Error', 'Please enter a password');
  //   } else if (!validatePass(pass)) {
  //     Alert.alert('Error', 'Please enter a valid password');
  //   }
  // };
  // const validateEmail = (email) => {
  //   const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  //   return emailRegex.test(email);
  // };

  // //validate password
  // const validatePass = (pass) => {
  //   const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  //   return passRegex.test(pass);
  // };

  const checkEmail=(email)=>{
    let reg =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(reg.test(email)===true)
    {
      setVerifiedEmail({ email: email });
      console.log("ban da nhap dung");
      setVerifiedEmail(true);
      return true;
    }
    else
    {
      setVerifiedEmail({ email: email });
      console.log("ban da nhap sai");
    }
  }
  const checkPass=(pass)=>{
    let passreg=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(passreg.test(pass)===true)
    {
      setVerifiedPass({passreg:pass});
      console.log("password không hợp lệ");
      setVerifiedPass(true);
      return true;
    }
    else
    {
      setVerifiedPass({passreg:pass});
      console.log("pass ko hợp lệ");
    }
  }

  const check=()=>{
    if(verifiedEmail==true && verifiedPass==true)
    {
     ToastAndroid.show("Nhập đúng",ToastAndroid.SHORT);
    //  navigation.navigate('Resigter');
    }
    else
    {
      Alert.alert('Error', 'Email hoặc Password của bạn đã sai! vui lòng kiểm tra lại.');
    }
 }
  return (
    <View style={styles.container}>

      <View style={styles.center}>
        <Text style={styles.textSignIn}>Sign In</Text>
      </View>

      <View style={styles.center}>
        <Image style={styles.imageLogin} source={require('../../asset/image/LoginAndRegister/login.png')}></Image>
      </View>

      <View style={{ marginTop: 5 }}>
        <Text style={styles.textInstruct}>Enter your email and</Text>
        <Text style={styles.textInstruct}>password to access your account</Text>
      </View>

      <TextInput placeholder='Email' style={styles.inputEmailAndPass} onChangeText={(email)=>checkEmail(email)}  ></TextInput>

      <View style={styles.viewInputPass}>
        <TextInput placeholder='Password' style={styles.inputEmailAndPass} onChangeText={(pass)=>checkPass(pass)}></TextInput>
        <Image source={require('../../asset/icon/icon_eye.png')} style={styles.imageIcon}></Image>
      </View>

      <View style={{ marginLeft: 220, marginTop: 5 }}>
        <Text style={styles.textForgote}>Forgote Password</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Pressable style={styles.viewPressable} onPress={check} >
          <Text style={styles.textPressable}>Sign in</Text>
        </Pressable>
      </View>

      <View style={styles.center}>
        <Text style={styles.textNoneAcc}>Don’t have an account?</Text>
        <TouchableOpacity onPress={()=>{goRegister()}}>
        <Text style={[styles.textNoneAcc, { color: COLOR.primary, marginLeft: 5 }]}>Sign Up</Text>

        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login

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
    fontSize: 18,
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
    paddingLeft: 10
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