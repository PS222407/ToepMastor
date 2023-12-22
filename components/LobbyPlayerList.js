import {Text, View} from "react-native";
import PlayerCalls from "./PlayerCalls";
import PlayerCallsTop from "./PlayerCallsTop";

const LobbyPlayerList = ({game}) => {
    return (
        <View>
            <View style={{
                position: 'absolute',
                left: '43%',
                width: 'auto',
                zIndex: 50,
            }}>
                {game && game.Players[0] && (
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: 5,
                        width: 120,
                        height: 50,
                        zIndex: 50,
                        top: 315,
                        borderWidth: 2,
                        borderColor: game.Players[0].IsActive
                            ? 'yellow'
                            : 'white',
                        borderRadius: 5
                    }}>
                        <Text style={{ color: 'white', fontSize: 12, width: 70 }}>{game.Players[0].Name}</Text>
                        <Text style={{ color: 'white', backgroundColor: 'red', width: 30, borderRadius: 5, height: 30, textAlign: 'center', textAlignVertical: 'center' }}>
                            {game.Players[0].PenaltyPoints}
                        </Text>
                        <PlayerCalls player={game.Players[0]} />
                    </View>
                )}
            </View>

            <View>
                {game && game.Players[1] && (
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: 5,
                        width: 120,
                        height: 50,
                        zIndex: 50,
                        left: 80,
                        top: 230,
                        borderWidth: 2,
                        borderColor: game.Players[1].IsActive
                            ? 'yellow'
                            : 'white',
                        borderRadius: 5
                    }}>
                        <Text style={{ color: 'white', fontSize: 12, width: 70 }}>{game.Players[1].Name}</Text>
                        <Text style={{ color: 'white', backgroundColor: 'red', width: 30, borderRadius: 5, height: 30, textAlign: 'center', textAlignVertical: 'center' }}>
                            {game.Players[1].PenaltyPoints}
                        </Text>
                        <PlayerCalls player={game.Players[1]} />
                    </View>
                )}
            </View>

            <View>
                {game && game.Players[2] && (
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: 5,
                        width: 120,
                        height: 50,
                        zIndex: 50,
                        left: 80,
                        top: 80,
                        borderWidth: 2,
                        borderColor: game.Players[2].IsActive
                            ? 'yellow'
                            : 'white',
                        borderRadius: 5
                    }}>
                        <Text style={{ color: 'white', fontSize: 12, width: 70 }}>{game.Players[2].Name}</Text>
                        <Text style={{ color: 'white', backgroundColor: 'red', width: 30, borderRadius: 5, height: 30, textAlign: 'center', textAlignVertical: 'center' }}>
                            {game.Players[2].PenaltyPoints}
                        </Text>
                        <PlayerCalls player={game.Players[2]} />
                    </View>
                )}
            </View>

            <View>
                {game && game.Players[3] && (
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: 5,
                        width: 120,
                        height: 50,
                        zIndex: 50,
                        left: '43%',
                        top: 5,
                        borderWidth: 2,
                        borderColor: game.Players[3].IsActive
                            ? 'yellow'
                            : 'white',
                        borderRadius: 5
                    }}>
                        <Text style={{ color: 'white', fontSize: 12, width: 70 }}>{game.Players[3].Name}</Text>
                        <Text style={{ color: 'white', backgroundColor: 'red', width: 30, borderRadius: 5, height: 30, textAlign: 'center', textAlignVertical: 'center' }}>
                            {game.Players[3].PenaltyPoints}
                        </Text>
                        <PlayerCallsTop player={game.Players[3]} />
                    </View>
                )}
            </View>

            <View>
                {game && game.Players[4] && (
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: 5,
                        width: 120,
                        height: 50,
                        zIndex: 50,
                        left: 635,
                        top: 80,
                        borderWidth: 2,
                        borderColor: game.Players[4].IsActive
                            ? 'yellow'
                            : 'white',
                        borderRadius: 5
                    }}>
                        <Text style={{ color: 'white', fontSize: 12, width: 70 }}>{game.Players[4].Name}</Text>
                        <Text style={{ color: 'white', backgroundColor: 'red', width: 30, borderRadius: 5, height: 30, textAlign: 'center', textAlignVertical: 'center' }}>
                            {game.Players[4].PenaltyPoints}
                        </Text>
                        <PlayerCalls player={game.Players[4]} />
                    </View>
                )}
            </View>

            <View>
                {game && game.Players[5] && (
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: 5,
                        width: 120,
                        height: 50,
                        zIndex: 50,
                        left: 635,
                        top: 230,
                        borderWidth: 2,
                        borderColor: game.Players[5].IsActive
                            ? 'yellow'
                            : 'white',
                        borderRadius: 5
                    }}>
                        <Text style={{ color: 'white', fontSize: 12, width: 70 }}>{game.Players[5].Name}</Text>
                        <Text style={{ color: 'white', backgroundColor: 'red', width: 30, borderRadius: 5, height: 30, textAlign: 'center', textAlignVertical: 'center' }}>
                            {game.Players[5].PenaltyPoints}
                        </Text>
                        <PlayerCalls player={game.Players[5]} />
                    </View>
                )}
            </View>
        </View>
    )
}

export default LobbyPlayerList