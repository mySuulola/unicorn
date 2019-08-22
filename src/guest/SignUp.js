import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet } from 'react-native'
import Flag from 'react-native-flags';


class SignUp extends Component {
  static navigationOptions = {
    header: null,
};


  state = {
    firstName:"",
    lastName:"",
    middleNAme:"",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  }

  handleRegistration = () => {
    // if(
    //   this.state.firstName === "" ||
    //   this.state.lastName === "" ||
    //   this.state.password === "" ||
    //   this.state.confirmPassword === "" ||
    //   this.state.phoneNumber === "" ||
    //   this.state.email === "" ||
    //   this.state.password === "") {
    //   alert("Log In details required")
    //   return;
    // }
    this.props.navigation.navigate("EmailVerification")

  }



  render() {
    return (
      <View style={{
        flex: 1,
        borderLeftWidth: 40,
        borderLeftColor:"green",
        // borderTopLeftRadius: 190
        }}>
        <View style={{
          width: "100%",
          height: 100,
          backgroundColor: "green",
          borderBottomWidth: 50,
          borderBottomColor: "white",
          borderRightColor: "green",
          borderRightWidth: 50,
        }}/>
      <ScrollView>
        <View style={{
          flex: 1,
          justifyContent:"center",
          paddingHorizontal: 20
          // alignItems:"center"
        }} >
        <Text style={{
          fontSize: 30,
          color: "rgba(0,0,0,0.1)",
          marginBottom: 20
        }} > Register </Text>
        <View
        style={{
          flexDirection:"row",
          justifyContent:"space-between"
        }}

        >
        <TextInput
        value={this.state.firstName}
        onChangeText={ (firstName)  => this.setState({ firstName }) }
        placeholder="First Name"
        style={[styles.input, {width: "50%"}]}
        />
        <TextInput
        value={this.state.lastName}
        onChangeText={ (lastName)  => this.setState({ lastName }) }
        placeholder="Last Name"
        style={[styles.input, {width: "45%"}]}
        />

        </View>
        <TextInput
        value={this.state.middleNAme}
        onChangeText={ (middleNAme)  => this.setState({ middleNAme }) }
        placeholder="Middle Name"
        style={styles.input}
        />

        <TextInput
        value={this.state.email}
        onChangeText={ (email)  => this.setState({ email }) }
        placeholder="Email Address"
        style={styles.input}
        keyboardType="email-address"
        />
        {/* <TextInput
        value={this.state.confirmEmail}
        onChangeText={ (confirmEmail)  => this.setState({ confirmEmail }) }
        placeholder="Confirm Email Address"
        style={styles.input}
        keyboardType="email-address"
        /> */}
        <TextInput
        value={this.state.password}
        onChangeText={ (password)  => this.setState({ password }) }
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        />
        <TextInput
        value={this.state.confirmPassword}
        onChangeText={ (confirmPassword)  => this.setState({ confirmPassword }) }
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={styles.input}
        />
        <View style={{
          flexDirection: "row",
          alignItems:"center",
          height: 60

          }}>
          <Flag code="NG" size={32} />
           <TextInput placeholder={"+234"} style={styles.countryCodeInput} />
            <TextInput
            value={this.state.phoneNumber}
            placeholder={"Phone Number"}
            onChangeText={ (phoneNumber)  => this.setState({ phoneNumber }) }
            style={[styles.input, {width: "65%", height: 40 }]}
            />
         </View>



        <TouchableOpacity
        onPress={this.handleRegistration}
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
          >Register</Text>
        </TouchableOpacity>

        <Text
        onPress={ () => this.props.navigation.navigate("Login") }
        style={{
          fontSize: 13,
          marginTop: 20,
          color: "rgba(10, 65, 218, 0.7)",
          textAlign:"center"
        }}
        >Login instead</Text>




        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    // height: 30,
    borderColor: "#24911f",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16
}
})

export default SignUp
