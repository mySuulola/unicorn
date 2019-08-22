import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class Wallet extends Component {

  static navigationOptions = {
      title: "Wallet"
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{
          flex: 1,
          backgroundColor:"red"
        }} ></View>
        <View style={{
          flex: 2,
          backgroundColor:"green"
        }} >
        <Text> Amount Due </Text>
        <Text> $50 </Text>
        <View>
          <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            backgroundColor:'yellow'
          }}
          >
            <Text>Pay Via Card</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}

export default Wallet
