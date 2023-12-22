import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import denyImage from "../images/deny.png";
import checkMarkImage from "../images/checkmark.png";
import knockedImage from "../images/knocked.png";
import dirtyLaundryImage from "../images/black-shirt.png";
import whiteLaundryImage from "../images/white-shirt.png";
import noLaundryImage from "../images/no-laundry.png";

const styles = {
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
}

const GameActionButtonGroup = ({game, selectedCard, fold, check, knock, callMoveOnToNextSet, callDirtyLaundry, callWhiteLaundry, callNoLaundry, playCard }) => {
    return (
        <View style={styles.buttonContainer}>
            {
                (
                    (game.State === "PlayerKnocked" && game.Players[0].IsActive && game.Players[0].HasKnocked === false) ||
                    (game.State === "Poverty" && !game.Players[0].HasPoverty)
                ) && (
                    <TouchableOpacity style={styles.buttonRound} onPress={() => fold()}>
                        <Image
                            source={denyImage}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                )
            }

            {
                (
                    (game.State === "PlayerKnocked" && game.Players[0].IsActive && game.Players[0].HasKnocked === false) ||
                    (game.State === "Poverty" && !game.Players[0].HasPoverty)
                ) && (
                    <TouchableOpacity style={styles.buttonRound} onPress={() => check()}>
                        <Image
                            source={checkMarkImage}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                )
            }

            {game.Players[0].IsActive && game.Players[0].HasKnocked === false && game.State !== "PlayerKnocked" && game.State !== "SetIsWonAndOver" && (
                <TouchableOpacity style={styles.buttonRound} onPress={() => knock()}>
                    <Image
                        source={knockedImage}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
            )}

            {game.State === "SetIsWonAndOver" && (
                <TouchableOpacity style={styles.buttonRound} onPress={() => callMoveOnToNextSet()}>
                    <Text style={[styles.buttonText, {color: 'black'}]}>Next set</Text>
                </TouchableOpacity>
            )}

            {
                (!game.Players[0].CalledDirtyLaundry && (!game.Players[0].CalledWhiteLaundry)) && game.State === "WaitingForLaundryCalls" && (
                    <TouchableOpacity style={styles.buttonRound} onPress={() => callDirtyLaundry()}>
                        <Image
                            source={dirtyLaundryImage}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                )}

            {
                (!game.Players[0].CalledDirtyLaundry && (!game.Players[0].CalledWhiteLaundry)) && game.State === "WaitingForLaundryCalls" && (
                    <TouchableOpacity style={styles.buttonRound} onPress={() => callWhiteLaundry()}>
                        <Image
                            source={whiteLaundryImage}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                )
            }

            {
                (!game.Players[0].CalledDirtyLaundry && (!game.Players[0].CalledWhiteLaundry)) && game.State === "WaitingForLaundryCalls" && (
                    <TouchableOpacity style={styles.buttonRound} onPress={() => callNoLaundry()}>
                        <Image
                            source={noLaundryImage}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                )
            }

            {
                (game.Players[0].IsActive && selectedCard !== null && (
                    <TouchableOpacity style={styles.buttonRound} onPress={() => playCard(selectedCard.suit, selectedCard.value).then(() => console.log("success"))}>
                        <Image
                            source={checkMarkImage}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default GameActionButtonGroup