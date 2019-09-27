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
import { Input, ButtonGroup } from "react-native-elements";
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import { MAIN_COLOR } from "../common/Constants"

const { width, height } = Dimensions.get('window')

export default Regestration = (props) => {
    return(
        <Fragment>
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => props.navigation.pop()}
                centerElement={'Sign up'}
            />
            <ScrollView>
           {/*      <View style={{
                    width: width,
                    height: height - 75,
                    backgroundColor: MAIN_COLOR,
                    justifyContent:'center'
                }}>
                    <View style={{
                        width: '85%',
                        height: '80%',
                        backgroundColor: 'white',
                        borderTopRightRadius: 50,
                        borderBottomRightRadius: 50,
                        alignItems: 'center',
                        justifyContent:'center',
                    }}>
                        <View style={{
                            width: '80%',
                            height: 40,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: MAIN_COLOR,
                            // marginTop: 40,
                        }}>
                            <TextInput
                                placeholder={'Name'}
                                autoCapitalize={'words'}
                            />
                        </View>
                        <View style={{
                            width: '80%',
                            height: 40,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: MAIN_COLOR,
                            marginTop: 20,
                        }}>
                            <TextInput
                                placeholder={'Phone number'}
                                autoCapitalize={'none'}
                                keyboardType={'numeric'}
                            />
                        </View>
                        <View style={{
                            width: '80%',
                            height: 40,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: MAIN_COLOR,
                            marginTop: 20,
                        }}>
                            <TextInput
                                placeholder={'Email'}
                                autoCapitalize={'none'}
                                keyboardType={'email-address'}
                            />
                        </View>
                        <View style={{
                            width: '80%',
                            height: 40,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: MAIN_COLOR,
                            marginTop: 20,
                        }}>
                            <TextInput
                                placeholder={'Password'}
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity style={{
                            width: '30%',
                            height: 40,
                            backgroundColor: MAIN_COLOR,
                            justifyContent:'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            marginTop: 30
                        }}>
                            <Text style={{
                                color: 'white',
                            }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
                <View style={{
                    width: width,
                    height: height - 75,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'Name'}
                            autoCapitalize={'words'}
                        />
                    </View>
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'Phone number'}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                        />
                    </View>
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'Password'}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{
                        width: '80%',
                        borderBottomWidth: 1,
                    }}>
                        <TextInput
                            placeholder={'Address'}
                            autoCapitalize={'sentences'}
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
                        }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Fragment>
    );
}