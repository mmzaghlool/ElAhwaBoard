import React, { Component } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import Entypo from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Toolbar, COLOR } from "react-native-material-ui";
import CartButton from "../components/Button";
import { MAIN_COLOR } from "../common/Constants";

const { width, height } = Dimensions.get("window");

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [
        {
          name: "soda",
          quantity: 2,
          price: 10,
          image: require("../images/Coffee.png"),
          id: 1
        },
        {
          name: "cola",
          quantity: 1,
          price: 10,
          image: require("../images/Coffee.png"),
          id: 2
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("../images/Coffee.png"),
          id: 3
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("../images/Coffee.png"),
          id: 4
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("../images/Coffee.png"),
          id: 5
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("../images/Coffee.png"),
          id: 6
        },
        {
          name: "Soda",
          quantity: 3,
          price: 10,
          image: require("../images/Coffee.png"),
          id: 7
        }
      ]
    };
  }

  renderIcon = (label, item, onPress) => {

    let backgroundColor, iconColor, condition;

    switch (label) {
      case 'minus':
        condition = item.quantity === 1;
        backgroundColor = condition ? "grey" : MAIN_COLOR;
        iconColor = 'white';

        break;
      case 'plus':
        condition = false;
        backgroundColor = 'white';
        iconColor = MAIN_COLOR;
        break;
      case 'close':
        condition = false;
        backgroundColor = 'red';
        iconColor = 'white';
        break;
    }

    return (
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor,
          marginHorizontal: 5,
          alignItems: "center",
          justifyContent: "center",
          borderColor: MAIN_COLOR,
          borderWidth: label === 'plus' ? 1.5 : 0
        }}
        disabled={condition}
        onPress={onPress}
      >
        <Entypo name={label} size={12} color={iconColor} />
      </TouchableOpacity>
    )
  }

  _renderRequestesItem = ({ item, index }) => (
    <View style={{ width: '95%', alignSelf: "center", marginBottom: 10, flexDirection: "row", alignItems: 'center' }} >
      <View
        style={{
          alignItems: "center",
          flex: 1,
          padding: 10,
          borderRadius: 7,
          borderWidth: 1.5,
          borderColor: MAIN_COLOR,
          flexDirection: "row"
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image style={styles.imageStyle} source={item.image} />
          <View style={{ marginLeft: 10, alignSelf: "center" }}>
            <Text style={styles.medicineName}>{item.name}</Text>
            <Text style={styles.medicinePrice}>{item.price} EGP</Text>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: "row" }}>
            {this.renderIcon('minus', item, () => {
              let { cartData } = this.state;
              cartData[index].quantity = item.quantity - 1
              this.setState({ cartData })
            }
            )}
            <Text style={{ width: 40, textAlign: "center" }}>
              {item.quantity}
            </Text>
            {this.renderIcon('plus', item, () => {
              let { cartData } = this.state;
              cartData[index].quantity = item.quantity + 1
              this.setState({ cartData })
            }
            )}
          </View>
          <Text style={{ alignSelf: "center" }}>quantity</Text>
        </View>
      </View>
      {this.renderIcon('close', item, () => {
        let { cartData } = this.state;
        let newCart = []
        for (let i = 0; i < cartData.length; i++) {
          const element = cartData[i];
          if (i !== index) {
            newCart.push(element)
          }
        }
        this.setState({ cartData: newCart })
      })}
    </View>
  );

  _renderOrdesView() {
    const { cartData } = this.state;
    if (cartData.length > 0) {
      return (
        <View style={{ flex: 1 }} >

          {/* orders list */}
          <FlatList style={{ paddingVertical: 10, width: '100%' }}
            data={cartData}
            keyExtractor={item => `${item.id}`}
            renderItem={this._renderRequestesItem}
          />

          {/* Total amount */}
          <View style={{ padding: 7, width: '100%', backgroundColor: COLOR.grey100 }} >
            <View style={{ margin: 7, width: '100%', flexDirection: "row" }} >
              <Text
                style={{
                  fontSize: 14,
                  color: 'black', marginEnd: 3
                }}
              >
                Total:
            </Text>
              <Text style={{ fontSize: 14, color: MAIN_COLOR }} >
                123 EGP
            </Text>
            </View>
            {/* Finish order */}
            <CartButton buttonColor={MAIN_COLOR} textColor='white' text='Finish order' onPress={() => {
              this.setState({ cartData: [] });
            }} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              margin: 10,
              fontSize: 18,
              textAlign: "center",
              color: MAIN_COLOR
            }}
          >
            There are no product added
          </Text>
        </View>
      );
    }
  }

  render() {
    const { cartData } = this.state;
    return (
      <>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.pop()}
          centerElement='Cart'
        />

        {this._renderOrdesView()}
      </>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 50
  },
  medicineName: {
    width: width * 0.35
  }
});
