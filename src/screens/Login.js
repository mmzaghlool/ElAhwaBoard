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
import { Input } from "react-native-elements"
import { MAIN_COLOR } from "../common/Constants"

const { width, height } = Dimensions.get('window')

export default Login = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Fragment>
            <ScrollView>
                <View style={{
                    width: width,
                    height: height,
                    alignItems: 'center',
                }}>
                    <View style={{height: '15%'}} />
                    <Image style={{ width: '80%', height: '25%' }} source={require('./images/coffe.png')} />
                    <View style={{height: '15%'}} />
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
                            placeholder={'Password'}
                            secureTextEntry={true}    
                        />
                    </View>
                    <TouchableOpacity style={{
                        width: '80%',
                        flexDirection: 'row-reverse',
                    }}
                        onPress={() => props.navigation.navigate('ResetPassword')}
                    >
                        <Text style={{
                            color: MAIN_COLOR,
                            fontSize: 15,
                            marginTop: 20,
                        }}>Forget password ?!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: '80%',
                        height: 40,
                        elevation: 5,
                        backgroundColor: MAIN_COLOR,
                        marginTop: 30,
                        alignItems:'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                    }}
                        onPress={() => props.navigation.navigate('Home')}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                        }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => props.navigation.navigate('Regestration')}
                    >
                        <Text style={{
                            color: MAIN_COLOR,
                            fontSize: 15,
                            marginTop: 20,
                        }}>Don't have an account ?!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Fragment>
    );
}