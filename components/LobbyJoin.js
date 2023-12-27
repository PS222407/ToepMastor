/* eslint-disable */
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const LobbyJoin = ({joinRoom}) => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '30%', rowGap: 16}}>
                <TextInput
                    style={{
                        width: '100%',
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 4,
                        color: 'white',
                        padding: 8,
                    }}
                    placeholder="Username"
                    placeholderTextColor="gray"
                    onChangeText={(text) => setUser(text)}
                />

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
                <TouchableOpacity
                    onPress={() => joinRoom(user, room)}
                    disabled={!user || !room}
                    style={{
                        backgroundColor: !user || !room ? '#ccc' : 'blue',
                        padding: 10,
                        borderRadius: 4,
                    }}
                >
                    <Text style={{color: 'white', textAlign: 'center'}}>Join</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LobbyJoin;