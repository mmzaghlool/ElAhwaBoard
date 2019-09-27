import React, { Fragment, useEffect, useState } from 'react';
import { Text, Modal, Dimensions, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Card } from '../components';
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Overlay, Input } from "react-native-elements";
import ChooseSubMenu from './ChooseSubMenu';
import Item from '../components/Item';
import { Button, AddButton } from '../components/Button';
import firebase from 'react-native-firebase';
import { UID } from '../common/Constants';
const { height } = Dimensions.get('window')


export default SectionItems = props => {
    const { key, title } = props.navigation.state.params;

    const [overlay, setOverlay] = useState(false)
    const toggleOverlay = () => setOverlay(!overlay)
    const [items, setItems] = useState(undefined)
    const [state, setstate] = useState({
        name: ''
    })

    useEffect(async () => {
        await firebase.database().ref(`items/${UID}`).orderByChild('section').equalTo(key).on('value', snap => {
            setItems(snap.val());
        })

    }, [])

    const renderList = () => {

        if (!items) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 }} >
                    <Text style={{ fontSize: 22, textAlign: 'center' }} >No Items added yet ... add new section</Text>
                </View>
            )
        }
        const keys = Object.keys(items);
        const values = Object.values(items);
        return (
            <FlatList
                data={values}
                extraData={items}
                renderItem={({ item, index }) => <Item text={item} onPress={() => props.navigation.navigate('SectionItems', { title: item, key: keys[index] })} />}
                keyExtractor={(item, index) => `${index}`}
            />
        );
    }

    return (
        <>
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => props.navigation.pop()}
                centerElement={title}
            />
            <AddButton onPress={() => props.navigation.navigate('AddItem', { key })} />
            {renderList()}
        </>
    );
};
