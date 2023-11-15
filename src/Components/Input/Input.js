import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({placeholder, value, onType, isSecure}) => {

    return (
        <View style={styles.container}>
            <TextInput autoCapitalize="none" placeholder={placeholder} placeholderTextColor="white" 
            value={value} onChangeText={onType} secureTextEntry={isSecure} />
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