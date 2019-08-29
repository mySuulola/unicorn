import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/Ionicons";
import Navbar from "../component/Navbar";

class FacialRecognition extends Component {
  static navigationOptions = {
    title: "Facial Recognition"
  };
  state = {
    pickedImage: null,
    buttonText: ""
  };

  processImage = () => {
    this.props.navigation.navigate("FingerPrint");
  };

  handleImagePicker = () => {
    const options = {
      title: "",
      cameraType: "front",
      quality: 1
    };

    ImagePicker.launchCamera(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        alert("Operation cancelled");
      } else if (response.error) {
        alert("Error uploading the image");
      } else {
        const source = { uri: response.uri };
        this.setState({ pickedImage: source });
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/*  */}
        <Navbar
          onPressHome={() => this.props.navigation.navigate("Dashboard")}
        />
        <View
          style={{
            width: "80%",
            height: "70%",
            borderRadius: 100
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(52, 58, 52, 0.1)",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this.state.pickedImage ? (
              <Image
                source={this.state.pickedImage}
                style={{
                  width: "100%",
                  height: "100%",
                  borderWidth: 5,
                  borderColor: "green"
                }}
              />
            ) : (
              <Icon
                onPress={this.handleImagePicker}
                name="md-camera"
                size={150}
                color="rgba(8, 238, 27, 0.8)"
              />
            )}
          </View>
          {this.state.pickedImage === null && (
            <View
              style={{
                paddingVertical: 15,
                marginTop: 50,
                paddingHorizontal: 10
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "green"
                }}
              >
                Click on the Icon above to capture your face
              </Text>
            </View>
          )}
          {this.state.pickedImage && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingVertical: 20
              }}
            >
              <Icon
                onPress={this.processImage}
                name="md-checkmark"
                size={40}
                color="rgba(8, 238, 27, 0.8)"
              />
              <Icon
                onPress={() => this.setState({ pickedImage: null })}
                name="md-close"
                size={40}
                color="red"
              />
            </View>
          )}
        </View>
        <Text> {this.state.buttonText} </Text>
      </View>
    );
  }
}

export default FacialRecognition;
