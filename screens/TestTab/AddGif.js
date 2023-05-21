import React from "react";
import {Text ,View , Image , StyleSheet} from 'react-native' ;

const AddGifImage = () => {
	return (
		<View style={Styles.container}>
		<Image
			style ={{width: "100%", height:"80%"}}
			source={require('../../asset/gif/money.gif')}
		/>
		</View>
	);
}

const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		margin:25
	}
})

export default AddGifImage;
