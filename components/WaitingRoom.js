/* eslint-disable */
import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import hostImage from '../images/host.png';

const WaitingRoom = ({ roomCode, users, startGame, connectedUser, removePlayer }) => {
    const usersLobby = ({ item }) => (
        <View style={{ flex: 1, margin: 8, maxWidth: '30%' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 6, alignItems: 'center' }}>
                    {item && item.IsHost ? <Image source={hostImage} style={{ width: 40, height: 40, marginRight: 6 }} /> : <View style={{ width: 40, height: 40 }} />}
                    <Text style={{color: 'black'}}>{item.Name}</Text>
                    {item && !item.IsHost && connectedUser.IsHost ?
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => removePlayer(item.Id)}>
                            <Text style={{color: 'red', fontSize: 30}}>X</Text>
                        </TouchableOpacity>
                    : <Text></Text>}
                </View>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingTop: 40 }}>
            <View style={{ width: '100%' }}>
                <View style={{ width: '100%'}}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>RoomCode:</Text>
                        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>{roomCode}</Text>
                    </View>
                </View>

                <FlatList
                    data={users}
                    renderItem={usersLobby}
                    keyExtractor={(item) => item.toString()}
                    numColumns={3}
                    contentContainerStyle={{ padding: 4, paddingTop: 20 }}
                />
            </View>

            <View style={{ paddingBottom: 10 }}>
                {connectedUser && connectedUser.IsHost ? (
                    <TouchableOpacity onPress={startGame} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}>
                        <Text style={{color: 'white'}}>Start Game</Text>
                    </TouchableOpacity>
                ) : (
                    <Text>Waiting for host...</Text>
                )}
            </View>
        </View>
    );
};

export default WaitingRoom;
