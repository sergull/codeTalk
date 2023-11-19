import React from "react";
import {View, Text} from "react-native"

const Messages = ({route}) => {

    const {item} = route.params;

    return(
        <View><Text>{item.room}</Text></View>
    )

}

export default Messages;

