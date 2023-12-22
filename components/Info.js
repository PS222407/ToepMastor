import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import cardImages from "./CardImages";

const Info = ({connection, game, users, connectedUser, messages, toggleView, showOptions}) => {
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
                <TouchableOpacity style={{marginLeft: 20, marginTop: 20}} onPress={toggleSidebar}>
                    <Icon name="info-outline" size={30} color="white"/>
                </TouchableOpacity>
            )}

            {sidebarVisible && (
                <View style={styles.sidebar}>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={toggleSidebar}>
                            <Text style={{padding: 10, paddingHorizontal: 15, fontSize: 20, color: 'white'}}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}>
                        <SafeAreaView style={{flex: 1}}>
                            <ScrollView style={{height: 100}}>
                                <View>
                                    <Text style={{color: 'white', fontSize: 20}}>Gameplay</Text>
                                    <Text style={{fontSize: 11, marginTop: 15, color: 'white', width: 240}}>
                                        In the game, the player to the left of the dealer leads. Players must follow
                                        suit. The card order from high to low is ten, nine, eight, seven, ace, king,
                                        queen, jack.
                                        The player winning the last trick wins the game. Others receive points based on
                                        the number of times they "toepen." The number of tricks won doesn't matter, only
                                        winning the last one does.
                                    </Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <Text style={{color: 'white', fontSize: 20}}>Laundry</Text>
                                    <Text style={{fontSize: 11, marginTop: 15, color: 'white', width: 240}}>
                                        Each player has the right to inspect this laundry. A player who inspects turns
                                        the laundry cards face up and shows them to all participants. If the cards do
                                        not meet the requirements for dirty or white laundry, the owner receives a
                                        penalty point. If the cards are indeed dirty or white laundry, the person
                                        inspecting the laundry earns a point, and the owner can continue playing with a
                                        new hand.
                                    </Text>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <Text style={{color: 'white', fontSize: 20}}>Dirty laundry</Text>
                                    <View style={{flex: 1, flexDirection: 'row', width: 200, marginTop: 15}}>
                                        <Image
                                            style={{flex: 1, height: 60}}
                                            source={cardImages['KingSpades']}
                                            resizeMode="contain"
                                        />
                                        <Image
                                            style={{flex: 1, height: 60}}
                                            source={cardImages['JackHearts']}
                                            resizeMode="contain"
                                        />
                                        <Image
                                            style={{flex: 1, height: 60}}
                                            source={cardImages['QueenClubs']}
                                            resizeMode="contain"
                                        />
                                        <Image
                                            style={{flex: 1, height: 60}}
                                            source={cardImages['SevenDiamonds']}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <Text style={{fontSize: 11, marginTop: 15, color: 'white', width: 240}}>Dirty
                                        laundry occurs when a player has ONE 7 and THREE face cards.</Text>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <Text style={{color: 'white', fontSize: 20}}>White laundry</Text>
                                    <View style={{flex: 1, flexDirection: 'row', width: 200, marginTop: 15}}>
                                        <Image
                                            style={{flex: 1, height: 60}}
                                            source={cardImages['QueenHearts']}
                                            resizeMode="contain"
                                        />
                                        <Image
                                            style={{flex: 1, height: 60}}
                                            source={cardImages['KingDiamonds']}
                                            resizeMode="contain"
                                        />
                                        <Image
                                            style={{flex: 1, height: 60}}
                                            source={cardImages['JackClubs']}
                                            resizeMode="contain"
                                        />
                                        <Image
                                            style={{flex: 1, height: 60}}
                                            source={cardImages['AceSpades']}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <Text style={{fontSize: 11, marginTop: 15, color: 'white', width: 240}}>White
                                        laundry occurs when a player has FOUR face cards.</Text>
                                </View>
                                <View style={{marginTop: 20, marginBottom: 20}}>
                                    <Text style={{color: 'white', fontSize: 20}}>Knock</Text>
                                    <Text style={{fontSize: 11, marginTop: 15, color: 'white', width: 240}}>
                                        If a player has good cards and expects to win the final trick (and thereby the
                                        round),
                                        they can always call 'knock' when it is their turn to play.
                                    </Text>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
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

export default Info;