/* eslint-disable */
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SendMessage = ({connection}) => {
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        try{
            await connection.invoke("SendMessage", null, message);
        }catch (e){
            console.log('Message not sent', e);
        }

        setMessage('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="message..."
                    onChangeText={(text) => setMessage(text)}
                    value={message}
                />
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={sendMessage}
                    disabled={!message}
                >
                    <Text style={styles.sendButtonText}>send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    input: {
        flex: 1,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        marginRight: 5,
        color: 'black',
    },
    sendButton: {
        width: 50,
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: 'white',
    },
});

export default SendMessage;
