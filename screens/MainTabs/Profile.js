import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { TextInput } from 'react-native-paper'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'


const Profile = () => {
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={[styles.ImageStyle, { tintColor: COLOR.white }]} source={require('../../Resource/back.png')}></Image>
        <Text style={styles.text}>Người dùng</Text>
      </View>
      <TouchableOpacity onPress={getImageLibrary}>
        <Image style={styles.imageProfile} source={require('../../asset/image/profile.png')}></Image>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.text1}>Name</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../Resource/editprofile.png')}
            style={styles.ImageStyle} />

          <TextInput
            style={styles.textInput}
            placeholder="User"

          />
        </View>

        <Text style={styles.text1}>Description</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../Resource/pen.png')}
            style={[styles.ImageStyle, { tintColor: COLOR.black }]} />

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
    height: 200,
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