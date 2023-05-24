import { Pressable, StyleSheet, Text, Alert, TextInput, Dimensions, 
  View, Image, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'




const windowWIdth = Dimensions.get('window').width;
const Login = (props) => {
  const { navigation } = props;
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [verifiedPass, setVerifiedPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [getPasswordVisible, setPasswordVisible] = useState(false)


  //chuy?n qua màn hình dang ký
  const dangKy = () => {
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

  //validate email
  const handleEmailSubmit = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter an email address');
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
    } else if (!pass) {
      Alert.alert('Error', 'Please enter a password');
    } else if (!validatePass(pass)) {
      Alert.alert('Error', 'Please enter a valid password');
    }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //validate password
  const validatePass = (pass) => {
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passRegex.test(pass);
  };

 
    return (
      <View>
        <Text>Login</Text>
        <View style={styles.container}>
          <Text style={styles.text1}>Hello</Text>
          <Text style={styles.text2}>Again!</Text>
          <Text style={styles.welcomeText}>Welcome back you’ve {'\n'} been missed</Text>

          <TextInput onChangeText={text => {
            setEmail(text)
            //setValidatePass1(text);

          }} placeholder='Email' style={styles.textInputPass}></TextInput>
          <View style={styles.txtPass}>
            <TextInput onChangeText={text => {
              setPass(text)
              //setValidatePass1(text);

            }} placeholder='Password' style={styles.textInputPass}
              secureTextEntry={getPasswordVisible ? false : true} />
            <TouchableOpacity style={styles.visible}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible)
              }}>
              {
                getPasswordVisible ?
                  <Image resizeMode='contain' source={require('../../asset/icon/icon_closed_eye.png')}></Image>
                  :
                  <Image resizeMode='contain' source={require('../../asset/icon/icon_eye.png')}></Image>
              }
            </TouchableOpacity>
          </View>
          <View style={[styles.viewRemember, { justifyContent: 'space-between' }]}>
            <View style={styles.viewRemember}>
              <BouncyCheckbox fillColor="blue" />
              <Text style={styles.textRemember}>Remember me</Text>
            </View>
            <Text style={[styles.textRemember, { color: '#1877F2' }]}>Forget the password?</Text>
          </View>
          <Pressable style={styles.buttonLogin} onPress={handleEmailSubmit}>
            <Text style={styles.textLogin}>Login</Text>
          </Pressable>

          <View style={styles.viewDonthave}>
            <Text style={{ textAlign: 'center' }}>don't have an account?</Text>
            <Text style={{ color: 'blue' }} onPress={dangKy}> Sign Up</Text>
          </View>

        </View>
      </View>
    )
  }

  export default Login

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginStart: 10,
      marginEnd: 10,
      flexDirection: 'column',

    },
    text1: {
      fontFamily: 'Popins',
      fontSize: 50,
      fontWeight: 'bold',
      color: '#050505'
    },
    text2: {
      color: '#1877F2',
      fontFamily: 'Popins',
      fontSize: 50,
      fontWeight: 'bold',
    },
    welcomeText: {
      fontFamily: 'Popins',
      fontSize: 20,
      marginTop: 4,
      color: '#4E4B66',
      marginBottom: 10
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
      textAlign: 'center',
      margin: 10
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
      marginTop: 10
    },
    visible: {
      position: 'absolute',
      right: 10,
      bottom: 2,
    },
    textInputPass: {
      marginTop: 4,
      width: windowWIdth - 10 * 2,
      height: 48,
      borderColor: '#4E4B66',
      borderWidth: 2,
      borderRadius: 6,
      padding: 10,
      flexDirection: 'row',
      textAlign: 'left',
      paddingRight: 50,

    },
    txtPass: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  })