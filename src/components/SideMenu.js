import React, { Fragment } from 'react';
import { Text, View } from "react-native";
import { Drawer, Avatar } from 'react-native-material-ui';
import { MAIN_COLOR } from '../common/Constants';

export default Home = (props) => {
    return (
        <Fragment>
            <Drawer >
                <Drawer.Header >
                    <Drawer.Header.Account
                        style={{
                            // container: { backgroundColor: MAIN_COLOR },
                        }}
                        avatar={<Avatar text="A" iconColor='white' style={{
                            // container: { backgroundColor: 'white', width: 65, height: 65, borderRadius: 38 }
                        }} />}
                        footer={{
                            dense: true,
                            centerElement: {
                                primaryText: 'Reservio',
                                secondaryText: 'business@email.com',
                            },
                            // rightElement: 'arrow-drop-down',
                        }}
                    />
                </Drawer.Header>
                <Drawer.Section
                    divider
                    items={[
                        { icon: 'home', value: 'Home', onPress: () => props.navigation.navigate('Home') },
                        { icon: 'card-giftcard', value: 'Menu', onPress: () => props.navigation.navigate('Sections') },
                        { icon: 'timeline', value: 'Progress', onPress: () => props.navigation.navigate('Progress') },
                        { icon: 'account-balance-wallet', value: 'Wallet', onPress: () => props.navigation.navigate('Wallet') }
                    ]}
                />
                <Drawer.Section
                    title="Personal"
                    items={[
                        { icon: 'info', value: 'Info', },
                        { icon: 'settings', value: 'Settings', onPress: () => props.navigation.navigate('Settings') },
                    ]}
                />
            </Drawer>
        </Fragment>
    );
};