import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  CheckBox,
  TouchableOpacity
} from "react-native";
import { MAIN_COLOR } from "../common/Constants";
import { Toolbar } from "react-native-material-ui";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "../components/Button";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: false
    };
  }

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.pop()}
          centerElement='Cart'
        />
        <Image
          source={require("../images/Coffee.png")}
          style={{ width: "100%", height: '25%', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
        />

        {/* Name and price */}
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", marginTop: 10 }} >
          <Text style={{ fontSize: 30, marginLeft: 10 }}> {item.name} </Text>
          <View style={{ justifyContent: "center", borderColor: MAIN_COLOR, borderWidth: 1, borderRadius: 5, marginTop: 5 }}>
            <Text style={{ fontSize: 20, marginRight: 10, marginLeft: 10 }}> {item.price} L.E. </Text>
          </View>
        </View>

        {/* Description */}
        <View style={{ borderColor: MAIN_COLOR, borderWidth: 1, marginHorizontal: 10, borderRadius: 5, marginTop: 10 }}>
          <Text style={{ fontSize: 25, marginLeft: 10 }} >Description</Text>
          <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 10 }} >{item.description}</Text>
        </View>

        {/* Additions */}
        <View style={{ borderColor: MAIN_COLOR, borderWidth: 1, marginHorizontal: 10, borderRadius: 5, marginTop: 10 }}>
          <Text style={{ fontSize: 25, marginLeft: 10 }}>
            Additions
            </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <FlatList
              data={}
              renderItem={this.renderAdditionItem}
              extraData={this.state}
              keyExtractor={(item, index) => `${index}`}
            /> */}

            <CheckBox
              value={this.state.checked1}
              onValueChange={() =>
                this.setState({ checked1: !this.state.checked1 })
              }
            />
            <Text style={{ color: "white" }}>Extra Cheese</Text>

          </View>
        </View>

        {/* <Button Text="Add to cart" /> */}
      </>
    );
  }
}
