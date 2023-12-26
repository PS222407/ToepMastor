/* eslint-disable */
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Lobby = ({joinRoom}) => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');

    const getRandomChar = () => {
        const randomCharCode = Math.floor(Math.random() * 52);
        const baseCharCode = randomCharCode < 26 ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        return String.fromCharCode(baseCharCode + (randomCharCode % 26));
    }

    const generateRandomRoomCode = () => {
        let randomString = '';
        for (let i = 0; i < 5; i++) {
            randomString += getRandomChar();
        }
        return randomString;
    }

    const hostRoom = () => {
        const roomCode = generateRandomRoomCode();
        joinRoom(user, roomCode);
    }

    return (
        <View style={{ alignItems: 'center', gap: 30}}>
            <View style={{ width: '30%'}}>
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
            </View>

            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 16,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: 20, borderRadius: 10}}>
                <View style={{width: '30%', rowGap: 16}}>
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

                <Text style={{textAlign: 'center'}}>OR</Text>

                <View style={{width: '30%', rowGap: 16}}>
                    <TouchableOpacity
                        onPress={() => hostRoom(user, room)}
                        style={{
                            backgroundColor: 'green',
                            padding: 10,
                            borderRadius: 4,
                        }}
                    >
                        <Text style={{color: 'white', textAlign: 'center'}}>Host</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Lobby;
