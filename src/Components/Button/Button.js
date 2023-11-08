import React from "react";
import { TouchableOpacity, View, ActivityIndicator, Text } from "react-native";
import styles from "./Button.style"

const Button = ({ text, onPress, loading, theme = "primary" }) => {

    return (
        <TouchableOpacity style={styles[theme].container}
            onPress={onPress} disabled={loading}
        >
            {loading ? (
                <ActivityIndicator color="white" />
            ) :
            (
                <View>
                    <Text style={styles[theme].text}>{text}</Text>
                </View>
            )
            }

        </TouchableOpacity>
    )
}

export default Button;
