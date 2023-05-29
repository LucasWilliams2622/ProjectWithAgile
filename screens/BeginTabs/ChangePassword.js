
import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'

const ChangePassword = () => {
  const [verifiedPass, setVerifiedPass] = useState(false);
  const [verifiedPassNew, setVerifiedPassNew] = useState(false);
  const [verifiedCfPass, setVerifiedCfPass] = useState(false);
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
    else
    {
      Alert.alert('Error', 'Password của bạn đã sai! vui lòng kiểm tra lại.');
    }
 }
  return (
    <View>
      <Text>ChangePassword</Text>
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
    </View>

  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column'
  },
  text: {
    fontFamily: 'Popins',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#050505'
  },
  welcomeText: {
    fontFamily: 'Popins',
    fontSize: 20,
    marginTop: 4,
    color: '#4E4B66',
    marginBottom: 20
  },
  textUser: {
    color: '#050505'
  },
  textInput: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5
  },
  viewRemember: {
    flexDirection: 'row',
    marginTop: 5
  },
  textRemember: {
    color: '#050505'
  },
  buttonLogin: {
    height: 48,
    backgroundColor: '#1877F2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  textLogin: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'

  },
  textWith: {
    color: '#4E4B66',
    textAlign: 'center'
    
  },
  imageSocial: {
    width: 21,
    height: 21,
    marginEnd: 10
  },
  buttonSocial: {
    flexDirection: 'row',
    width: 174,
    height: 48,
    backgroundColor: '#EEF1F4',
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  viewDonthave: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  }
})