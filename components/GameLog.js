import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const GameLog = ({gameLog, toggleView, showOptions}) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarRef = useRef(null);
    const scrollViewRef = useRef();

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: false });
        }
    }, [gameLog]);

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
                    <Icon name="history" size={30} color="white" />
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
                            <SafeAreaView style={{ flex: 1 }}>
                                <ScrollView
                                    ref={scrollViewRef}
                                    style={styles.scrollView}
                                    onContentSizeChange={() => {
                                        scrollViewRef.current.scrollToEnd({ animated: false });
                                    }}
                                >
                                    {gameLog.map((log, logIndex) => (
                                        <View key={logIndex} style={{ marginLeft: 3, marginBottom: 4, marginTop: 4, flexDirection: 'row', flexWrap: 'wrap', width: 280 }}>
                                            {log.LogMessages.map((m, index) => (
                                                <View key={index} style={{ marginLeft: 1 }}>
                                                    <View style={{ borderRadius: 8}}>
                                                        <Text style={{ fontSize: 16, color: m.Type === 0 ? 'blue' : 'white' }}>
                                                            {m.Message}
                                                        </Text>
                                                    </View>
                                                </View>
                                            ))}
                                        </View>
                                    ))}
                                </ScrollView>
                            </SafeAreaView>
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

export default GameLog;