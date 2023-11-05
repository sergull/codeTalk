import { StyleSheet } from "react-native"

const base_styles = StyleSheet.create({

    container: {
        padding: 10,
        margin: 15,
        borderWidth: 1,
        backgroundColor: "#FFA33C",
        alignItems: "center",
        borderColor: "#FFA33C",
        borderRadius: 10


    },

    text: {
        fontSize: 18,
        fontWeight: "600",

    }

})

export default {
    primary: StyleSheet.create({
        ...base_styles,
        container: {
            ...base_styles.container,
            backgroundColor: "#FFA33C",
        },
        text: {
            ...base_styles.text,

            color: "white",

        }
    }),

    secondary: StyleSheet.create({
        ...base_styles,
        container: {
            ...base_styles.container,
            backgroundColor: "white",
        },
        text: {
            ...base_styles.text,
            color: "#FFA33C",

        }
    })
}