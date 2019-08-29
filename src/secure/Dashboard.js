import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Gravatar, GravatarApi } from "react-native-gravatar";

const { width, height } = Dimensions.get("window");

class Dashboard extends Component {
  static navigationOptions = {
    header: null,
};
  render() {
    const email = "adetoye@gmail.com";
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#24911f",
            height: 170
          }}
        />
        <View
          style={{
            backgroundColor: "white",
            height: 170,
           marginHorizontal: '10%',
            position: "absolute",
            top: 80,
            left: 30,
            right: 30,
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",

            borderWidth: 1,
            borderColor: "#ddd",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 10,
            backgroundColor: "rgb(250, 250, 250)"
          }}
        >
          <Gravatar
            options={{
              email: email,
              parameters: { size: "200", d: "mm" },
              secure: true
            }}
            style={styles.roundedProfileImage}
          />
          <Text
            style={{
              color: "rgba(0, 3, 0, 0.4)",
              paddingVertical: 10
            }}
          >
            Welcome Oni Joshua
          </Text>
          <Text
          //
          onPress={ () => this.props.navigation.navigate("FacialRecognition") }
            style={{
              color: "rgba(8, 96, 238, 0.5)",
              marginBottom: 5
            }}
          >
            Proceed to Facial Recognition
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            justifyContent: "space-around",
            // alignItems:"center",
            width: "100%",
            height: 40
          }}
        >
          <TouchableOpacity
          onPress={ () => alert("an about page") }
          style={{
              flex: 1,
              borderWidth: 0.6,
              borderColor: "rgba(75, 75, 75, 0.8)"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                paddingTop: 10
              }}
            >
              About
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.props.navigation.navigate("Profile") }
            style={{
              flex: 1,
              borderWidth: 0.6,
              borderColor: "rgba(75, 75, 75, 0.8)"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                paddingTop: 10
              }}
            >
              Profile
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
           onPress={ () => this.props.navigation.navigate("Wallet") }
            style={{
              width: width / 3,
              borderWidth: 0.6,
              borderColor: "rgba(75, 75, 75, 0.8)"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                paddingTop: 10
              }}
            >
              Wallet
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
          onPress={ () => this.props.navigation.navigate("Introduction") }
            style={{
              flex: 1,
              borderWidth: 0.6,
              borderColor: "rgba(75, 75, 75, 0.8)"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                paddingTop: 10
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roundedProfileImage: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 50
  }
});

export default Dashboard;
