import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { TextInput } from 'react-native-paper'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AxiosInstance from '../../constants/AxiosInstance'
import { AppContext } from '../../utils/AppContext'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Profile = (props) => {
  const { route, navigation } = props;
  const [email, setemail] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const { idUser, infoUser ,setIsLogin} = useContext(AppContext);
  const [limit, setLimit] = useState(10000);
  const [dataUser, setDataUser] = useState([])

  console.log(idUser);
  const checkName = (name) => {
    let reg = /^[a-z0-9_-]{3,15}$/;
    if (reg.test(name) === true) {
      //(1) Tên được phép chứa các ký tự, các số, gạch dưới, gạch nối.
      //(2) Tên phải có độ dài trong khoảng cho phép từ 3 đến 15 ký tự.
      setVerifiedname({ name: name });
      console.log("ban da nhap dung");
      setVerifiedname(true);
      return true;
    }
    else {
      setVerifiedname({ name: name });
      console.log("ban da nhap sai");
    }
  }
  const checkAll = () => {
    if ((name.trim() === '') && (description.trim() === '') && (limit.trim() === '')) {
      Alert.alert('Error', 'vui lòng nhập tên!');
    } else {
      updateProfile()
    }

  }
  const onLogOut = async () => {
    // console.log("info", infoUser);
    console.log("info", dataUser.avatar);
    console.log("info", dataUser.name);
    console.log("info", dataUser.description);
    console.log("info", dataUser.limit);
  }
  const dialogImageChoose = () => {
    return Alert.alert(
      "Thông báo",
      "Chọn phương thức lấy ảnh",
      [{
        text: "Chụp ảnh ",
        onPress: () => {
          capture()
        },
      },
      {
        text: "Tải ảnh lên",
        onPress: () => {
          getImageLibrary()
        },
      },
      {
        text: "Hủy",
      },
      ])
  }

  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);
    const formData = new FormData();
    formData.append('image', {
      uri: result.assets[0].uri,
      type: 'icon/icon_jpeg',
      name: 'image.jpg',
    });
    const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formData);
    console.log(response.link);
    if (response.result) {
      setAvatar(response.link);
      ToastAndroid.show("Upload Image Success", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload Image Failed", ToastAndroid.SHORT);
    }
  }
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    const formData = new FormData();
    formData.append('image', {
      uri: result.assets[0].uri,
      type: 'icon/icon_jpeg',
      name: 'image.jpg',
    });
    const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formData);
    console.log(response.link);
    if (response.result) {
      setAvatar(response.link);
      ToastAndroid.show("Upload Image Success", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload Image Failed", ToastAndroid.SHORT);
    }
  }
  const updateProfile = async () => {
    //let rawNumber = phoneNumber.substring(3)
    console.log("----------------->", avatar, name, email)
    // console.log(rawNumber)
    try {
      const response = await AxiosInstance().put('user/api/update',
        {
          email: email,
          name: name,
          avatar: avatar, description: description
        })
      console.log(response)
      if (response.result) {
        ToastAndroid.show("Update Success", ToastAndroid.SHORT, ToastAndroid.CENTER);
      } else {
        ToastAndroid.show("Update Failed", ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    } catch (error) {
      ToastAndroid.show("Update ERROR SYS", ToastAndroid.SHORT, ToastAndroid.CENTER);
      console.log(error);

    }

  }
  const getInfoUser = async () => {
    try {
      const response = await AxiosInstance().get("user/api/get-by-id?id=" + idUser);
      if (response.result) {
        setDataUser(response.user);
      } else {
        console.log("Failed to get info User");
      }
    } catch (error) {
      console.log("=========>", error);
    }
  }

  const signOut = async () => {
    try {
        await GoogleSignin.signOut();
        setIsLogin(false)
        console.log("Logout");
        //setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
        console.error(error);
    }
};
  useEffect(() => {
    getInfoUser()
  }, [])

  return (
    <KeyboardAwareScrollView >

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.boxTop}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image style={[styles.ImageBack, { tintColor: COLOR.white }]} source={require('../../asset/icon/icon_back.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.text}>Người dùng</Text>
          </View>
          <TouchableOpacity onPress={() => { signOut() }}>
            <Image style={[styles.ImageBack, { tintColor: COLOR.white, height: 30, width: 30, marginRight: 10, }]} source={require('../../asset/icon/icon_logout.png')}></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={dialogImageChoose}>
          {
            !dataUser.avatar ?
              (<Image style={styles.imageProfile} source={avatar} />)
              :
              (<Image style={styles.imageProfile} source={{ uri: dataUser.avatar }} />)
          }
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.text1}>Họ tên</Text>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../../asset/icon/icon_edit_profile.png')}
              style={styles.ImageStyle} />

            <TextInput
              style={styles.textInput}
              placeholder="Nguyễn Văn A"
              onChangeText={setName} value={dataUser.name}
            //editable={false}
            //defaultValue={currentUser.email}
            />
          </View>
          {/* {formik.errors.name && <Text style={{ color: COLOR.red }}>{formik.errors.name}</Text>} */}
          <Text style={styles.text1}>Mô tả</Text>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../../asset/icon/icon_edit.png')}
              style={[styles.ImageStyle, { tintColor: COLOR.black }]} />

            <TextInput
              style={styles.textInput}
              placeholder="Hãy giới thiệu về bạn ..."
              // onChangeText={formik.handleChange('description')}
              // value={formik.values?.description}
              onChangeText={setDescription}
              value={description}
            />
          </View>
          <Text style={styles.text1}>Hạn mức chi</Text>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../../asset/icon/icon_edit.png')}
              style={[styles.ImageStyle, { tintColor: COLOR.black }]} />

            <TextInput
              style={styles.textInput}
              placeholder="1 000 000"
              onChangeText={setLimit}
              value={dataUser.limit == "" ? limit : dataUser.limit}
            />
          </View>
          {/* <TouchableOpacity style={styles.buttonSave} onPress={formik.handleSubmit}> */}
          <TouchableOpacity style={styles.buttonSave} onPress={checkAll}>
            <Text style={styles.text2}>Lưu thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View >
      <StatusBar style="auto" barStyle="dark-content" backgroundColor={COLOR.background2} />

    </KeyboardAwareScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {

  },
  text: {
    fontSize: 20,
    color: COLOR.white,
    fontWeight: 'bold',
    marginLeft: 20
  },

  header: {
    backgroundColor: COLOR.background2,
    width: "100%",
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },


  imageProfile: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 100
  },
  content: {
    padding: 20
  }
  ,
  text1: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 15
  }
  ,
  textInput: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderRadius: 20,
    backgroundColor: COLOR.gray,
    width: 300
  },
  buttonSave: {
    backgroundColor: COLOR.background2,
    alignSelf: 'center',
    width: "100%",
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    marginTop: 50,
    borderRadius: 30,
    justifyContent: 'center'

  }
  , text2: {
    color: COLOR.white,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  },

  SectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: COLOR.gray
  },
  ImageStyle: {
    padding: 10,
    height: 30,
    width: 30,
    marginLeft: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  ImageBack: {
    padding: 10,
    height: 20,
    width: 20,
    marginLeft: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  boxTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})