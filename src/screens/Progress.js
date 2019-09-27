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
import { Input } from "react-native-elements"
import { MAIN_COLOR } from "../common/Constants"
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';

const { width, height } = Dimensions.get('window')

export default Progerss = (props) => {
    return (
        <Fragment>
            <Toolbar
                leftElement="menu"
                onLeftElementPress={() => props.navigation.toggleDrawer()}
                centerElement={'Progress'}
            />
            <View style={{
                width: width,
                height: height - 50,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image style={{ width: 90, height: 90 }} source={require('./images/golden.png')} />
                <Text style={{ color: MAIN_COLOR, fontSize: 30 }}>Golden user</Text>
                <Text style={{ fontSize: 20 }}>Enjoy 5% discount on any order ;)</Text>
                <View style={{
                    width: width,
                    alignItems: 'center',
                    marginTop: 30,
                }}>
                    <View style={{
                        width: '90%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }}
                                source={require('./images/golden.png')}
                            />
                            <Text>Golden</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }}
                                source={require('./images/platinum.png')}
                            />
                            <Text>Platinum</Text>
                        </View>
                    </View>
                    <ProgressBarAndroid
                        style={{ width: '80%', color: MAIN_COLOR, marginBottom: 10 }}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.7}
                    />
                    <Text>only 20 L.E. remain to be a Platinum user</Text>
                    <Text style={{ marginTop: 10 }}>You saved <Text style={{ color: MAIN_COLOR }}>25 L.E.</Text> this month</Text>
                </View>
                <View style={{
                    width: '80%',
                    marginTop: 15,
                }}>
                    <Text style={{ color: MAIN_COLOR, fontSize: 17 }}>How it work ?</Text>
                    <Text>{`Whenever you make an order you will earn points\nthis points will upgrade your level\nwhen you level up you will enjoy greater discount from ELAhwa`}</Text>
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
                    onPress={() => props.navigation.navigate('Home')}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Order now</Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}