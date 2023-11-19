import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RoomCard = ({ text, onPress }) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )

}

export default RoomCard;

const styles = StyleSheet.create({
    container: {
        width: windowWidth / 2.2,
        height: windowHeight / 4.5,
        borderWidth: 1,
        margin:5,
        borderColor: "#e0e0e0",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 23,
        color: "#FFA33C",
        fontWeight: "600"
    }
})