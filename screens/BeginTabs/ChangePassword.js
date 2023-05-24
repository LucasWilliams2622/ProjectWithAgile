import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

const ChangePassword = () => {
  return (
    <View>
      <Text>ChangePassword</Text>
    <View style={styles.container}>
      <Text style={[styles.text, { color: '#1877F2' }]}>Hello!</Text>
      <Text style={styles.welcomeText}>Reset your password</Text>
     
      <TextInput placeholder='Your pasword' style={styles.textInput} ></TextInput>
      <TextInput placeholder='Your new pasword' style={styles.textInput} ></TextInput>
      <TextInput placeholder='Confirm your new password' style={styles.textInput} ></TextInput>

      
      <Pressable style={styles.buttonLogin}>
        <Text style={styles.textLogin}>Submit</Text>
      </Pressable>
      
    </View>
    </View>

  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column'
  },
  text: {
    fontFamily: 'Popins',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#050505'
  },
  welcomeText: {
    fontFamily: 'Popins',
    fontSize: 20,
    marginTop: 4,
    color: '#4E4B66',
    marginBottom: 20
  },
  textUser: {
    color: '#050505'
  },
  textInput: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5
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
    textAlign: 'center'
    
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
    marginTop: 5
  }
})