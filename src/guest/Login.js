import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity

} from 'react-native'

class Login extends Component {


  state = {
    email: "",
    password: ""
  }


  componentDidMount() {

    this.refs.email.focus()

  }

  handleLogin = () => {
    if(this.state.email === "" || this.state.password === "") {
      alert("Log In details required")
    }

    this.props.navigation.navigate("Dashboard")

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
          // alignItems:"center"
        }} >
        <Text style={{
          fontSize: 30,
          color: "rgba(0,0,0,0.1)",
          marginBottom: 20
        }} > Login </Text>
        <TextInput
        ref="email"
        value={this.state.email}
        onChangeText={ (email)  => this.setState({ email }) }
        placeholder="Email Address"
        style={styles.input}
        keyboardType="email-address"
        // focusKeyboard={true}
        autoFocus={true}
        caretHidden={false}
        />
        <TextInput
        ref="password"
        value={this.state.password}
        onChangeText={ (password)  => this.setState({ password }) }
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        />
        <Text
        style={{
          fontSize: 12,
          paddingVertical: 4,
          paddingHorizontal: 10,
          color: "rgba(10, 65, 218, 0.7)"
        }}
        >Forgot Password</Text>


        <TouchableOpacity
        onPress={this.handleLogin}
        style={{
          backgroundColor:"rgba(14, 180, 14, 0.8)",
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
          >Login</Text>
        </TouchableOpacity>

        <Text
        onPress={ () => this.props.navigation.navigate("SignUp") }
        style={{
          fontSize: 13,
          marginTop: 20,
          color: "rgba(10, 65, 218, 0.7)",
          textAlign:"center"
        }}
        >Sign Up</Text>




        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 100,
    borderRightWidth: 100,
    borderTopColor: "#24911f",
    borderRightColor: "white",
    backgroundColor:"rgba(10, 218, 10, 0.3)"
  },
  input: {
    width: "90%",
    // height: 30,
    borderColor: "#24911f",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16
}
})

export default Login
