import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import ToggleSwitch from 'toggle-switch-react-native'

const Setting = (props) => {
  const { navigation } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const version = '1.0.0.0';
  const showVersion = () => {
    return Alert.alert(
      "Phiên Bản",
      "Version :" + version,

    );
  }
  const showNotification = () => {
    return ToastAndroid.showWithGravity(
      'Chức năng sẽ được cập nhật trong các phiên bản tiếp theo!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Cài đặt</Text>
        <View style={styles.view1}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={styles.imageProfile} source={require('../../asset/image/profile.png')}></Image>
          </TouchableOpacity>
          <Text style={styles.text1}>User</Text>
        </View>
      </View>

      <View >
        <Text style={styles.text2}>Cài đặt chung</Text>
        <View style={styles.view2}>
          <View style={styles.allignview1}>
            <View>
              <Text style={styles.text5}>Nhắc nhở hàng ngày</Text>
              <Text style={styles.text5}>10:00</Text>
            </View>
            <Switch
              style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], marginRight: 10, }}

              thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>
          <View style={styles.line}></View>
          <View style={styles.allignview1}>
            <Text style={styles.text4}>Đơn vị tiền tệ</Text>
            <TouchableOpacity onPress={showNotification}>
              <Image source={require('../../asset/icon/icon_sort.png')} style={styles.ImageStyle} />
            </TouchableOpacity>

          </View>
        </View>
      </View>

      <View >
        <Text style={styles.text2}>Thông tin ứng dụng</Text>
        <View style={styles.view3}>
          <Text style={styles.text4}>Điều khoản</Text>
          <View style={styles.line}></View>
          <TouchableOpacity onPress={showVersion}>
            <Text style={styles.text4}>Phiên bản</Text>

          </TouchableOpacity>
          <View style={styles.line}></View>
          <Text style={styles.text4}>Chính sách bảo mật</Text>
          <View style={styles.line}></View>
          <Text style={styles.text4}>Người phát triển: Nhóm 4</Text>
        </View>
      </View>


    </ScrollView>


  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.grey,
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20
  },

  header: {
    backgroundColor: COLOR.title,
    height: 200,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    flexDirection: 'column',
    alignItems: 'center'
  }
  ,
  imageProfile: {
    height: 130,
    width: 130,
    alignSelf: 'center',

  },
  view1: {
    flexDirection: 'column'
  },
  text1: {
    color: COLOR.white,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -10,
    fontSize: 18
  }
  ,
  text2: {
    fontSize: 22,
    color: COLOR.black,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 30
  },
  view2: {
    backgroundColor: COLOR.white,
    width: '100%',
    height: 120,
    borderRadius: 20,
    borderWidth: 1
  },
  view3: {
    backgroundColor: COLOR.white,
    width: '100%',
    height: 200,
    borderRadius: 20,
    borderWidth: 1
  },
  view4: {
    backgroundColor: COLOR.white,
    width: '100%',
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 20
  },
  line: {
    backgroundColor: COLOR.gray,
    height: 1,
    width: '94%',
    alignSelf: 'center'
  },
  text4: {
    fontSize: 17,
    color: COLOR.darkGray,
    margin: 13
  },
  text5: {
    fontSize: 17,
    color: COLOR.darkGray,
    margin: 5,
    marginLeft: 13
  },
  ImageStyle: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight: 10
  },
  allignview1: {
    flexDirection: 'row', justifyContent: 'space-between'
  }
})