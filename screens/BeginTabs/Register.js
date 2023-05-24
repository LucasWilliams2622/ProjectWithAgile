
import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'



const Register = (props) => {
  const { navigation } = props;
  const [toggLeCheckBox, settoggLeCheckBox] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [passwordUser, setpasswordUser] = useState("")
  const GotoLogin = () => {
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




  
    return (
      <View>
        <Text>Register</Text>
        <View style={styles.container}>
          <Text style={[styles.text, { color: '#1877F2' }]}>Hello!</Text>
          <Text style={styles.welcomeText}>Signup to get Started</Text>

          <TextInput placeholder='Email' style={styles.textInput}></TextInput>
          <TextInput placeholder='Pasword' style={styles.textInput}></TextInput>
          <TextInput placeholder='Username' style={styles.textInput}></TextInput>

          <View style={[styles.viewRemember, { justifyContent: 'space-between' }]}>
            <View style={styles.viewRemember}>
              <BouncyCheckbox fillColor="blue" />
              <Text style={styles.textRemember}>Remember me</Text>
            </View>

          </View>
          <Pressable style={styles.buttonLogin} >
            <Text style={styles.textLogin}>Register</Text>
          </Pressable>
          <View style={styles.viewDonthave}>
            <Text style={{ textAlign: 'center' }}>Already have an account ?</Text>
            <Text style={{ color: 'blue' }} onPress={GotoLogin}> Login</Text>
          </View>

        </View>
      </View>

    )
  }

  export default Register

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
