import {
  Pressable, StyleSheet, Text, Alert, TextInput, Dimensions,
  View, Image, ToastAndroid, TouchableOpacity
} from 'react-native'
import React, { useState, useEffect } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { ICON, COLOR } from '../../constants/Themes'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const windowWIdth = Dimensions.get('window').width;
const Login = (props) => {
  const { navigation } = props;
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [verifiedPass, setVerifiedPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [infoUser, setInfoUser] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({ webClientId: '999490167711-v29oh1m4p7u2vf1libthj7m2klog9ttp.apps.googleusercontent.com' });
  }, [])

  //login gg
  const signInGG = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Id: ', userInfo.user.id);
      console.log('Email: ', userInfo.user.email);
      console.log('Name: ', userInfo.user.name);
      console.log('FamilyName: ', userInfo.user.familyName);
      console.log('GivenName: ', userInfo.user.givenName);
      console.log('Photo: ', userInfo.user.photo);
      setInfoUser({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  //chuy?n qua màn hình dang ký
  const goRegister = () => {
    navigation.navigate('Register')
  }

  const onLogin = async () => {
    try {
      const response = await AxiosIntance().post("/user/login", { email: emailUser, password: passwordUser });
      if (response.returnData.error === false) {
        console.log(response.returnData.data.token);
        await AsyncStorage.setItem("token", response.returnData.data.token);
        ToastAndroid.show("Ðăng nhập thành công", ToastAndroid.SHORT);
        setinfoUser(response.returnData.data.user);
        setupdatenew(response.returnData.data);
        setisLogin(true);
      } else {
        ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
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

  const kiemtra = (text) => {
    let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (reg.test(text) === true) {
      setVerifiedEmail({ email: text });
      console.log("ban da nhap dung");
      setVerifiedEmail(true);
      return true;
    }
    else {
      setVerifiedEmail({ email: text });
      console.log("ban da nhap sai");
    }
  }
  const kiemtrapassword=(text1)=>{
    let passreg=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(passreg.test(text1)===true)
    {
      setVerifiedPass({passreg:text1});
      console.log("password không hợp lệ");
      setVerifiedPass(true);
      return true;
    }
    else
    {
      setVerifiedPass({passreg:text1});
      console.log("pass ko hợp lệ");
    }
  }

  const chuyen = () => {
    if (verifiedEmail == true && verifiedPass == true) {
      ToastAndroid.show("Nhập đúng", ToastAndroid.SHORT);
      //  navigation.navigate('Resigter');
    }
    else {
      Alert.alert('Error', 'Email hoặc Password của bạn đã sai! vui lòng kiểm tra lại.');
    }
  }
  return (
    <KeyboardAwareScrollView>

      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.textSignIn}>Sign In</Text>
        </View>

        <View style={styles.center}>
          <Image style={styles.imageLogin} source={require('../../asset/gif/phone.gif')}></Image>
        </View>
        <View style={styles.main}>

          <View style={{ marginTop: 5 }}>
            <Text style={styles.textInstruct}>Enter your email and</Text>
            <Text style={styles.textInstruct}>password to access your account</Text>
          </View>

      <TextInput placeholder='Email' style={styles.inputEmailAndPass} onChangeText={(text)=>kiemtra(text)}  ></TextInput>

      <View style={styles.viewInputPass}>
        <TextInput placeholder='Password' style={styles.inputEmailAndPass} 
         secureTextEntry={getPasswordVisible ? false : true} 
         onChangeText={(setPasswordVisible) => kiemtrapassword(setPasswordVisible)}  value={verifiedPass} ></TextInput>
        <TouchableOpacity style={styles.visible}
          onPress={() => {
            setPasswordVisible(!getPasswordVisible)
          }}>
          {
            getPasswordVisible ?
              <Image source={require('../../asset/icon/icon_visible.png')} style={styles.imageIconEye}></Image>
              :
              <Image source={require('../../asset/icon/icon_invisible.png')} style={styles.imageIconEye}></Image>
          }
        </TouchableOpacity>
      </View>

          <View style={{ marginLeft: 220, marginTop: 5 }}>
            <Text style={styles.textForgote}>Forgote Password</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Pressable style={styles.viewPressable}  >
            <Text style={styles.textPressable}>Sign in</Text>
          </Pressable>
        </View>

        <TouchableOpacity style={styles.center} onPress={() => { signInGG(); }}>
          <View style={styles.viewLoginGG}>
            <Image style={styles.imageLoginGG} source={require('../../asset/image/LoginAndRegister/google.png')} />
            <Text style={styles.textGoogle}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.center}>
          <Text style={styles.textNoneAcc}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => { goRegister() }}>
            <Text style={[styles.textNoneAcc, { color: COLOR.primary, marginLeft: 5 }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceded',
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
    width: '90%',
    height: 50,
    borderRadius: 30,
    backgroundColor: COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
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
  },
  imageLoginGG: {
    height: 30,
    width: 30
  },
  viewLoginGG: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.background2,
    flexDirection: 'row',
    padding: 10,
    width: '90%',
    height: 50,
    borderRadius: 30,
    marginBottom: 10,
    // borderWidth: 2,
    // borderColor: 'red'
  },
  main: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 23,
  },
  textGoogle: {
    color: COLOR.white,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginLeft: 14,
    fontSize: 16,
  }

})