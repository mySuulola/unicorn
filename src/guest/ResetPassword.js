import React, { Component } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
 } from 'react-native'

class ResetPassword extends Component {
  static navigationOptions = {
    title: "Reset Password"
  };

  state = {
    resetCode: "",
    password: "",
    confirmPassword: ""
  }

  handleReset = () => {
    alert("Password Reset")
    this.props.navigation.navigate("Login")
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
          fontSize: 23,
          fontWeight: "bold",
          color: "rgba(0,0,0,0.1)",
          marginBottom: 20
        }} > Reset Password </Text>

        <TextInput
        value={this.state.resetCode}
        onChangeText={ (resetCode)  => this.setState({ resetCode }) }
        placeholder="Reset Code"
        keyboardType="number-pad"
        style={styles.input}
        />

        <TextInput
        value={this.state.password}
        onChangeText={ (password)  => this.setState({ password }) }
        placeholder="New Password"
        style={styles.input}
        secureTextEntry={true}
        />

        <TextInput
        value={this.state.confirmPassword}
        onChangeText={ (confirmPassword)  => this.setState({ confirmPassword }) }
        placeholder="Confirm New Password"
        style={styles.input}
        secureTextEntry={true}
        />

        <TouchableOpacity
        onPress={this.handleReset}
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
          >Reset Password</Text>
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
    paddingHorizontal: 0,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15
}
})

export default ResetPassword
