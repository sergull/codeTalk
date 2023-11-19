// MessageCard.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { formatDistance, parseISO } from 'date-fns';

const windowWidth = Dimensions.get('window').width;

const MessageCard = ({ sender, message, timestamp }) => {

    const formattedDate = formatDistance(parseISO(timestamp), new Date(), { addSuffix: true })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sender}>{sender}</Text>
                <Text style={styles.timestamp}>{formattedDate}</Text>
            </View>
            <View style={styles.messageBody}>
                <Text style={styles.messageText}>{message}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 10,
        padding: 15,
        width: windowWidth / 1.05

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sender: {
        fontSize: 16,
    },
    timestamp: {
        color: '#666',
    },
    messageBody: {},
    messageText: {
        fontSize: 17,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default MessageCard;
