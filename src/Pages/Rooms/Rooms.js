import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import FloatinButton from "../../Components/FloatinButton";
import ContentInput from "../../Components/modal/ContentInput";
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import parseContentData from "../../utils/parseContentData";
import RoomCard from "../../Components/RoomCard";
import { showMessage } from "react-native-flash-message";


const Rooms = ({navigation}) => {

    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [contentList, setContentList] = React.useState([]);

    //fetch data
    useEffect(() => {
        database()
            .ref("rooms/")
            .on("value", snapshot => {
                const contentData = snapshot.val();
                //db'de veri yoksa hata kontrolü
                if(!contentData){
                    return;
                }
                const parsedData = parseContentData(contentData || {});
                setContentList(parsedData);
                console.log(parsedData);
            })
    }, [])


    

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible)
    }

    //ekle butonuna basınca datayı db'ye pushla
    const handleSendContent = (content) => {
        handleInputToggle();
        sendContent(content);
        showMessage({
            message: 'Oda Oluşturuldu',
            type: 'success',
          });
    }

    //push db
    const sendContent =  (content) => {

        const userMail = auth().currentUser.email;

        //db'ye atmadan önce atılacakları bir obje şeklinde tutmak
        const contentObj = {
            room: content,
            username: userMail.split("@")[0],
            date: new Date().toISOString(),
        };

        database().ref("rooms/").push(contentObj)

    }

    const handleCard = (item) => {
        navigation.navigate("MessagePage", {item})
    }

    const renderContent = ({ item }) => {
        return <RoomCard text={item.room} onPress={()=>handleCard(item)}/>;
    }

    return (
        <View style={{ backgroundColor: "white", flex: 1, alignItems:"center",}}>
            <FlatList data={contentList}  renderItem={renderContent} numColumns="2"/>
            <FloatinButton name="plus" onPress={handleInputToggle} />
            <ContentInput visible={inputModalVisible} onClose={handleInputToggle} onSend={handleSendContent} />
        </View>

    )
}

export default Rooms;




