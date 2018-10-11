//Import Library
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

//Make component
const Header = (props) => {
    const { textStyle, viewStyles } = styles;


    return (
        <View style={viewStyles}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    textStyle: {
        fontSize: 30,
        color: '#000000',
    },
    viewStyles: {
        backgroundColor: '#AABB99',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative',
    }
};
//Make Component  available for other parts of app
export default Header;
