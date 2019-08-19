import React, {Component} from "react";
import {
    View,
    ScrollView,
    Text, StyleSheet, TextInput} from "react-native";
import Flag from 'react-native-flags';

class Introduction extends Component{
    state = {

    };
    render(){
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.appNameArea}>
                    <Text style={{fontSize: 48, fontWeight: "bold", color: "#fff"}}>National ID</Text>
                    <View style={{marginVertical: 16, height: 5, backgroundColor: "#fff", maxWidth: 150, width: "30%"}} />
                    <Text style={{fontSize: 28, color: "#fff"}}>Are you a Nigerian Citizen but out of the country? Register and get your National Identity Number.</Text>
                </View>
                <View style={styles.buttonArea}>
                    <Text style={styles.buttonAreaText}>Register to get started</Text>
                    <View style={{flexDirection: "row", alignItems:"center"}}>
                        {/* <Flag
                            code="NG"
                            size={32}
                        /> */}
                        {/* <TextInput placeholder={"+234"} style={styles.countryCodeInput} /> */}
                        <TextInput
                        placeholder={"Email Address"}
                        onChangeText={ () => this.props.navigation.navigate("Login") }
                        style={styles.input} />
                    </View>
                </View>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appNameArea: {
        flex: 6,
        padding: 24,
        backgroundColor: "#24911f",
        borderBottomWidth: 100,
        borderRightWidth: 100,
        borderBottomColor: "white",
        borderRightColor: "transparent",
        justifyContent: "center",
    },
    buttonArea: {
        flex: 2,
        padding: 16,
    },
    buttonAreaText: {
        fontSize: 20,
        marginBottom: 24,
        color: "#5a5a5a",
    },
    countryCodeInput: {
        height: 50,
        marginRight: 8,
        color: "#000",
        borderColor: "#24911f",
        borderBottomWidth: 2,
        fontSize: 16,
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: "#24911f",
        borderBottomWidth: 1,
        paddingHorizontal: 16,
        fontSize: 16
    }
});
export default Introduction;