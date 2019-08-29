import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Flag from "react-native-flags";
import Icon from "react-native-vector-icons/Ionicons";


class Wallet extends Component {

  static navigationOptions = {
      title: "Wallet"
  };
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor:"rgba(197, 197, 197, 0.4)",
        justifyContent:"center",
        alignItems:"center"
        }}>
          <View
          style={{
            height: 20,
            width: "80%",
            paddingVertical: 40,
            // backgroundColor:"red",
            justifyContent:"center",
            marginVertical: 20,
            alignItems:"center"
          }}
          >
            <Text
            style={{
              fontSize: 30
            }}
            >Make Payment</Text>

          </View>

          <View
          style={{
            width: "80%",
            paddingVertical: 40,
            backgroundColor:"white",
            justifyContent:"center",
            marginVertical: 20,
            alignItems:"center",
            borderRadius: 10
          }}
          >
            <Text
            style={{
              paddingVertical: 20,
              fontSize: 25
            }}
            >Total Cost</Text>
            {/* <View
            style={{
              width:"80%",
              borderWidth: 0.6,
            }}
            /> */}
            <View
            style={{
              flexDirection:"row",
              alignItems:"center",

            }}
            >
              <View
              style={{
                height: 50,
                width: "40%",
                // backgroundColor:"red",
                padding: 10,
                alignItems:"center",
                justifyContent:"center"
              }}
              >
                <Flag code="NG" size={32} />
              </View>
              <View
              style={{
                height: 50,
                width: "60%",
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
                >N50,000</Text>

              </View>

            </View>

          </View>

          <TouchableOpacity
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
