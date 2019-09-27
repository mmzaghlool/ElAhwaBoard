import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text
} from "react-native";
import { MAIN_COLOR } from '../common/Constants';
import Entypo from "react-native-vector-icons/MaterialCommunityIcons";

export const Button = props => {
  return (
    <TouchableOpacity style={{
      backgroundColor: MAIN_COLOR,
      margin: 5,
      padding: 5,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      height: 45,
      width: '80%',
      alignSelf: 'center'
    }}
      onPress={props.onPress}
    >
      <Text style={{
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 18
      }} >
        {props.Text}
      </Text>
    </TouchableOpacity>
  );
};

export const AddButton = props => {
  return (
    <TouchableOpacity style={{
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 20,
      right: 20,
      borderRadius: 30,
      height: 55,
      width: 55,
      zIndex: 5,
      elevation: 5,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center'
    }}
      onPress={props.onPress}
    >
      <Entypo name={'plus'} size={30} />
    </TouchableOpacity>
  );
};

export const AddToSectionButton = props => {
  return (
    <TouchableOpacity style={{
      // backgroundColor: 'white',
      // position: 'absolute',
      // bottom: 20,
      // right: 20,
      // borderRadius: 30,
      // height: 55,
      // width: 55,
      // zIndex: 5,
      // elevation: 5,
      margin: 5,
      padding: 5,
      // justifyContent: 'center',
      // alignItems: 'center'
    }}
      onPress={props.onPress}
    >
      <Entypo name={'plus'} size={25} />
    </TouchableOpacity>
  );
};

export default class CartButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: this.props.buttonColor,
          height: 45,
          width: "90%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginBottom: 12,
          borderColor: MAIN_COLOR,
          borderWidth: 2
        }}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            textAlign: "center",
            color: this.props.textColor,
            margin: 20
          }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
