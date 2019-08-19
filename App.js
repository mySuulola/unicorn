/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
// } from 'react-native';


import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';
import Login from './src/guest/Login';
import Introduction from './src/guest/Introduction';
import SignUp from './src/guest/SignUp';

// import {Introduction, Login} from "./src/index";


class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }

};

// const DrawerStackGuest = createDrawerNavigator({
//     Introduction: createStackNavigator({ Introduction, Login }, {headerMode: "none"}),
//     // SignUp: createStackNavigator({ SignUp }),
//     // Login: createStackNavigator({ Verification, Login, Passcode, SetPasscode, Bio }, {headerMode: "none"})
//   }, {
//     initialRouteName: 'Introduction',
//   })

const guestStack = createStackNavigator({
    Introduction: Introduction,
    Login: Login,
    SignUp: SignUp
},
    {
        headerMode: "none"
    });
const AppContainer = createAppContainer(guestStack);


export default App;
