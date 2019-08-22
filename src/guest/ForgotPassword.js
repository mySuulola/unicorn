import React, { Component } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
 } from 'react-native'

class ForgotPassword extends Component {
  static navigationOptions = {
    title: "Forgot Password"
  };

  state = {
    email: "",
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
          marginBottom: 50
        }} > Forgot Password </Text>

        <Text style={{
          fontSize: 13,
          color: "rgba(0,0,0,0.6)",
        }} > Supply your email address </Text>

        <TextInput
        value={this.state.email}
        onChangeText={ (email)  => this.setState({ email }) }
        placeholder="Email address"
        keyboardType="email-address"
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
          >Send Reset Code</Text>
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

export default ForgotPassword
