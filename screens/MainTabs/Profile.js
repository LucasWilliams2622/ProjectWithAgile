import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { TextInput } from 'react-native-paper'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AxiosInstance from '../../constants/AxiosInstance'
import { AppContext } from '../../utils/AppContext'

const Profile = (props) => {
  const { route, navigation } = props;
  const [email, setemail] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageURI, setImageURI] = useState("");
  const { idUser, infoUser } = useContext(AppContext);
console.log(idUser);
  const [currentUser, setCurrentUser] = useState({
    "_id": {
      "$oid": "6478632830be4c0f2ab4472a"
    },
    "name": "phitung",
    "email": "tungh3210@gmail.com",
    "password": "$2a$10$tQMCJ8lkCr4cb.tE57MC8.mqGpdJVuwDZzyNh8L/L/btw16uCAS7m",
    "description": "hihihihi",
    "avatar": "",
    "role": {
      "$numberInt": "1"
    },
    "isLogin": false,
    "isActive": true,
    "isVerified": false,
    "verificationCode": "0",
    "createAt": {
      "$date": {
        "$numberLong": "1685611304744"
      }
    },
    "updateAt": {
      "$date": {
        "$numberLong": "1685611304744"
      }
    },
    "isAble": true,
    "__v": {
      "$numberInt": "0"
    }
  });

  const [limit, setLimit] = useState(10000);

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
    if (name.trim() === '') {
      Alert.alert('Error', 'vui lòng nhập tên!');
    }
    else if (description.trim() === '') {
      Alert.alert('Error', 'vui lòng cho vài dòng thông tin!');
    }
  }
  const onLogOut = async () => {

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
    // const formdata = new FormData();
    // formdata.append('image', {
    //   uri: result.assets[0].uri,
    //   type: 'icon/icon_jpeg',
    //   name: 'image.jpg',
    // });
  }
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    // const formdata = new FormData();
    // formdata.append('image', {
    //   uri: result.assets[0].uri,
    //   type: 'icon/icon_jpeg',
    //   name: 'image.jpg',
    // });
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

  const formik = useFormik({
    initialValues: { ...currentUser, limit: limit.toString() },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Họ Và Tên tối thiểu 5 ký tự trở lên.')
        // .matches(, 'Họ Và Tên không đúng định dạng.')
        .required('Họ Và Tên không được để trống!'),
    }),
    onSubmit: (form) => {
      handleUpdateUser(form)
    },
  });

  const getCurrentUserInfo = async () => {
    // const response = await AxiosInstance().get("lay limit", { email: emailUser, password: passwordUser, name: nameUser });
    // setLimit(....)
  }
  const handleUpdateUser = async (form) => {
    // const uploadAvatarForm = new FormData();
    // uploadAvatarForm.append('file', {
    //   uri: imageURI,
    //   name: "image",
    //   type: 'image/jpg',
    // });

    // const responseAvatar = await AxiosInstance().post("/user/api/upload-avatar", uploadAvatarForm);
    // const sendData = {
    //   ...form,
    //   limit: Number(limit), avatar: responseAvatar?.link
    // }
    // const responseUpdateUser = await AxiosInstance().post("/user/api/update", {...form, sendData})
    setCurrentUser({ ...form, name: "Tung nui" })
  }

  useEffect(() => {
    getCurrentUserInfo()
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
          <TouchableOpacity onPress={() => { onLogOut() }}>
            <Image style={[styles.ImageBack, { tintColor: COLOR.white, height: 30, width: 30, marginRight: 10, }]} source={require('../../asset/icon/icon_logout.png')}></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={dialogImageChoose}>
          {
            !avatar
              ?
              (<Image style={styles.imageProfile} source={require('../../asset/icon/icon_profile.png')} />)
              :
              (<Image style={styles.imageProfile} source={{ uri: avatar }} />)
          }
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.text1}>Name</Text>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../../asset/icon/icon_edit_profile.png')}
              style={styles.ImageStyle} />

            <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={setName} value={name}
            //editable={false}
            //defaultValue={currentUser.email}
            />
          </View>
          {formik.errors.name && <Text style={{ color: COLOR.red }}>{formik.errors.name}</Text>}
          <Text style={styles.text1}>Description</Text>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../../asset/icon/icon_edit.png')}
              style={[styles.ImageStyle, { tintColor: COLOR.black }]} />

            <TextInput
              style={styles.textInput}
              placeholder="Xin chào bạn cho vài lời"
              // onChangeText={formik.handleChange('description')}
              // value={formik.values?.description}
              onChangeText={setDescription}
              value={description}
            />
          </View>
          <Text style={styles.text1}>Limit</Text>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../../asset/icon/icon_edit.png')}
              style={[styles.ImageStyle, { tintColor: COLOR.black }]} />

            <TextInput
              style={styles.textInput}
              placeholder="Hạn mức chi"
              onChangeText={formik.handleChange('limit')}
              value={formik.values?.limit}
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