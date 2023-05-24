import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddGifImage = () => {
	return (
		<View >
			<Image
				style={{ width: windowWidth, height: windowHeight }}
				source={require('../../asset/gif/money.gif')}
			/>
		</View>
	);
}

export default AddGifImage;
