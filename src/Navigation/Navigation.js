import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Regestration from "../screens/Regestration";
import ResetPassword from "../screens/ResetPassword";
import SideMenu from "../components/SideMenu";
import Sections from '../screens/Sections';
import SectionItems from '../screens/SectionItems';
import AddItem from '../screens/AddItem';
import PromoCodes from '../screens/PromoCodes';
import Progress from "../screens/Progress";
import Settings from "../screens/Settings";
import ChooseSubMenu from '../screens/ChooseSubMenu';
import Cart from '../screens/Cart';
import Details from '../screens/Details';
import Wallet from "../screens/Wallet";
import Payment from "../screens/Payment";

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Regestration: {
        screen: Regestration
    },
    ResetPassword: {
        screen: ResetPassword
    },
    Drawer: {
        screen: createDrawerNavigator({

            Home: {
                screen: Home
            },
            PromoCodes: {
                screen: PromoCodes
            },
            Progress: {
                screen: Progress
            },
            Settings: {
                screen: Settings
            },
            Wallet: {
                screen: Wallet
            },
            Payment: {
                screen: Payment
            },
        }, {
                contentComponent: ({ navigation }) => <SideMenu navigation={navigation} routes={SideMenu} />,
                headerMode: 'none',
                drawerPosition: 'left',
                overlayColor: 'transparent',
            })
    },
    Sections: {
        screen: Sections
    },
    SectionItems: {
        screen: SectionItems
    },
    AddItem: {
        screen: AddItem
    },
    ChooseSubMenu: {
        screen: ChooseSubMenu
    },
    Cart: {
        screen: Cart
    },
    Details: {
        screen: Details
    },
}, {
        headerMode: 'none'
    });

export default createAppContainer(AppNavigator);