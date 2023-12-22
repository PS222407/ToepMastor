import React, { useEffect, useRef } from 'react';
import {ScrollView, View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const MessageContainer = ({ messages, connectedUser }) => {
    const scrollViewRef = useRef();

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: false });
        }
    }, [messages]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                onContentSizeChange={() => {
                    scrollViewRef.current.scrollToEnd({ animated: false });
                }}
            >
                {messages.map((m, index) => (
                    <View
                        key={index}
                        style={[
                            styles.message,
                            {
                                flex: 1,
                                justifyContent: m.sender === connectedUser.Name ? 'flex-end' : 'flex-start',
                            },
                        ]}
                    >
                        <View
                            style={[
                                styles.messageBubble,
                                {
                                    justifyContent: m.sender === connectedUser.Name ? 'flex-start' : 'flex-end',
                                    backgroundColor: m.sender === connectedUser.Name ? 'blue' : '#202C33',
                                },
                            ]}
                        >
                            <View>
                                <View>
                                    <Text style={{color: 'white'}}>{m.sender}</Text>
                                </View>
                                <View>
                                    <Text style={styles.messageText}>{m.message}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 20,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 2,
    },
    text: {
        fontSize: 42,
    },

    message: {
        flexDirection: 'row',
        paddingTop: 2,
        paddingRight: 5,
    },
    messageBubble: {
        backgroundColor: '#51616c',
        color: 'white',
        padding: 4,
        maxWidth: '80%',
        overflow: 'hidden',
        borderRadius: 8,
    },
    senderName: {
        flex: 1,
        justifyContent: 'flex-start',
        fontSize: 12,
    },
    messageText: {
        color: 'white',
        fontSize: 16,
        borderRadius: 8,
    },
});

export default MessageContainer;