import React, { Component } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
 } from 'react-native'

class EmailVerification extends Component {
  static navigationOptions = {
    title: "Email Verification"
  };

  state = {
    verificationCode: "",
  }
  handlePasswordReset = () => {
    this.props.navigation.navigate("ResetPassword")
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{
          width: "100%",
          height: 100,
          backgroundColor: "green",
          borderBottomWidth: 50,
          borderBottomColor: "white",
          borderRightColor: "green",
          borderRightWidth: 50,
        }}/>
        <View style={{
          flex: 1,
          justifyContent:"center",
          paddingHorizontal: 50
        }} >
        <Text style={{
          fontSize: 25,
          color: "rgba(0,0,0,0.1)",
          marginBottom: 30
        }} >Verify Email </Text>

        <Text style={{
          fontSize: 12,
          color: "rgba(0,0,0,0.6)",
        }} >Supply the Verification code sent to your email address </Text>

        <TextInput
        value={this.state.verificationCode}
        onChangeText={ (verificationCode)  => this.setState({ verificationCode }) }
        placeholder="Verification Code"
        keyboardType="numeric"
        style={styles.input}
        />

        <TouchableOpacity
        onPress={this.handlePasswordReset}
        style={{
          backgroundColor:"rgba(14, 180, 14, 0.9)",
          width: "80%",
          marginHorizontal: "10%",
          marginTop: 10,
          paddingVertical: 10,
          borderRadius: 10
        }}
        >
          <Text
          style={{
            textAlign:"center",
            color: "white"
          }}
          >Verify Email</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderColor: "#24911f",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15
}
})

export default EmailVerification
