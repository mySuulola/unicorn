import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { Gravatar, GravatarApi } from "react-native-gravatar";
import Icon from "react-native-vector-icons/Ionicons";
// import { CheckBox } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const TextInputWithLabel = props => {
  return (
    <View
      style={{
        width: "100%",
        marginVertical: 10
      }}
    >
      <Text
        style={{
          color: "rgba(28, 173, 28, 0.6)"
        }}
      >
        {props.label}
      </Text>
      <TextInput
        style={{
          margin: 0,
          paddingVertical: 5,
          borderBottomWidth: 0.5,
          backgroundColor: "white",
          textAlign: "center"
        }}
        value={props.value}
        editable={false}
      />
    </View>
  );
};

class UserDetailOutput extends Component {
  static navigationOptions = {
    header: null,
    terms: false
  };

  handleConfirmDetails = () => {
    alert("Working on the payment page")
  }

  render() {
    // const { firstName, middleName, surname, phoneNumber, email } = this.props
    const firstName = "Oni";
    const surname = "Joshua";
    const phoneNumber = "07061972413";
    const email = "adetoye@gmail.com";
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={[
              styles.text,
              { textAlign: "center", fontSize: 20, marginBottom: 5 }
            ]}
          >
            User Information Summary
          </Text>
          {/* <Image source="" style={{
            width: 300,
            height:300,
            borderRadius: 100
          }} /> */}
          <TextInputWithLabel label="Full Name" value="Oni Joshua" />
          <TextInputWithLabel label="Date of Birth" value="17/05/1983" />
          <TextInputWithLabel label="Gender" value="Male" />
          <TextInputWithLabel label="Passport Number" value="A07654327" />

          {/* <CheckBox
  title="By clicking Confirm, you agree the information presented above is true and valid "
  checked={this.state.terms}
  checkedColor="green"
  onIconPress={() => this.setState({ terms: !this.state.terms })}
          /> */}

          <TouchableOpacity
            // disabled={!this.state.terms}
            onPress={this.handleConfirmDetails}
            style={{
              backgroundColor: "rgba(14, 180, 14, 0.9)",
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
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height - 73,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 5,
    paddingTop: 60,
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5
  },
  roundedProfileImage: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 50
  },
  text: {
    fontSize: 14,
    color: "rgba(8, 238, 27, 0.5)"
  },
  card: {
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: "rgb(250, 250, 250)"
  }
});

export default UserDetailOutput;
