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
} from "react-native";
import { Input } from "react-native-elements"
import { MAIN_COLOR } from "../common/Constants"
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';

const { width, height } = Dimensions.get('window')

export default PromoCodes = (props) => {
    return(
        <Fragment>
            <Toolbar
                leftElement="menu"
                onLeftElementPress={() => props.navigation.toggleDrawer()}
                centerElement={'Promo Codes'}
            />
            <ScrollView>
                <View style={{
                    width: width,
                    height: height - 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{ width: '90%', alignItems: 'center'}}>
                        <Image style={{ width: '100%', height: 120}} source={require('./images/promo.png')} />
                        <Text style={{ color: MAIN_COLOR }}>{`\nEnjoy with our discounts ;)\n\n`}</Text>
                    </View>
                    <View style={{ height: 100, width: '80%' }}>
                        <Text style={{ color: MAIN_COLOR }}>{`Your current codes :\n`}</Text>
                            <FlatList
                                style={{ width: '80%' }}
                                data={[ 'mosaab20', 'pick10', 'weekend15' ]}
                                renderItem={({item}) => (
                                    <Text style={{ marginLeft: 10 }}>{item}</Text>
                                )}
                        />
                    </View>
                    <View style={{
                            width: '80%',
                            borderBottomWidth: 1,
                        }}>
                            <TextInput
                                placeholder={'Promo code'}
                                autoCapitalize={'none'}
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
                            }}>Add code</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        </Fragment>
    );
}