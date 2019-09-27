import React, { Fragment, useEffect, useState } from 'react';
import { Text } from "react-native";
import { Header } from 'react-native-elements';
import { Card } from '../components';
import { Snackbar, Toolbar } from 'react-native-material-ui';
import { FlatList } from 'react-native-gesture-handler';


export default ChooseSubMenu = props => {
    const [state, setState] = useState({
        isVisible: true
    })

    const [cardsData, setCardsData] = useState({
        x2: {
            name: "Edit item",
            image: require('../images/Coffee.png'),
            key: 'x2',
            onPress: () => props.navigation.navigate('AddItem', { selected: item })
        },
        // x221321: {
        //     name: "Mos3ab",
        //     image: require('../images/Coffee.png'),
        //     key: 'x221321'
        // },
    })

    useEffect(() => {
        setTimeout(() => setState({ ...state, isVisible: false }), 2000)
    })

    return (
        <Fragment>
            <Toolbar
                leftElement="menu"
                onLeftElementPress={() => props.navigation.toggleDrawer()}
                centerElement="Select your coffee house"
            />

            <FlatList
                data={Object.values(cardsData)}
                renderItem={({ item }) => <Card text={item.name} image={item.image} 
                    onPress={item.onPress} />}
                keyExtractor={(item, index) => `${index}`}
            />

        </Fragment>
    );
};
