import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"

const FloatingButton = ({onPress, name}) => { 

    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon name={name} size={27} color="white"  />
        </TouchableOpacity>
    )

}

export default FloatingButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFA33C",
        position:"absolute",
        bottom:30,
        right:20,
        borderRadius:50,
        width:60,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        
    }
})