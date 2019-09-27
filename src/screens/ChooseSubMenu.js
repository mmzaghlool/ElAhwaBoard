import React, { Fragment, useEffect, useState } from 'react';
import { Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLOR } from 'react-native-material-ui';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


export default ChooseSubMenu = props => {

    const [subMenus, setsubMenus] = useState(["1", "sad", "Mos3ab", "dsad", "5", "Mos3ab"])

    const renderSubMenuItem = ({ item, index }) => {
        console.log(item, index);

        return (
            <TouchableOpacity style={{
                backgroundColor: COLOR.grey50
            }} onPress={() => {
                console.log(item);
                props.callback(item)
            }} >
                <Text style={{
                    fontSize: 20,
                    padding: 12,
                    fontFamily: 'Roboto'
                }} >{item}</Text>
            </TouchableOpacity>
        )
    }

    if (props.selected === undefined) {
        return (
            <View
                // onPress={() => callback(undefined)}
                style={{
                    backgroundColor: COLOR.grey50,
                    borderRadius: 20,
                    justifyContent: 'center',
                    // alignItems: 'center',
                    width: '90%',
                    margin: 7,
                    padding: 7,
                    alignSelf: 'center',
                    elevation: 7,
                    height: '80%'
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '100%'
                }} >
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 20,
                    }} >
                        select subMenu
                    </Text>
                    {/* <MaterialIcons size={30} name='arrow-drop-up' /> */}
                </View>

                <FlatList
                    data={subMenus}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={renderSubMenuItem}
                />
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                onPress={() => props.callback(undefined)}
                style={{
                    backgroundColor: COLOR.grey50,
                    borderRadius: 20,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '90%',
                    margin: 7,
                    padding: 7,
                    alignSelf: 'center',
                    elevation: 7,
                    flexDirection: 'row'
                }}
            >
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 20,
                }} >
                    {props.selected}
                </Text>
                <MaterialIcons size={30} name='arrow-drop-down' />
            </TouchableOpacity>
        )

    }
}