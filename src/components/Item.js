import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from "react-native";
// import { TouchableOpacity, } from 'react-native-gesture-handler';
import { COLOR } from "react-native-material-ui";

export default Item = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                flexDirection: 'row',
                width: '90%',
                margin: 7,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 7,
                backgroundColor: props.text === 'Add section'? COLOR.green400: COLOR.grey50,
                alignSelf: 'center'
            }}
        >
            <Text style={{
                fontFamily: 'Roboto',
                fontSize: 25
            }} >
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};


