import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Flag from "react-native-flags";

class UpdateProfile extends Component {
  state = {
    firstName: "",
    lastName: "",
    middleNAme: "",
    email: "",
    phoneNumber: ""
  };

  componentDidMount() {
    this.setState({
      firstName: 'Oni',
      lastName: "Joshua",
      middleNAme: "Abidemi",
      email: "abidemi@gmail.com",
      phoneNumber: '07061972413'
    })
  }

  handleRegistration = () => {
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.phoneNumber === "" ||
      this.state.email === ""
    ) {
      return alert("Log In details required");

    }
    alert("To the Dashboard");
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "green",
            borderBottomWidth: 50,
            borderBottomColor: "white",
            borderRightColor: "green",
            borderRightWidth: 50
          }}
        />
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 20
              // alignItems:"center"
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "rgba(0,0,0,0.1)",
                marginBottom: 20
              }}
            >
              {" "}
              Update Profile{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TextInput
                value={this.state.firstName}
                onChangeText={firstName => this.setState({ firstName })}
                placeholder="First Name"
                style={[styles.input, { width: "50%" }]}
              />
              <TextInput
                value={this.state.lastName}
                onChangeText={lastName => this.setState({ lastName })}
                placeholder="Last Name"
                style={[styles.input, { width: "45%" }]}
              />
            </View>
            <TextInput
              value={this.state.middleNAme}
              onChangeText={middleNAme => this.setState({ middleNAme })}
              placeholder="Middle Name"
              style={styles.input}
            />

            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
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
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
            />
            <TextInput
              value={this.state.confirmPassword}
              onChangeText={confirmPassword =>
                this.setState({ confirmPassword })
              }
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={styles.input}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 60
              }}
            >
              <Flag code="NG" size={32} />
              <TextInput placeholder={"+234"} style={styles.countryCodeInput} />
              <TextInput
                value={this.state.phoneNumber}
                placeholder={"Phone Number"}
                onChangeText={phoneNumber => this.setState({ phoneNumber })}
                style={[styles.input, { width: "65%", height: 40 }]}
              />
            </View>

            <TouchableOpacity
              onPress={this.handleRegistration}
              style={{
                backgroundColor: "rgba(14, 180, 14, 0.8)",
                width: "80%",
                marginHorizontal: "10%",
                marginTop: 10,
                paddingVertical: 10,
                borderRadius: 10
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white"
                }}
              >
                Update Profile
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderColor: "#24911f",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16
  }
});

export default UpdateProfile;
