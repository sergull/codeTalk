import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ContentInput from "../../Components/modal/ContentInput";
import parseContentData from "../../utils/parseContentData";
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import FloatinButton from "../../Components/FloatinButton";
import MessageCard from "../../Components/Cards/MessageCard";

const Messages = ({ route }) => {

    const { item } = route.params;
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [contentList, setContentList] = React.useState([]);

    //fetch data
    useEffect(() => {
        database()
            .ref(`rooms/${item.id}/messages`)
            .on("value", snapshot => {
                const contentData = snapshot.val();
                //db'de veri yoksa hata kontrolü yaparak boş veri gönderme
                const parsedData = parseContentData(contentData || {});
                setContentList(parsedData);
                console.log(parsedData);
            })
    }, [])

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible)
    }

    //gönder butonuna basınca datayı db'ye pushla
    const handleSendContent = (content) => {
        handleInputToggle();
        sendContent(content);
    }

    //push db
    const sendContent = (content) => {

        const userMail = auth().currentUser.email;

        //db'ye atmadan önce atılacakları bir obje şeklinde tutmak
        const contentObj = {
            text: content,
            username: userMail.split("@")[0],
            date: new Date().toISOString(),
        };

        database().ref(`rooms/${item.id}/messages`).push(contentObj)

    }

    const renderContent = ({ item }) => {
        return <MessageCard sender={item.username} timestamp={item.date} message={item.text}  />
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ color: "white" }}>{item.room} odası kuruldu!</Text>
            </View>
            <FlatList data={contentList} renderItem={renderContent}/>
            <FloatinButton name="plus" onPress={handleInputToggle} />
            <ContentInput visible={inputModalVisible} onClose={handleInputToggle} onSend={handleSendContent} buttonText="Gönder" />

        </View>
    )

}

export default Messages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFB000"
    },
    title: {
        borderWidth: 1,
        borderColor: "white",
        borderStyle: "dotted",
        alignItems: "center",
        margin: 10,
        padding: 10,
        borderRadius: 10

    }
})