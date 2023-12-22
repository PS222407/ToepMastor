/* eslint-disable */
import React, { useState } from 'react';
import {View, TextInput, Button, TouchableOpacity, Text} from 'react-native';

const Lobby = ({ joinRoom }) => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '40%' }}>
                <View style={{ marginBottom: 16 }}>
                    <TextInput
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'white',
                            borderRadius: 4,
                            color: 'white',
                            padding: 8,
                        }}
                        placeholder="Name"
                        placeholderTextColor="gray"
                        onChangeText={(text) => setUser(text)}
                    />
                </View>
                <View style={{ marginBottom: 16 }}>
                    <TextInput
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: 'white',
                            borderRadius: 4,
                            color: 'white',
                            padding: 8,
                        }}
                        placeholder="Room"
                        placeholderTextColor="gray"
                        onChangeText={(text) => setRoom(text)}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => joinRoom(user, room)}
                    disabled={!user || !room}
                    style={{
                        backgroundColor: !user || !room ? '#ccc' : 'blue',
                        padding: 10,
                        borderRadius: 4,
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Join</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Lobby;
