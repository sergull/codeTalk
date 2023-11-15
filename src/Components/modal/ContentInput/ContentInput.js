import React, { useState } from "react";
import { StyleSheet, View, Dimensions,TextInput } from "react-native";
import Button from "../../Button/Button";
import Modal from "react-native-modal"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ContentInput = ({visible, onClose, onSend}) => {

    const [text, setText] = useState(null);

    function handleSend(){
        if(!text){
            return;
        }

        onSend(text);
        setText(null)
    }

    return (
        <Modal style={styles.modal} isVisible={visible} onSwipeComplete={onClose} swipeDirection="down" onBackdropPress={onClose} onBackButtonPress={onClose}>
            <View style={styles.container}>
                <TextInput style={styles.input} multiline placeholder="Oda adı..." onChangeText={setText} />
                <Button style={styles.button} onPress={handleSend} text="Ekle" />
            </View>
        </Modal>
    )

}

export default ContentInput;

const styles = StyleSheet.create({
    container: {
        height: windowHeight / 3,
        marginHorizontal:15,
        borderTopLeftRadius: 20,
         borderTopRightRadius: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor:"white"
    },

    input: {
        margin: 15
    },

    modal:{
        justifyContent:"flex-end",
        margin:0
    }
})