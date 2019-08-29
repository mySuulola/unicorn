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
import ForgotPassword from './src/guest/ForgotPassword';
import SignUp from './src/guest/SignUp';
import Dashboard from './src/secure/Dashboard';
import Profile from './src/secure/Profile';
import UpdateProfile from './src/secure/UpdateProfile';
import FacialRecognition from './src/secure/FacialRecognition';
import EmailVerification from './src/guest/EmailVerification';
import FingerPrint from './src/secure/FingerPrint';
import Wallet from './src/secure/Wallet';
import ResetPassword from './src/guest/ResetPassword';
import UserDetailOutput from './src/secure/UserDetailOutput';
import DocumentRecognition from './src/secure/DocumentRecognition';
import TranzfarLogin from './src/secure/TranzfarLogin';



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
    FacialRecognition: FacialRecognition,
    FingerPrint: FingerPrint,
    EmailVerification: EmailVerification,
    ForgotPassword: ForgotPassword,
    Wallet: Wallet,
    ResetPassword: ResetPassword,
    EmailVerification: EmailVerification,
    UserDetailOutput: UserDetailOutput,
    DocumentRecognition: DocumentRecognition,
    TranzfarLogin: TranzfarLogin
  });
const AppContainer = createAppContainer(guestStack);


export default App;
