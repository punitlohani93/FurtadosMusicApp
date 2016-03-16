'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	MKButton,
	MKColor
} from 'react-native-material-kit';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		resizeMode: 'stretch'
	},
	text: {
		backgroundColor: 'transparent',
		color: "#FFFFFF",
		fontSize: 30,
		fontWeight: "400",
		textAlign: 'center'

	},
	mainContent: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	appLogoHolder: {
		borderColor: '#FFFFFF',
		borderWidth: 2,
		height: 120,
		backgroundColor: "#FFFFFF"
	},
	appLogo: {
		resizeMode: 'stretch'
	},
	instrumentIconHolder: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingLeft: 95,
		paddingRight: 95
	},
	descriptionHolder: {
		flexDirection: 'column'
	},
	descriptionText: {
		color: '#FFFFFF',
		fontSize: 12,
		textAlign: 'center'	
	},
	buttonHolder: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	iconButtonHolder: {
		justifyContent: 'center',
		width:200,
		height:200,
		borderRadius:100
	}
});

class Main extends React.Component {
	constructor() {
		super();
	}
	render(){
		return (
				<Image source={{uri:"https://i.ytimg.com/vi/ESlbVBeTq0U/hqdefault.jpg"}} style={styles.container}>
					<View style={styles.mainContent}>
						<View style={styles.appLogoHolder}>
							<Image source={{uri:"https://i.ytimg.com/vi/ESlbVBeTq0U/hqdefault.jpg"}} style={styles.appLogo}/>
						</View>
						<View style={styles.taglineHolder}>	
							<Text style={styles.text}>WHICH</Text>
							<Text style={styles.text}>INSTRUMENT</Text>
							<Text style={styles.text}>WOULD YOU</Text>
							<Text style={styles.text}>LIKE TO</Text>
							<Text style={styles.text}>LEARN TODAY?</Text>
						</View>
						<View style={styles.instrumentIconHolder}>
							<Icon name="music" color='#FFFFFF' size={25} />
							<Icon name="play" color='#FFFFFF' size={25} />
							<Icon name="briefcase" color='#FFFFFF' size={25} />
							<Icon name="headphones" color='#FFFFFF' size={25} />
						</View>
						<View style={styles.descriptionHolder}>
							<Text style={styles.descriptionText}>
							See why over 1000 students
							</Text>
							<Text style={styles.descriptionText}>
							learn from us every week
							</Text>
						</View>
						<View style={styles.buttonHolder}>
							<MKButton
							  backgroundColor='#FFFFFF'
							  shadowRadius={2}
							  shadowOffset={{width:0, height:2}}
							  shadowOpacity={.7}
							  shadowColor="black"
							  borderRadius={5}
							  onPress={() => {
							    console.log('hi, raised button!');
							  }}>
							  <Text pointerEvents="none"
							        style={{color: 'black', fontWeight: '400', fontSize: 14}}>
							    SIGN IN
							  </Text>
							</MKButton>
							<MKButton
							  backgroundColor="#FFFFFF"
							  shadowRadius={2}
							  shadowOffset={{width:0, height:2}}
							  shadowOpacity={.7}
							  shadowColor="black"
							  onPress={() => {
							    console.log('hi, raised button!');
							  }}>
							  <Text pointerEvents="none"
							        style={{color: '#DE1931', fontWeight: '400', fontSize: 14}}>
							    REGISTER
							  </Text>
							</MKButton>
						</View>
						<View style={styles.iconButtonHolder}>
							
						</View>
					</View>
				</Image>
			);
	}
}

export default Main;


/*
<View style={styles.appLogoHolder}>
	<Image source={{uri:"https://i.ytimg.com/vi/ESlbVBeTq0U/hqdefault.jpg"}} style={styles.appLogo}/>
</View>
*/

//https://themightyriff.files.wordpress.com/2011/07/furtados-waves-logo-colour.png