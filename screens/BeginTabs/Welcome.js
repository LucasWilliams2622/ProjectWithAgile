import {
    Pressable, StyleSheet, Text, Alert, TextInput, Dimensions,
    View, Image, ToastAndroid, TouchableOpacity
} from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'

const Welcome = () => {
    return (
        <View style={styles.container}>

            <View style={styles.center}>
                <Image style={styles.imageLogin} source={require('../../asset/image/LoginAndRegister/Illustration.png')}></Image>
            </View>

            <View style={[styles.center, { marginTop: 10 }]}>
                <Text style={styles.text}>Realax and shop</Text>
                <Text style={[styles.text, { fontSize: 16, fontWeight: '400' }]}>Shop online and get grocories</Text>
                <Text style={[styles.text, { fontSize: 16, fontWeight: '400' }]}>delivered from stores to your home</Text>
                <Text style={[styles.text, { fontSize: 16, fontWeight: '400' }]}>in as fast as 1 hour .</Text>
            </View>

            <View style={styles.center}>
                <Pressable style={styles.viewPressable}>
                    <Text style={styles.textPressable}>Sign up</Text>
                </Pressable>

                <Pressable style={[styles.viewPressable, { marginTop: 10 }]}>
                    <Text style={styles.textPressable}>Sign in</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        marginStart: 16,
        marginEnd: 16,
        marginTop: 10
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLogin: {
        width: 329.36,
        height: 362,
        marginTop: 20
    },
    inputEmailAndPass: {
        width: 343,
        height: 48,
        backgroundColor: COLOR.lightGray,
        borderRadius: 5,
        marginTop: 15,
        fontFamily: 'Klarna Text',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        color: COLOR.black,
        paddingLeft: 10
    },
    viewPressable: {
        width: 343,
        height: 50,
        borderRadius: 30,
        backgroundColor: COLOR.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    textPressable: {
        fontFamily: 'Klarna Text',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        color: COLOR.white
    },
    text: {
        fontFamily: 'Klarna Text',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        color: COLOR.brown
    }
})