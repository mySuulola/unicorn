import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Navbar from "../component/Navbar";

const { width, height } = Dimensions.get("window");
class FingerPrint extends Component {
  static navigationOptions = {
    title: "Fingerprint Verification"
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          // height: height,
          backgroundColor: "rgba(0, 128, 0, 0.2)"
        }}
      >
        <Navbar
          onPressHome={() => this.props.navigation.navigate("Dashboard")}
        />
        <View
          style={{
            // flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
              color: "green",
              textAlign: "center"
            }}
          >
            Please place your
            <Text
              style={{
                fontSize: 30
              }}
            >
              {" "}
              INDEX{" "}
            </Text>
            finger on the reader{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "80%"
            }}
          >
            {/* <Text
            >Verify</Text> */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon name="md-refresh" size={30} color="rgba(8, 238, 27, 0.8)" />
              <Text
                style={{
                  marginLeft: 10
                }}
              >
                Refresh
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("DocumentRecognition")
              }
              style={{
                flexDirection: "row",
                alignItems: "center"
                // backgroundColor:"red",
                // paddingVertical: 3,
                // paddingHorizontal: 17,
                // borderWidth: 1,
                // borderColor:"white",
                // borderRadius: 10
              }}
            >
              <Icon
                name="md-fastforward"
                size={30}
                color="rgba(8, 238, 27, 0.8)"
              />
              <Text
                style={{
                  marginLeft: 5
                }}
              >
                Verify
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            // borderColor: "red",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 1,

              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../img/finger-trans.png")}
              style={{
                resizeMode: "center",
                height: 200
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              paddingVertical: 15
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-around"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon
                  name="md-checkmark-circle-outline"
                  size={30}
                  color="rgba(8, 238, 27, 0.8)"
                />
                <Text
                  style={{
                    marginLeft: 10
                  }}
                >
                  Index Finger{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon name="md-close" size={30} color="red" />
                <Text
                  style={{
                    marginLeft: 10
                  }}
                >
                  Baby Finger{" "}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-around",
                marginVertical: 5
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon
                  name="md-checkmark-circle-outline"
                  size={30}
                  color="rgba(8, 238, 27, 0.8)"
                />
                <Text
                  style={{
                    marginLeft: 10
                  }}
                >
                  Middle Finger{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon name="md-close" size={30} color="red" />
                <Text
                  style={{
                    marginLeft: 10
                  }}
                >
                  Thumb Finger{" "}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5
                }}
              >
                <Icon name="md-close" size={30} color="red" />
                <Text
                  style={{
                    marginLeft: 10
                  }}
                >
                  Ring Finger{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "rgba(52, 58, 52, 0.4)",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 23,
              textAlign: "center",
              paddingHorizontal: 20,
              paddingVertical: 10
            }}
          >
            Place your finger in the key then lift after you feel a vibration{" "}
          </Text>
        </View>
      </View>
    );
  }
}

export default FingerPrint;
