import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView ,StatusBar, SafeAreaView} from 'react-native'
import React, { useState ,useEffect} from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
import { useSelector, useDispatch } from "react-redux"
const Home = (props) => {
  const { navigation } = props;
  // const [darkMode, setDarkMode] = useState(false)
  const darkMode = useSelector(state => state.appReducer.darkMode);
  const isLoading = useSelector(state => state.appReducer.isLoading);
  const nameUser = useSelector(state => state.appReducer.nameUser);
  const dispath = useDispatch();
  console.log("darkMode", darkMode);
  console.log("nameUser", nameUser);

  useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading])


  const goAddNew = () => {
    navigation.navigate('AddNew');
  }
  const [isShow, setisShow] = useState(true);
  return (
    <SafeAreaView>
      <Text>Home</Text>

      <View style={styles.background}></View>
      <TouchableOpacity onPress={()=>
        dispath({type:'CHANGE_APP_MODE',payload:{darkMode:!darkMode},}
        )}>
        <View style={styles.viewAvatarAndText}>
          <Image source={require('../../asset/image/logo.png')} style={styles.imageProfile}></Image>
          <Text style={styles.textHello}>Xin chào Bạn </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.viewMenu}>
        <View style={styles.viewIn4Menu}>
          <View style={styles.viewIn4Menu1}>
            <View style={[styles.flex, { alignItems: 'center' }]}>
              <Image style={styles.image} source={require('../../asset/icon/icon_calender.png')}></Image>
              <Text style={styles.textDate}>23-05-2023</Text>
            </View>
            <TouchableOpacity onPress={() => setisShow(!isShow)}>
              {
                isShow ?
                  <Image style={styles.imageInvisible} source={require('../../asset/icon/icon_invisible.png')}></Image>
                  :
                  <Image style={styles.imageInvisible} source={require('../../asset/icon/icon_visible.png')}></Image>
              }
            </TouchableOpacity>

          </View>

          <View style={styles.viewIn4Menu2}>
            <Text style={styles.textPrice}>Tổng: </Text>
            {
              isShow ? <Text style={styles.textPrice}>********</Text> : <Text style={styles.textPrice}>0 VND</Text>
            }
          </View>

          <View style={styles.viewIn4Menu3}>
            <View style={[styles.flex, { alignItems: 'center' }]}>
              <Text style={styles.textGiveAndPay}>Thu Nhập:</Text>
              {
                isShow ? <Text style={styles.textGiveAndPay}>********</Text> : <Text style={styles.textGiveAndPay}>1.000.000 VND</Text>
              }
            </View>
            <View style={[styles.flex, { alignItems: 'center' }]}>
              <Text style={styles.textGiveAndPay}>Chi Tiêu:</Text>
              {
                isShow ? <Text style={styles.textGiveAndPay}>********</Text> : <Text style={styles.textGiveAndPay}>1.000.000 VND</Text>
              }
            </View>
          </View>
          <View style={styles.viewIn4Menu3}>
            <View style={[styles.flex, { alignItems: 'center' }]}>
              <Image style={styles.imageInvisible} source={require('../../asset/icon/icon_load.png')}></Image>
            </View>
            <View style={[styles.flex, { alignItems: 'center' }]}>

              {
                isShow ? <Text style={styles.textTotalManager}>********</Text> : <Text style={styles.textTotalManager}>40/100</Text>
              }
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.textToday}>Hôm nay:</Text>

      <ScrollView>
        <View style={styles.viewListGiveAndPay}>
          <TouchableOpacity onPress={() => { goAddNew() }}>
            <Image style={{ height: 250, width: 250 }} source={require('../../asset/gif/statistic.gif')}></Image>
            <View style={{ marginTop: 30 }} >
              <Text style={styles.textGif}>Hãy thêm chi tiêu hôm nay. Chạm vào đây dể thêm.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" barStyle="dark-content" backgroundColor={COLOR.background2} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row'
  },
  jusCenter: {
    justifyContent: 'center'
  },
  itemCenter: {
    alignItems: 'center'
  },
  background: {
    backgroundColor: COLOR.background2,
    height: 180,
    borderRadius: 20,
    marginTop: -40
  },
  viewAvatarAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -125,
    marginLeft: 17
  },
  imageProfile: {
    height: 50,
    width: 50,
    marginRight: 13,
    borderRadius: 100,
  },
  textHello: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.white
  },
  viewMenu: {
    alignItems: 'center',
    marginTop: 10
  },
  viewIn4Menu: {
    backgroundColor: COLOR.secondary,
    height: 120,
    width: 310,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLOR.gray,
    marginTop: -70
  },
  viewIn4Menu1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12
  },
  viewIn4Menu2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3
  },
  viewIn4Menu3: {
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'space-between'
  },
  image: {
    height: 30,
    width: 30
  },
  textDate: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 10,
    color: COLOR.black
  },
  imageInvisible: {
    height: 30,
    width: 30
  },
  textPrice: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 10,
    color: COLOR.black
  },
  textGiveAndPay: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLOR.black
  },
  textTotalManager: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    right: 200,
    color: COLOR.black
  },
  textToday: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '400',
    color: COLOR.black,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5
  },
  viewListGiveAndPay: {
    width: 400,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGif: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  }
})