import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({placeholder}) => {

    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} placeholderTextColor="white" />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({

    container:{
        padding:10,
        margin:15,
        borderBottomWidth:1,
        borderColor:"white",

    },

})