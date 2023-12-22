/* eslint-disable */
import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Pressable, Alert, Modal
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const Settings = ({ leaveGame }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleSidebar = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{marginLeft: 20, marginTop: 20}} onPress={toggleSidebar}>
                <Icon name="settings" size={30} color="white"/>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={{flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 22,}}>
                    <View style={{margin: 20,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 35,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,}}>
                        <Text style={{marginBottom: 15, textAlign: 'center', color: 'black' }}>Are you sure you want to leave the game?</Text>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Pressable
                                style={{borderRadius: 10,
                                    padding: 10,
                                    borderColor: 'red', borderWidth: 2, backgroundColor: 'transparent', marginRight: 20, width: 90}}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{
                                    fontWeight: 'bold',backgroundColor: 'transparent', color: 'red',
                                    textAlign: 'center',}}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    borderRadius: 10,
                                    padding: 10,
                                    borderColor: 'red',
                                    borderWidth: 2,
                                    backgroundColor: 'red',
                                    width: 90,
                                }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    leaveGame();
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}>Leave
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
        color: 'white',
    },
});

export default Settings;
