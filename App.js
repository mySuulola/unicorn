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
import Dashboard from './src/secure/Dashboard';
import Profile from './src/secure/Profile';
import UpdateProfile from './src/secure/UpdateProfile';



class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }

};


const guestStack = createStackNavigator({
    Introduction: Introduction,
    Login: Login,
    SignUp: SignUp,
    Dashboard: Dashboard,
    Profile: Profile,
    UpdateProfile: UpdateProfile,
},
    {
        headerMode: "none"
    });
const AppContainer = createAppContainer(guestStack);


export default App;
