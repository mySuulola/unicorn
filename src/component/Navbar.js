import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


const Navbar = (props) => {
  const [show, showDropdown] = useState(false)

  return (
    <View
    style={{
      position: "absolute",
      paddingHorizontal: 5,
      paddingVertical: 7,
      top: 0,
      right: 0,
    }}
    >
      <View


>
<Icon
  onPress={()  => showDropdown(!show) }
  name="md-more"
  size={30}
  style={{
    paddingHorizontal: 20,
  }}
  // color="rgba(8, 238, 27, 0.8)"
  />
{ show &&  <View
style={{
  position: "absolute",
  top: 0,
  right: 0,
  marginRight: 20,
  marginTop: 10,
  width: 100,
  justifyContent:"center",
  alignItems:"center",
}}

>
    <Text
    onPress={props.onPressHome}
    style={{
      borderBottomWidth: 1,
      paddingHorizontal: 2,
      paddingVertical: 2,


    }}
    >Home</Text>
    {/* <Text
    style={{
      borderBottomWidth: 1,
      paddingHorizontal: 2,
      paddingVertical: 2,
      marginTop: 5



    }}
    >About</Text> */}


  </View>}

</View>
    </View>

  )
}

export default Navbar
