import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { TextInput } from 'react-native-paper'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Profile = (props) => {
  const { route, navigation } = props;
  //const [currentUser, setCurrentUser] = useState({});
  const [currentUser, setCurrentUser] = useState({"_id": {
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
  }});

  const [limit, setLimit] = useState(10000);
  const [avatar, setAvatar] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const dialogImageChoose = () => {
    return Alert.alert(
      "Thông báo",
      "Chọn phương thức lấy ảnh",
      [
        {
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
      ]
    );
  };
  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);
    // const formdata = new FormData();
    // formdata.append('image', {
    //   uri: result.assets[0].uri,
    //   type: 'image/jpeg',
    //   name: 'image.jpg',
    // });
  }
  
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    // const formdata = new FormData();
    // formdata.append('image', {
    //   uri: result.assets[0].uri,
    //   type: 'image/jpeg',
    //   name: 'image.jpg',
    // });
  }
  const updateProfile = async () => {
    let rawNumber = phoneNumber.substring(3)
    console.log("----------------->", avatar, dob, name, phoneNumber, email, address)
    console.log(rawNumber)
    try {
      const response = await AxiosInstance().put('user/api/update',
        {
          phoneNumber: rawNumber, password: password, name: name,
          email: email, address: address, avatar: avatar, role: role, description: description
        })
      console.log(response)
      if (response.result) {
        ToastAndroid.show("Update Success", ToastAndroid.SHORT, ToastAndroid.CENTER);
      } else {
        ToastAndroid.show("Update Failed", ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    } catch (error) {
      ToastAndroid.show("Update ERROR SYS", ToastAndroid.SHORT, ToastAndroid.CENTER);

    }

  }

  const formik = useFormik({
    initialValues: {...currentUser, limit: limit.toString()},
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
    // const response = await AxiosIntance().get("lay limit", { email: emailUser, password: passwordUser, name: nameUser });
    // setLimit(....)
  }
  const [imageURI, setImageURI] = useState("");
  const handleUpdateUser = async (form) => {
    // const uploadAvatarForm = new FormData();
    // uploadAvatarForm.append('file', {
    //   uri: imageURI,
    //   name: "image",
    //   type: 'image/jpg',
    // });
    
    // const responseAvatar = await AxiosIntance().post("/user/api/upload-avatar", uploadAvatarForm);
    // const sendData = {
    //   ...form,
    //   limit: Number(limit), avatar: responseAvatar?.link
    // }
    // const responseUpdateUser = await AxiosIntance().post("/user/api/update", {...form, sendData})
    setCurrentUser({...form, name: "Tung nui"})
  }

  useEffect(() =>{
    getCurrentUserInfo()
  }, [])

  return (
  <KeyboardAwareScrollView >

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image style={[styles.ImageStyle, { tintColor: COLOR.white }]} source={require('../../asset/image/back.png')}></Image>

        </TouchableOpacity>
        <Text style={styles.text}>Người dùng</Text>
      </View>

      <TouchableOpacity onPress={dialogImageChoose}>
        {
          !avatar
            ?
            (<Image style={styles.imageProfile} source={require('../../asset/image/profile.png')} />)
            :
            (<Image style={styles.imageProfile} source={{ uri: avatar }} />)
        }
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.text1}>Email</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../asset/image/editprofile.png')}
            style={styles.ImageStyle} />

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            editable = {false}
            defaultValue={currentUser.email}
          />
        </View>
        <Text style={styles.text1}>Name</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../asset/image/editprofile.png')}
            style={styles.ImageStyle}/>

          <TextInput
            style={styles.textInput}
            placeholder="User"
            onChangeText={formik.handleChange('name')}
            value={formik.values?.name}
          />
          
        </View>
        {formik.errors.name && <Text style = {{color : COLOR.red}}>{formik.errors.name}</Text>}
        <Text style={styles.text1}>Description</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../asset/image/pen.png')}
            style={[styles.ImageStyle, { tintColor: COLOR.black }]} />

          <TextInput
            style={styles.textInput}
            placeholder="Xin chào bạn cho vài lời"
            onChangeText={formik.handleChange('description')}
            value={formik.values?.description}

          />
        </View>

        <Text style={styles.text1}>Limit</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../asset/image/pen.png')}
            style={[styles.ImageStyle, { tintColor: COLOR.black }]} />

          <TextInput
            style={styles.textInput}
            placeholder="Hạn mức chi"
            onChangeText={formik.handleChange('limit')}
            value={formik.values?.limit}
          />
        </View>
        
        <TouchableOpacity style={styles.buttonSave} onPress={formik.handleSubmit}>
          <Text style={styles.text2}>Lưu thay đổi</Text>
        </TouchableOpacity>
      </View>
    </View >
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
    backgroundColor: COLOR.primary,
    width: "100%",
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  }
  ,
  imageProfile: {
    height: 200,
    width: 200,
    alignSelf: 'center',

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
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    width: "100%",
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    marginTop: 50,
    borderRadius: 20,
    justifyContent: 'center'

  }
  , text2: {
    color: COLOR.white,
    textAlign: 'center',
    alignSelf: 'center',
  },

  SectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderRadius: 20,
    backgroundColor: COLOR.gray
  },
  ImageStyle: {
    padding: 10,
    height: 30,
    width: 30,
    marginLeft: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
  }
})