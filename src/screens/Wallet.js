import React, { Component, useState, Fragment } from "react";
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    FlatList,
    ProgressBarAndroid,
} from "react-native";
import { Input, Overlay } from "react-native-elements"
import { MAIN_COLOR } from "../common/Constants"
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';

const { width, height } = Dimensions.get('window')

export default Wallet = (props) => {

    const [visiable, setVisiable] = useState(false);

    return (
        <Fragment>
            <Toolbar
                leftElement="menu"
                onLeftElementPress={() => props.navigation.toggleDrawer()}
                centerElement={'Wallet'}
            />
            <Overlay
                isVisible={visiable}
                onBackdropPress={() => setVisiable(false)}
                overlayStyle={{ justifyContent: 'center', alignItems: 'center' }}
            >
                {/* <Text>Hello from Overlay!</Text> */}
                <View style={{
                    width: '80%',
                    borderBottomWidth: 1,
                }}>
                    <TextInput
                        placeholder={'Amount'}
                        keyboardType={'numeric'}
                    />
                </View>
                <TouchableOpacity style={{
                    width: '80%',
                    height: 40,
                    elevation: 5,
                    backgroundColor: MAIN_COLOR,
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                }}
                    onPress={() => {
                        setVisiable(false);
                        props.navigation.navigate('Payment');
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Deposit</Text>
                </TouchableOpacity>
            </Overlay>
            <View style={{
                width: width,
                height: height,
                alignItems: 'center',
            }}>
                <View style={{
                    width: '40%',
                    marginTop: height * 0.1
                }}>
                    <Text style={{ fontSize: 20 }}>EGP</Text>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 70 }}>35</Text>
                        <Text style={{ fontSize: 20 }}>Available credit</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    width: '80%',
                    height: 40,
                    elevation: 5,
                    backgroundColor: MAIN_COLOR,
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                }}
                    onPress={() => setVisiable(true)}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Deposit</Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}