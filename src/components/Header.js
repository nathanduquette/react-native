// import libraries for making component

import React from 'react';
import {Text, View} from 'react-native';

// make component

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

// style each component in each component

const styles = {
    viewStyle:{
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// make component available for the App

export default Header; 