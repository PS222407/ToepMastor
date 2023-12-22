import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import PlayerCards from '../PlayerCards';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    app: {
        flex: 1,
        zIndex: 30,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: 90,
        height: 90,
        alignItems: 'center',
        padding: 30,
    },
    buttonContainer: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 10,
        right: -150,
        marginBottom: 10,
    },
    buttonRound: {
        marginRight: 10,
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        marginHorizontal: 4,
        padding: 6,
        backgroundColor: 'rgb(0,59,255)',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    stackedCards: {
        position: 'relative',
    },
});

const PlayerItem = ({ game, setSelectCard, selectedCard, index, backCard, cardImages }) => {
    const player = game && game.Players && game.Players[index];

    const renderHand = () => (
        <View style={styles.stackedCards}>
            {game && game.Players[index] && game.Players[index].Hand && game.Players[index].Hand.map((card, cardIndex) => (
                <Image
                    key={`card_${index}_${cardIndex}`}
                    style={{
                        position: 'absolute',
                        zIndex: 4 - cardIndex,
                        marginLeft: getLeftMargin(cardIndex),
                        marginTop: getTopMargin(cardIndex),
                        width: 50,
                        height: 50,
                        transform: [{ rotate: getRotation(index) }],
                    }}
                    source={backCard}
                    resizeMode="contain"
                />
            ))}
        </View>
    );

    const renderLastPlayedCard = () => (
        <View>
            {game && game.Players[index] && game.Players[index].LastPlayedCard && (
                <View>
                    <View
                        style={{
                            position: 'absolute',
                            marginLeft: getBorderLeftMargin(index),
                            marginTop: getBorderTopMargin(index),
                            zIndex: 40,
                            width: 50,
                            height: 50,
                            transform: [{ rotate: getRotation(index) }],
                            borderBottomWidth: isBorderVisible(index) ? 4 : 0,
                            borderColor: 'orange',
                        }}
                    ></View>
                    <Image
                        style={{
                            position: 'absolute',
                            marginLeft: getBorderLeftMargin(index),
                            marginTop: getBorderTopMargin(index),
                            zIndex: 20,
                            width: 50,
                            height: 50,
                            transform: [{ rotate: getRotation(index) }],
                        }}
                        source={cardImages[`${player.LastPlayedCard.Value}${player.LastPlayedCard.Suit}`]}
                        resizeMode="contain"
                    />
                </View>
            )}
        </View>
    );

    const isBorderVisible = (playerIndex) => {
        return game.StartedCard && game.StartedCard.Value === player.LastPlayedCard.Value && game.StartedCard.Suit === player.LastPlayedCard.Suit;
    };

    const getLeftMargin = (playerIndex) => {
        switch (index) {
            case 0:
                return 0;
            case 1:
                return playerIndex * 5 - 35;
            case 2:
                return playerIndex * 5 - 35;
            case 3:
                return playerIndex * 7 - 35;
            case 4:
                return playerIndex * 5 - 35;
            case 5:
                return playerIndex * 5 - 30;
            default:
                return 0;
        }
    };

    const getTopMargin = (playerIndex) => {
        switch (index) {
            case 0:
                return 0;
            case 1:
                return playerIndex * 5 + -25;
            case 2:
                return playerIndex * -5 + 20;
            case 3:
                return -10;
            case 4:
                return playerIndex * 5 + 10;
            case 5:
                return playerIndex * -5 + -15;
            default:
                return 0;
        }
    };

    const getBorderLeftMargin = (playerIndex) => {
        switch (playerIndex) {
            case 0:
                return 0;
            case 1:
                return 10;
            case 2:
                return 10;
            case 3:
                return -25;
            case 4:
                return -70;
            case 5:
                return -70;
            default:
                return 0;
        }
    };

    const getBorderTopMargin = (playerIndex) => {
        switch (playerIndex) {
            case 0:
                return 0;
            case 1:
                return -60;
            case 2:
                return 55;
            case 3:
                return 55;
            case 4:
                return 55;
            case 5:
                return -60;
            default:
                return 0;
        }
    };

    const getRotation = (playerIndex) => {
        switch (playerIndex) {
            case 0:
                return '135deg';
            case 1:
                return '45deg';
            case 2:
                return '135deg';
            case 3:
                return '180deg';
            case 4:
                return '225deg';
            case 5:
                return '-45deg';
            default:
                return '0deg';
        }
    };

    return (
        <View style={{ ...(game && game.Players && game.Players[index] && game.Players[index].HasFolded ? { opacity: 0.5 } : {}) }}>
            {index === 0 ? (
                <PlayerCards game={game} setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
            ) : (
                <>
                    <View style={styles.stackedCards}>{renderHand()}</View>
                    {renderLastPlayedCard()}
                </>
            )}
        </View>
    );
};

export default PlayerItem;