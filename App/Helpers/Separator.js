import React from 'react-native';

var {View, StyleSheet} = React,
	styles = StyleSheet.create({
		separator: {
			height: 1,
			backgroundColor: '#E4E4E4'
		}
	});

const Separator = ()=> <View style = {styles.separator} />;

module.exports = Separator;