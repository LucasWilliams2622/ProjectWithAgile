import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'

const Item = () => {
    return (
        <View style={styles.container}>

            <View style={styles.viewMenuItem}>
                <View style={{ paddingLeft: 35 }}>
                    <View style={styles.viewMenu1}>
                        <Text style={styles.textCategory}>Quần Áo</Text>
                        <View style={{flexDirection:'row'}}>
                            <Image style={styles.imageEditAndDelete} source={require('../../asset/image/pen.png')}></Image>
                            <Image style={styles.imageEditAndDelete} source={require('../../asset/image/recyclebin.png')}></Image>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textPrice}>-666 VND</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.textNoteAndDate}>note</Text>
                        <Text style={styles.textNoteAndDate}>23-05-2023</Text>
                    </View>
                </View>
            </View>
            <Image style={styles.imageItem} source={require('../../Resource/cafe.png')}></Image>

        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    viewMenuItem: {
        backgroundColor: COLOR.gray,
        height: 100,
        width: 345,
        marginLeft: 37,
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1
    },
    imageItem: {
        height: 70,
        width: 70,
        marginLeft: -380
    },
    viewMenu1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewMenu2:{

    },
    viewMenu3:{

    },
    textCategory: {
        //fontFamily:
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '700',
        color: COLOR.black,
        marginTop: 7
    },
    textPrice: {
        //fontFamily:
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '400',
        color: COLOR.black,
        marginTop: 6
    },
    viewNoteAndDate: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textNoteAndDate: {
        //fontFamily:
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        color: COLOR.black,
        marginTop: 6, marginRight:20
    },
    imageEditAndDelete: {
        height: 23,
        width: 23, 
        marginRight: 10,
    },
})