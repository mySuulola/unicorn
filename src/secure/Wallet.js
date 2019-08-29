import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity } from 'react-native'
import Flag from "react-native-flags";
import Icon from "react-native-vector-icons/Ionicons";


class Wallet extends Component {

  static navigationOptions = {
      title: "Make Payment"
  };
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
        }}>
          <View
          style={{
            height: "30%",
            width: "100%",
            paddingVertical: 40,
            backgroundColor:"rgba(197, 197, 197, 0.4)",
            justifyContent:"center",
            // marginVertical: 20,
            alignItems:"center"
          }}
          >
          <Image
          source={require("../img/flagwave.png")}

          style={{
            width: "100%",
            resizeMode: "contain"
          }}
          />



          </View>

          <View
          style={{
            flex: 1,
            marginBottom: 60,
            backgroundColor:"white",
            justifyContent:"center",
            alignItems:"center",
          }}
          >
            <Text
            style={{
              paddingVertical: 20,
              color: "rgba(197, 197, 197, 0.7)",
              fontSize: 25,
            }}
            >Payment Description</Text>

            <Text
            style={{
              fontSize: 15,
              color: "rgba(28, 173, 28, 0.6)"
            }}
            >
              Name: Oni Joshua
            </Text>
            <Text
            style={{
              fontSize: 13,
              marginVertical:5,
              color: "rgba(28, 173, 28, 0.6)"
            }}
            >
              Transaction Type: NIN Registration
            </Text>

            <View
            style={{
              flexDirection:"row",
              alignItems:"center",

            }}
            >
              <View
              style={{
                height: 50,
                marginTop: 20,
                padding: 10,
                alignItems:"center",
                justifyContent:"center"
              }}
              >
                <Flag code="US" size={32} />
              </View>
              <View
              style={{
                height: 50,
                alignItems:"flex-end",
                paddingHorizontal: 20,
                justifyContent:"center"

                // backgroundColor:"green"
              }}
              >
                <Text
                style={{
                  textAlign:"center",
                  fontSize: 13,
                  color: "rgba(197, 197, 197, 0.7)"
                }}
                >Amount</Text>
                <Text
                style={{
                  textAlign:"center",
                  fontSize: 22,
                  fontWeight:"bold"
                }}
                >$150</Text>

              </View>

            </View>

          </View>

          <TouchableOpacity
          onPress={ () => this.props.navigation.navigate("TranzfarLogin") }


            style={{
              backgroundColor: "rgba(31, 60, 226, 0.8)",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              paddingVertical: 15,
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <Text
            style={{
              textAlign:"center",
              color:"white"
            }}
            >Make Payment Via Tranzfar</Text>
            <Icon
            name="md-arrow-round-forward"
            size={20}
            color="white"
            style={{
              marginLeft: 10
            }}
            />

          </TouchableOpacity>

       </View>
    )
  }
}

export default Wallet
