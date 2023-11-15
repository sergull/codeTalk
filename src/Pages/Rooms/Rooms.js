import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FloatinButton from "../../Components/FloatinButton";
import ContentInput from "../../Components/modal/ContentInput";


const Rooms = () => {

    const [inputModalVisible, setInputModalVisible] = useState(false)

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible)
    }

    const handleSendContent = (content) => {
        console.log(content)
    }


    return (
        <View style={{backgroundColor:"white", flex:1}}>
         
            <FloatinButton name="plus" onPress={handleInputToggle}/>
            <ContentInput visible={inputModalVisible} onClose={handleInputToggle} onSend={handleSendContent}/>
        </View>

    )
}
export default Rooms;




