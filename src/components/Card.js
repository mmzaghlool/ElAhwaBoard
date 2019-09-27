import React, { useState } from 'react';
import { Text, Image } from "react-native";
import { TouchableOpacity, } from 'react-native-gesture-handler';
import { COLOR } from "react-native-material-ui";

export default Card = props => {
    const [backgroundColorState, setBackgroundColorState] = useState(COLOR.grey50)
    return (
        <TouchableOpacity
            onBlur={() => setBackgroundColorState(COLOR.grey200)}
            onPress={props.onPress}
            style={{
                flexDirection: 'row',
                width: '95%',
                margin: 7,
                padding: 7,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                elevation: 7,
                backgroundColor: backgroundColorState,
                alignSelf: 'center'
            }}
        >
            <Image source={props.image} style={{
                height: 80,
                width: 80
            }} />
            <Text style={{
                fontFamily: 'Roboto',
                fontSize: 20
            }} >
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};


