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
} from "react-native";
import { Input, ButtonGroup } from "react-native-elements"
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import { MAIN_COLOR } from "../common/Constants"

const { width, height } = Dimensions.get('window')

export default  ResetPassword = (props) => {
    return(
        <Fragment>
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => props.navigation.pop()}
                centerElement={'Reset Password'}
            />
            <ScrollView>
                <View style={{
                    width: width,
                    height: height - 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{ width: '80%'}}>
                        <Text>{`We will send an email to you.\nCheck your inbox and follow the instructions`}</Text>
                    </View><View style={{
                            width: '80%',
                            borderBottomWidth: 1,
                        }}>
                            <TextInput
                                placeholder={'Email'}
                                keyboardType={'email-address'}
                            />
                        </View>
                        <TouchableOpacity style={{
                            width: '80%',
                            height: 40,
                            elevation: 5,
                            backgroundColor: MAIN_COLOR,
                            marginTop: 30,
                            alignItems:'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                            }}>Send</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        </Fragment>
    );
}