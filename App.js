/* eslint-disable */
import {
    View,
    Text,
    FlatList,
    Image,
    ImageBackground,
    StatusBar,
    Pressable, Alert, Modal
} from 'react-native';
import tableImage from "./images/table.jpg"
import backCard from "./images/somebackcard.png"
import {useState} from "react";
import Lobby from "./components/Lobby";
import WaitingRoom from "./components/WaitingRoom";
import GameViewModel from "./viewModels/GameViewModel";
import {HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import cardImages from "./components/CardImages";
import LobbyPlayerList from "./components/LobbyPlayerList";
import Toast from 'react-native-toast-message';
import TurnedCardsModal from "./components/TurnedCardsModal";
import LaundryCallList from "./components/LaundryCallList";
import Chat from "./components/Chat";
import 'react-native-gesture-handler';
import GameActionButtonGroup from "./components/GameActionButtonGroup";
import styles from './styles/mainStyles';
import PlayerData from "./components/player/PlayerData"
import Info from "./components/Info";
import casinoBg from "./images/casino-bg.png"
import GameLog from "./components/GameLog";
import Settings from "./components/Settings";
import {HUB_URL} from "@env";

const Item = ({item}) => {
    return <View style={styles.item}>{item.icon}</View>;
};

const image = tableImage;

export default function App() {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [game, setGame] = useState(null);
    const [roomCode, SetRoomCode] = useState("");
    const [users, setUsers] = useState([]);
    const [connectedUser, SetConnectedUser] = useState(null);
    const [parsedTimerInfo, setParsedTimerInfo] = useState(null);
    const [hasJoinedRoom, setHasJoinedRoom] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [turnedCards, setTurnedCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [winModalVisible, setWinModalVisible] = useState(false);
    const [hasWonSet, SetHasWonSet] = useState(false);
    const [gameLog, setGameLog] = useState([]);

    const showToast = (type, message) => {
        let toastType;

        switch (type) {
            case 'Info':
                toastType = 'info';
                break;
            case 'Success':
                toastType = 'success';
                break;
            case 'Warning':
                toastType = 'info';
                break;
            case 'Error':
                toastType = 'error';
                break;
            default:
                toastType = 'info';
        }

        const toastOptions = {
            type: toastType,
            position: 'top',
            text1: type,
            text2: message,
            visibilityTime: 3000,
        };

        Toast.show(toastOptions);
    };

    const playCard = async (suit, value) => {
        await connection.invoke("PlayCard", {suit, value});
        setSelectedCard(null);
    };

    const joinRoom = async (userName, roomCode) => {
        try {
            const connection = new HubConnectionBuilder()
                .withUrl(`${HUB_URL}`)
                .configureLogging(LogLevel.Information)
                .build();

            connections(connection);

            await connection.start().then(() => {
                console.log("Connected to hub");
            }).catch((error) => {
                console.log("Connection hub Error: " + error);
            });

            await connection.invoke("JoinRoom", {userName, roomCode});
            setConnection(connection);

            SetRoomCode(roomCode);
        } catch (e) {
            setConnection(null);
            console.log(e);
        }
    }

    const connections = (connection) => {
        connection.on("ReceiveMessage", (sender, message) => {
            setMessages(messages => [...messages, {sender, message}]);
        });

        connection.on("ReceiveHasJoinedRoom", (hasJoinedRoom) => {
            setHasJoinedRoom(hasJoinedRoom);
        });

        connection.on("ReceiveFlashMessage", (type, message) => {
            console.log(type, message);
            showToast(type, message);
        });

        connection.on("ReceiveTurnedCards", handleReceiveTurnedCards);

        let hasSetIsWonAndOverExecuted = false;

        connection.on("ReceiveGame", (game) => {
            console.log(JSON.stringify(JSON.parse(game), undefined, 4));

            const parsedGame = JSON.parse(game);

            if (parsedGame.State === "GameIsWonAndOver") {
                setWinModalVisible(true);
/*                alert(`Game is over! Winner is ${parsedGame.Players.find(p => p.Id === parsedGame.WinnerIdOfGame).Name} \nrefresh to play again`)*/
            }

            if (parsedGame.State === "SetIsWonAndOver") {
                SetHasWonSet(true);
            }
            else{
                SetHasWonSet(false);
            }

            const gameViewModel = new GameViewModel(parsedGame);

            hasSetIsWonAndOverExecuted = parsedGame.State === "SetIsWonAndOver" && !hasSetIsWonAndOverExecuted;

            console.log(gameViewModel);
            setGame(parsedGame);
        });

        connection.on("ReceiveCountdown", (timerInfo) => {
            console.log(JSON.stringify(JSON.parse(timerInfo), undefined, 4));
            const parsedInfo = JSON.parse(timerInfo);
            setParsedTimerInfo(parsedInfo);
        });

        connection.on("ReceiveUsersInRoom", (users) => {
            const parsedUsers = JSON.parse(users);
            setUsers(parsedUsers);
        });

        connection.on("ReceiveConnectedUser", (user) => {
            if (user != null){
                console.log(JSON.stringify(JSON.parse(user), undefined, 4));
                const parsedUser = JSON.parse(user);
                SetConnectedUser(parsedUser);
            }
            else{
                connection.stop();
                setConnection(null);
            }
        });

        connection.on("ReceiveGameLog", (incomingGameLog) => {
            const parsedGameLog = JSON.parse(incomingGameLog);
            setGameLog(gameLog => [...gameLog, ...parsedGameLog]);
        });
    }

    const handleReceiveTurnedCards = (victimCards) => {
        const victimCardsParsed = JSON.parse(victimCards);
        setTurnedCards(victimCardsParsed);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const startGame = async () => {
        try {
            await connection.invoke("StartGame");
        } catch (e) {
            console.log(e);
        }
    }

    const callDirtyLaundry = async () => {
        await connection.invoke("CallDirtyLaundry");
    }

    const callWhiteLaundry = async () => {
        await connection.invoke("CallWhiteLaundry");
    }

    const callNoLaundry = async () => {
        await connection.invoke("CallNoLaundry");
    }

    const knock = async () => {
        await connection.invoke("Knock");
    }

    const check = async () => {
        await connection.invoke("Check");
    }

    const callMoveOnToNextSet = async () => {
        await connection.invoke("CallMoveOnToNextSet");
        setSelectedCard(null);
    }

    const fold = async () => {
        await connection.invoke("Fold");
    }

    const turnLaundry = async (victimId) => {
        await connection.invoke("TurnLaundry", victimId);
    }

    const removePlayer = async (victimId) => {
        await connection.invoke("KickPlayerInRoom", victimId);
    }

    const [showOptions, setOptions] = useState(true);

    const toggleView = () => {
        if (showOptions){
            setOptions(!showOptions);
        }
        else{
            setOptions(true);
        }
    };

    const leaveGame = () => {
        connection.stop();
        setConnection(null);
        setMessages([]);
        setGame(null);
        SetRoomCode("");
        setUsers([]);
        SetConnectedUser(null);
        setParsedTimerInfo(null);
        setHasJoinedRoom(false);
        setShowModal(false);
        setTurnedCards([]);
        setSelectedCard(null);
        setWinModalVisible(false);
        setGameLog([]);
        setOptions(true);
    }

    return (
        <View style={{height: '100%', width: '100%'}}>
            <StatusBar hidden />
            {!connection || !hasJoinedRoom
                ?
                <ImageBackground source={casinoBg} resizeMode="cover" style={styles.image}>
                    <Lobby joinRoom={joinRoom} />
                </ImageBackground>
                :

                !game ?
                <ImageBackground source={casinoBg} resizeMode="cover" style={styles.image}>
                    <WaitingRoom roomCode={roomCode} users={users} startGame={startGame} connectedUser={connectedUser} removePlayer={removePlayer}/>
                    <View style={{ position: 'absolute', top: 0, height: !showOptions ? '100%' : 'auto', right: 20, zIndex: 50}}>
                        <Settings leaveGame={leaveGame} />
                    </View>
                </ImageBackground>
                :
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={winModalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setWinModalVisible(!winModalVisible);
                            }}>
                            <View style={{ flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 22 }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    paddingLeft: 35,
                                    paddingRight: 35,
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    alignItems: 'center',
                                    shadowColor: 'blue',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,}}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>
                                        {game.WinnerIdOfGame !== -1
                                            ? `Game is over! Winner is ${game.Players.find((p) => p.Id === game.WinnerIdOfGame).Name}`
                                            : 'Game is over! Winner information not available.'}
                                    </Text>
                                    <Pressable
                                        style={{backgroundColor: 'blue',
                                            borderRadius: 10,
                                            padding: 10,
                                            elevation: 2,
                                            marginTop: 30,
                                            }}
                                        onPress={() => {
                                            leaveGame();
                                        }}>
                                        <Text style={{color: 'white', backgroundColor: 'blue'}}>Play Again</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>

                    <View style={{ display: 'none' }}>
                        {Object.keys(cardImages).map((cardName, index) => (
                            <Image
                                key={index}
                                source={cardImages[cardName]}
                                style={styles.cardImage}
                            />
                        ))}
                    </View>

                    <View style={{
                        flex: 1,
                        width: "auto",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={styles.container}>
                            <View style={styles.container}>
                                <View style={styles.app}>
                                    <FlatList
                                        data={PlayerData({
                                            game: game,
                                            selectedCard: selectedCard,
                                            setSelectedCard: setSelectedCard,
                                            backCard: backCard,
                                            cardImages: cardImages,
                                        })}
                                        numColumns={5}
                                        renderItem={({item}) => <Item item={item} key={item.alt}/>}
                                        keyExtractor={(item, index) => `${index}`}
                                    />
                                </View>

                                <GameActionButtonGroup game={game} selectedCard={selectedCard} fold={fold} check={check} knock={knock} callMoveOnToNextSet={callMoveOnToNextSet} callDirtyLaundry={callDirtyLaundry} callWhiteLaundry={callWhiteLaundry} callNoLaundry={callNoLaundry} playCard={playCard} />
                            </View>
                        </View>
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                        }}>
                            <LobbyPlayerList game={game}/>
                            <LaundryCallList game={game} turnLaundry={turnLaundry} />
                        </View>
                    </View>

                    <View style={{ position: 'absolute', top: 0, height: !showOptions ? '100%' : 'auto', zIndex: 50}}>
                        <Chat connection={connection} game={game} users={users} connectedUser={connectedUser} messages={messages} toggleView={toggleView} showOptions={showOptions} />
                    </View>

                    <View style={{ position: 'absolute', top: 0, height: !showOptions ? '100%' : 'auto', left: showOptions ? 50 : 0, zIndex: 50}}>
                        <GameLog gameLog={gameLog} toggleView={toggleView} showOptions={showOptions} />
                    </View>

                    <View style={{ position: 'absolute', top: 0, height: !showOptions ? '100%' : 'auto', left: showOptions ? 100 : 0, zIndex: 50}}>
                        <Info connection={connection} game={game} users={users} connectedUser={connectedUser} messages={messages} toggleView={toggleView} showOptions={showOptions} />
                    </View>

                    <View style={{ position: 'absolute', flex: 1, flexDirection: 'row',
                        justifyContent: 'center', alignItems: 'center'}}>

                        { hasWonSet && (
                            <View style={{ flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                <View style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    width: '100%',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    alignItems: 'center'}}>
                                    <Text style={{ fontSize: 18, color: 'white' }}>
                                        {game.WinnerIdOfSet !== -1
                                            ? `Round is over! Winner is ${game.Players.find((p) => p.Id === game.WinnerIdOfSet).Name}`
                                            : 'Round is over! Winner information not available.'}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </View>

                    <TurnedCardsModal isVisible={showModal} victimCards={turnedCards} onClose={closeModal} />

                    <View style={{ position: 'absolute', top: 0, height: !showOptions ? '100%' : 'auto', right: 20, zIndex: 50}}>
                        <Settings leaveGame={leaveGame} />
                    </View>

                    <Text style={{ position: 'absolute', top: 20, right: 60, color: 'white', fontSize: 25 }}>
                        {parsedTimerInfo && parsedTimerInfo.Seconds > 0 && parsedTimerInfo.Seconds}
                    </Text>
                </ImageBackground>
            }
            <Toast />
        </View>
    );
}
