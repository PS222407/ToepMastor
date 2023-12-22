/* eslint-disable */
import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SendMessage from "./SendMessage";
import MessageContainer from "./MessageContainer";
import Icon from "react-native-vector-icons/MaterialIcons";

const Chat = ({connection, game, users, connectedUser, messages, toggleView, showOptions}) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        toggleView();
        setSidebarVisible(!sidebarVisible);
    };

    const closeSidebar = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setSidebarVisible(false);
        }
        toggleView();
    };

    return (
        <View style={styles.container}>
            {!sidebarVisible && showOptions && (
                <TouchableOpacity style={{ marginLeft: 20, marginTop: 20 }} onPress={toggleSidebar}>
                    <Icon name="chat-bubble" size={30} color="white" />
                </TouchableOpacity>
            )}

            {sidebarVisible && (
                <View style={styles.sidebar}>
                    <View style={{ flex: 1 }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{  }} onPress={toggleSidebar}>
                                <Text style={{padding: 10, paddingHorizontal: 15, color: 'white', fontSize: 20 }}>X</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexGrow: 1 }}>
                            <MessageContainer messages={messages} users={users} connectedUser={connectedUser} />
                        </View>

                        <View style={{ height: 60, marginTop: 15 }}>
                            <View>
                                <SendMessage connection={connection} />
                            </View>
                        </View>
                    </View>

                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
    },
    sidebar: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
    },
    item: {
        padding: 10,
        color: 'white',
    },
    mainContent: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
});

export default Chat;
