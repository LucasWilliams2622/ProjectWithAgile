import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { TextInput } from 'react-native-paper'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Profile = (props) => {
  const { route, navigation } = props;

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

    // const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formdata);
    // console.log(response.link);
    // if (response.result == true) {
    //   setAvatar(response.link);
    //   ToastAndroid.show("Upload Image Success", ToastAndroid.SHORT);
    // }
    // else {
    //   ToastAndroid.show("Upload Image Failed", ToastAndroid.SHORT);
    // }
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
    // const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formdata);
    // console.log(response.link);
    // if (response.result == true) {
    //   setAvatar(response.link);
    //   ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
    // }
    // else {
    //   ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    // }
  }
  const updateProfile = async () => {
    let rawNumber = phoneNumber.substring(3)
    console.log("----------------->", avatar, dob, name, phoneNumber, email, address)
    console.log(rawNumber)
    try {
      const response = await AxiosInstance().put('user/api/update',
        {
          phoneNumber: rawNumber, password: password, name: name,
          email: email, address: address, gender: gender, dob: dob, avatar: avatar, role: role
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
  return (
  <KeyboardAwareScrollView >

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image style={[styles.ImageStyle, { tintColor: COLOR.white }]} ></Image> {/*source={require('../../Resource/back.png')}*/}

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
        <Text style={styles.text1}>Name</Text>
        <View style={styles.SectionStyle}>
          <Image style={styles.ImageStyle} /> {/*source={require('../../Resource/editprofile.png')}*/}

          <TextInput
            style={styles.textInput}
            placeholder="User"

          />
        </View>

        <Text style={styles.text1}>Description</Text>
        <View style={styles.SectionStyle}>
          <Image style={[styles.ImageStyle, { tintColor: COLOR.black }]} /> {/*source={require('../../Resource/pen.png')}*/}

          <TextInput
            style={styles.textInput}
            placeholder="Xin chào bạn cho vài lời"
          />
        </View>
        <TouchableOpacity style={styles.buttonSave}>
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
    height: 100,
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