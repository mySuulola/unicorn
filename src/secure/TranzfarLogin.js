import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


class TranzfarLogin extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Image
        style={{
          width: 200,
          marginHorizontal: 20
        }}
        resizeMode="contain"
        source={require("../img/tranzfar.png")}
      />
    )
  });

  state = {
    email: "",
    password: ""
  };

  submitLogIn = async () => {
    try {
      alert("Processing payment page being worked on!");
    } catch (error) {
      alert(error.message);
    }
  };
  setDetails = (key, value) => {
    this.setState(state => {
      return {
        ...state,
        [key]: value
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 13,
            paddingVertical: 8,
            width: "100%",
            alignItems: "center",
            backgroundColor: "rgba(182, 183, 185, 0.8)"
          }}
        >
          <Icon
            size={30}
            style={{
              marginLeft: 25,
              marginRight: 10
            }}
            color="#1f6a7a"
            name="md-lock"
          />
          <Text
            style={{
              color: "#000",
              fontSize: 15
            }}
          >
            Login to authorize transaction
          </Text>
        </View>

        <TextInput
          style={styles.inputField}
          value={this.state.email}
          onChangeText={this.setDetails.bind(this, "email")}
          keyboardType={"email-address"}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.inputField}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={this.setDetails.bind(this, "password")}
          placeholder="Password"
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.submitLogIn}
        >
          <Text style={styles.buttonText}>Authorize Payment</Text>
        </TouchableOpacity>

        <View style={styles.rider}>
          <Text
            style={{
              marginTop: 10
            }}
          >
            Don't have an account? You can create one.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => alert("URL Redirect to Web Signup for Tranzfar")}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputField: {
    width: "100%",
    height: 42,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 2,
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 16
  },
  buttonContainer: {
    width: 240,
    backgroundColor: "#49add3",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 4,
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 24
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});

export default TranzfarLogin;
