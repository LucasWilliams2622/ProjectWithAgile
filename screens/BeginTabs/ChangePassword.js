
import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { ICON, COLOR } from '../../constants/Themes'

const ChangePassword = () => {
  const [verifiedPass, setVerifiedPass] = useState(false);
  const [verifiedPassNew, setVerifiedPassNew] = useState(false);
  const [verifiedCfPass, setVerifiedCfPass] = useState(false);
  const [getOldPassVisible, setOldPassVisible] = useState(false)
  const [getNewPassVisible, setNewPassVisible] = useState(false)
  const [getConfirmPassVisible, setConfirmPassVisible] = useState(false)
  const [password, setpassword] = useState('');
  const [confirmPass, setconfirmPass] = useState('')
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
  const kiemtrapasswordnew=(text1)=>{
    let passreg=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(passreg.test(text1)===true)
    {
      setVerifiedPassNew({passreg:text1});
      setVerifiedPassNew(true);
      setpassword(text1);
      console.log("password hợp lệ");
      return true;
    }
    else
    {
      setVerifiedPassNew({passreg:text1});
      console.log("pass ko hợp lệ");
    }
  }
  const kiemtraConFirmPass=(text1)=>{
    let passreg=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(passreg.test(text1)===true)
    {
      setVerifiedCfPass({passreg:text1});
      setVerifiedCfPass(true);
      setconfirmPass(text1);
      console.log("password hợp lệ");
      return true;
    }
    else
    {
      setVerifiedCfPass({passreg:text1});
      console.log("pass ko hợp lệ");
    }
  }
  const chuyen=()=>{
    if(verifiedPass==true&&verifiedCfPass==true&&verifiedPassNew==true&& password===confirmPass  )
    {
     ToastAndroid.show("Nhập đúng",ToastAndroid.SHORT);
    //  navigation.navigate('Resigter');
    }
    else {
      Alert.alert('Error', 'Password của bạn đã sai! vui lòng kiểm tra lại.');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: '#1877F2' }]}>Hello!</Text>
      <Text style={styles.welcomeText}>Reset your password</Text>
     
      <TextInput placeholder='Your pasword' style={styles.textInput} onChangeText={(text1)=>kiemtrapassword(text1)} ></TextInput>
      <TextInput placeholder='Your new pasword' style={styles.textInput}onChangeText={(text1)=>kiemtrapasswordnew(text1)}></TextInput>
      <TextInput placeholder='Confirm your new password' style={styles.textInput} onChangeText={(text1)=>kiemtraConFirmPass(text1)}></TextInput>

      
      <Pressable style={styles.buttonLogin} onPress={chuyen}>
        <Text style={styles.textLogin}>Submit</Text>
      </Pressable>
      
    </View>
  )
}

export default ChangePassword

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
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.brown,
  },
  inputPassword: {
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
    paddingLeft: 35
  },
  viewInputOldPass: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30
  },
  viewInputNewPass: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBack: {
    width: 20,
    height: 20,
    marginLeft: -10,
    marginTop: 15,
  },
  imageIconEye: {
    width: 24,
    height: 24,
    marginLeft: -33,
    marginTop: 15
  },
  imageIconPadlock: {
    width: 13,
    height: 17,
    marginLeft: -330,
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
    marginTop: 20,
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
  imagePhone: {
    width: 92.53,
    height: 188.14,
    marginTop: -130,
    marginBottom: 20
  },
  imageBackground: {
    width: 315,
    height: 211,
    marginTop: 30
  }
})