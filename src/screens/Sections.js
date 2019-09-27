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


export default Menu = props => {

    const [overlay, setOverlay] = useState(false)
    const toggleOverlay = () => setOverlay(!overlay)
    const [sections, setSections] = useState(undefined)
    const [state, setstate] = useState({
        name: ''
    })

    const createNewSection = () => {
        const { name } = state;
        toggleOverlay();
        firebase.database().ref(`sections/${UID}`).push(name.trim());
    }

    useEffect(async () => {
        await firebase.database().ref(`sections/${UID}`).on('value', snap => {
            setSections(snap.val());
        })

    }, [])

    const renderOverlay = () => {
        return (
            <Overlay
                animated={true}
                animationType='fade'
                windowBackgroundColor='rgba(0,0,0,0.5)'
                overlayBackgroundColor='white'
                isVisible={overlay}
                onRequestClose={toggleOverlay}
                width='75%'
                height='50%'
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Input
                        autoFocus
                        placeholder='Section arabic name...'
                        onChangeText={name => setstate({ ...state, name })}
                    />
                    <Button Text="Create section" onPress={createNewSection} />
                </View>
            </Overlay>
        )
    }

    const renderList = () => {

        if (!sections) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 }} >
                    <Text style={{ fontSize: 22, textAlign: 'center' }} >No sections added yet ... add new section</Text>
                </View>
            )
        }
        const keys = Object.keys(sections);
        const values = Object.values(sections);
        return (
            <FlatList
                data={values}
                extraData={sections}
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
                centerElement={"Sections"}
            />
            {renderOverlay()}
            <AddButton onPress={toggleOverlay} />
            {renderList()}
        </>
    );
};
