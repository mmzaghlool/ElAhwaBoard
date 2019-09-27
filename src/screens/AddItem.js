import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Dimensions, View, TextInput, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Card } from '../components';
import { Snackbar, Toolbar, COLOR } from 'react-native-material-ui';
import { FlatList } from 'react-native-gesture-handler';
import { Overlay, Input } from "react-native-elements";
import ChooseSubMenu from './ChooseSubMenu';
import Item from '../components/Item';
import { Button, AddToSectionButton } from '../components/Button';
import { MAIN_COLOR } from '../common/Constants';
import firebase from 'react-native-firebase';
const { height } = Dimensions.get('window')


export default Menu = props => {
    const { key } = props.navigation.state.params;
    const [overlay, setOverlay] = useState(false)
    const toggleOverlay = () => setOverlay(!overlay)
    const [state, setState] = useState({
        name: '',
        description: '',
        price: '',
        checkList: [],
        radioButtons: []
    })

    const createNewSection = () => {
        const { name } = state;
        toggleOverlay();
    }

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
                <View>
                    <Input
                        autoFocus
                        placeholder='Section arbic name...'
                        onChangeText={name => setState({ ...state, name })}
                    />
                    <Button Text="Create section" onPress={createNewSection} />
                </View>
            </Overlay>
        )
    }

    const renderCheckList = () => {
        return (
            <View >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={styles.sectionHeader} >
                        Check list:
                    </Text>
                    <AddToSectionButton onPress={() => {
                        let { checkList } = state;
                        checkList.push({ name: '', price: '' })
                        setState({ ...state, checkList })
                    }} />
                </View>
                <FlatList
                    data={state.checkList}
                    extraData={state}
                    style={{ width: '100%' }}
                    renderItem={renderCheckListItem}
                    keyExtractor={(item, index) => `${index}`}
                />
            </View>
        )
    }

    const renderCheckListItem = ({ item, index }) => {
        return (
            <View style={styles.checkListItem} >
                {/* Name */}
                <TextInput
                    style={[{ flex: 2, }]}
                    placeholder='Name'
                    value={item.name}
                    underlineColorAndroid='grey'
                    keyboardType='default'
                    onChangeText={name => {
                        let { checkList } = state;
                        checkList[index].name = name;
                        setState({ ...state, checkList })
                    }}
                />

                {/* Addittional Price */}
                <TextInput
                    style={[{ flex: 1, }]}
                    underlineColorAndroid='grey'
                    placeholder='Addittional Price'
                    value={item.price}
                    keyboardType='numeric'
                    onChangeText={price => {
                        let { checkList } = state;
                        checkList[index].price = price;
                        setState({ ...state, checkList })
                    }}
                />
                <TouchableOpacity style={styles.deleteButton} onPress={() => {
                    let { checkList } = this.state;
                    let newCheckList = []
                    for (let i = 0; i < checkList.length; i++) {
                        const element = checkList[i];
                        if (i !== index) newCheckList.push(element)
                    }
                    setState({ ...state, checkList: newCheckList })
                }} >
                    <MaterialCommunityIcons name='close' size={17} color='white' />
                </TouchableOpacity>
            </View>
        )
    }

    const renderRadioButtons = () => {
        return (
            <View >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={styles.sectionHeader} >
                        Options list:
                    </Text>
                    <AddToSectionButton onPress={() => {
                        let { radioButtons } = state;
                        radioButtons.push({ name: '', price: '' })
                        setState({ ...state, radioButtons })
                    }} />
                </View>
                <FlatList
                    data={state.radioButtons}
                    extraData={state}
                    style={{ width: '100%' }}
                    renderItem={renderRadioButtonItem}
                    keyExtractor={(item, index) => `${index}`}
                />
            </View>
        )
    }

    const renderOptionItem = (item, optionIndex, itemIndex) => {
        return (
            <View style={styles.checkListItem}>

                {/* title */}
                <TextInput
                    style={[{ flex: 2, }]}
                    placeholder='Name'
                    value={item.name}
                    underlineColorAndroid='grey'
                    keyboardType='default'
                    onChangeText={name => {
                        let { radioButtons } = state;
                        console.log(radioButtons, itemIndex, optionIndex);
                        
                        radioButtons[itemIndex].options[optionIndex].name = name;
                        setState({ ...state, radioButtons })
                    }}
                />

                {/* Addittional Price */}
                <TextInput
                    style={[{ flex: 1, }]}
                    underlineColorAndroid='grey'
                    placeholder='Addittional Price'
                    value={item.price}
                    keyboardType='numeric'
                    onChangeText={price => {
                        let { radioButtons } = state;
                        radioButtons[itemIndex].options[optionIndex].price = price;
                        setState({ ...state, radioButtons })
                    }}
                />

                {/* Delete */}
                {/* <TouchableOpacity style={styles.deleteButton} onPress={() => {
                    let { radioButtons } = state;
                    let options = radioButtons[itemIndex].options
                    let newRadioButtonsOptions = []
                    for (let i = 0; i < options.length; i++) {
                        const element = options[i];
                        if (i !== optionIndex) newRadioButtonsOptions.push(element)
                    }
                    radioButtons[itemIndex].options = newRadioButtonsOptions
                    setState({ ...state, radioButtons })
                }} >
                    <MaterialCommunityIcons name='close' size={17} color='white' />
                </TouchableOpacity> */}
            </View>
        )
    }

    const renderRadioButtonItem = ({ item, index }) => {
        return (
            <View style={styles.radioListItem} >

                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '90%' }} >
                    {/* title */}
                    <TextInput
                        style={[{ flex: 2, }]}
                        placeholder='Name'
                        value={item.name}
                        underlineColorAndroid='grey'
                        keyboardType='default'
                        onChangeText={name => {
                            let { radioButtons } = state;
                            radioButtons[index].name = name;
                            setState({ ...state, radioButtons })
                        }}
                    />

                    <TouchableOpacity style={styles.deleteButton} onPress={() => {
                        let { radioButtons } = state;
                        let newRadioButtons = []
                        for (let i = 0; i < radioButtons.length; i++) {
                            const element = radioButtons[i];
                            if (i !== index) newRadioButtons.push(element)
                        }
                        setState({ ...state, radioButtons: newRadioButtons })
                    }} >
                        <MaterialCommunityIcons name='close' size={17} color='white' />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={[styles.sectionHeader, { fontSize: 18 }]} >
                        Options:
                    </Text>
                    <AddToSectionButton onPress={() => {
                        let { radioButtons } = state;
                        console.log(radioButtons);
                        let options = radioButtons[index].options ? radioButtons[index].options : []
                        console.log(options);

                        options.push({ name: '', price: '' });
                        radioButtons[index].options = options;
                        console.log(radioButtons);
                        setState({ ...state, radioButtons })
                    }} />
                </View>

                {/* Options */}
                <FlatList
                    data={state.radioButtons[index].options}
                    extraData={state}
                    style={{ width: '100%' }}
                    renderItem={(item, i) => renderOptionItem(item, item.index, index)}
                    keyExtractor={(item, index) => `${index}`}
                />

            </View>
        )
    }

    return (
        <>
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => props.navigation.pop()}
                centerElement={"Add Item"}
            />
            <ScrollView keyboardShouldPersistTaps='always' >
                {/* name */}
                <Input
                    autoFocus
                    shake
                    style={styles.input}
                    placeholder='Item arabic name...'
                    value={state.name}
                    keyboardType='default'
                    onChangeText={name => setState({ ...state, name })}
                />
                {/* Description */}
                <Input
                    style={styles.input}
                    placeholder='Item arabic Description...'
                    value={state.description}
                    keyboardType='default'
                    multiline
                    onChangeText={description => setState({ ...state, description })}
                />
                {/* Price */}
                <Input
                    style={styles.input}
                    placeholder='Item Price'
                    value={state.price}
                    keyboardType='numeric'
                    onChangeText={price => setState({ ...state, price })}
                />

                {/* Additions */}
                {renderCheckList()}
                {renderRadioButtons()}

                {/* Submit Button */}
                <Button Text='Submit' onPress={() => {
                    const { radioButtons, checkList, price, description, name } = state;
                    const itemLabel = `${key}-${name}` ; 
                    console.log("sss", itemLabel,  { radioButtons, checkList, price, description, name })
                    firebase.firestore().collection("items").doc(itemLabel).set({
                        radioButtons,
                        checkList,
                        price,
                        description,
                        name
                    }).then(res => console.log('res', res))
                    .catch(err => console.log('err', err))

                }} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        alignSelf: 'center',
        margin: 5,
        fontSize: 18,
        fontFamily: 'Roboto',
        flex: 1
    },
    sectionHeader: {
        // width: '90%',
        alignSelf: 'flex-start',
        margin: 5,
        marginTop: 10,
        fontSize: 22,
        fontFamily: 'Roboto',
        color: MAIN_COLOR
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 3,
        margin: 5,
        borderRadius: 25
    },
    checkListItem: {
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    radioListItem: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
})