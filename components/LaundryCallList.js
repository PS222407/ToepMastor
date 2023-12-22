import {TouchableOpacity, View, Text} from "react-native";

const LaundryCallList = ({ game, turnLaundry }) => {
    return (
        <View>
            <View>
                {game && game.Players && game.Players[1] && (game.Players[1].CalledWhiteLaundry || game.Players[1].CalledDirtyLaundry) && game.State === "WaitingForLaundryTurnCalls" && (
                    <View style={{
                        position: 'absolute',
                        width: 100,
                        height: 50,
                        left: 80,
                        top: 290,
                        zIndex: 50
                    }}>
                        <TouchableOpacity
                            style={{ backgroundColor: 'red', borderRadius: 5, height: 30, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => turnLaundry(game.Players[1].Id)}
                        >
                            <Text style={{ color: 'white' }}>Turn?</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <View>
                {game && game.Players && game.Players[2] && (game.Players[2].CalledWhiteLaundry || game.Players[2].CalledDirtyLaundry) && game.State === "WaitingForLaundryTurnCalls" && (
                    <View style={{
                        position: 'absolute',
                        width: 100,
                        height: 50,
                        left: 80,
                        top: 140,
                        zIndex: 50
                    }}>
                        <TouchableOpacity
                            style={{ backgroundColor: 'red', borderRadius: 5, height: 30, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => turnLaundry(game.Players[2].Id)}
                        >
                            <Text style={{ color: 'white' }}>Turn?</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <View>
                {game && game.Players && game.Players[3] && (game.Players[3].CalledWhiteLaundry || game.Players[3].CalledDirtyLaundry) && game.State === "WaitingForLaundryTurnCalls" && (
                    <View style={{
                        position: 'absolute',
                        width: 100,
                        height: 50,
                        left: '58%',
                        top: 20,
                        zIndex: 50
                    }}>
                        <TouchableOpacity
                            style={{ backgroundColor: 'red', borderRadius: 5, height: 30, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => turnLaundry(game.Players[3].Id)}
                        >
                            <Text style={{ color: 'white' }}>Turn?</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <View>
                {game && game.Players && game.Players[4] && (game.Players[4].CalledWhiteLaundry || game.Players[4].CalledDirtyLaundry) && game.State === "WaitingForLaundryTurnCalls" && (
                    <View style={{
                        position: 'absolute',
                        width: 100,
                        height: 50,
                        left: 635,
                        top: 140,
                        zIndex: 50
                    }}>
                        <TouchableOpacity
                            style={{ backgroundColor: 'red', borderRadius: 5, height: 30, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => turnLaundry(game.Players[4].Id)}
                        >
                            <Text style={{ color: 'white' }}>Turn?</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <View>
                {game && game.Players && game.Players[5] && (game.Players[5].CalledWhiteLaundry || game.Players[5].CalledDirtyLaundry) && game.State === "WaitingForLaundryTurnCalls" && (
                    <View style={{
                        position: 'absolute',
                        width: 100,
                        height: 50,
                        left: 635,
                        top: 290,
                        zIndex: 50
                    }}>
                        <TouchableOpacity
                            style={{ backgroundColor: 'red', borderRadius: 5, height: 30, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => turnLaundry(game.Players[5].Id)}
                        >
                            <Text style={{ color: 'white' }}>Turn?</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

export default LaundryCallList;