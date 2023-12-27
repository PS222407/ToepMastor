/* eslint-disable */
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const LobbyHost = ({hostRoom}) => {
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

                <View>
                    <Text style={{ marginBottom: 5, color: 'white' }}>
                        Optional *
                    </Text>
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
    );
};

export default LobbyHost;
