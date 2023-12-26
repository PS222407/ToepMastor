import React, {useEffect, useRef, useState} from 'react';
import {View, Image, TouchableOpacity, Button, Modal, Text, Animated} from 'react-native';
import cardImages from './CardImages';

const PlayerCards = ({game, setSelectedCard, selectedCard}) => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    useEffect(() => {
        game.Players[0].Hand.forEach((card, index) => {
            const translateY = translateYValues[index];
            let toValue = 0;
            let duration = 200;

            if (selectedCard !== null) {
                toValue = selectedCardIndex === index ? -10 : 0;
            } else {
                setSelectedCardIndex(null);
                duration = 0;
            }

            Animated.timing(translateY, {
                toValue,
                duration,
                useNativeDriver: true,
            }).start();
        });
    }, [selectedCard, selectedCardIndex]);

    const handleCardClick = (suit, value, index) => {
        if (selectedCardIndex === index) {
            setSelectedCard(null);
            setSelectedCardIndex(null);
        } else {
            setSelectedCard({ suit, value });
            setSelectedCardIndex(index);
        }
    };

    const translateYValues = useRef(game.Players[0].Hand.map(() => new Animated.Value(0))).current;

    const renderImages = () => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {game &&
                game.Players &&
                game.Players[0].Hand &&
                game.Players[0].Hand.map((card, index) => {
                    const imagePath = `${card.Value}${card.Suit}`;
                    let translateY = translateYValues[index];
                    let toValue = 0;
                    let duration = 0;

                    Animated.timing(translateY, {
                        toValue,
                        duration,
                        useNativeDriver: true,
                    }).start();

                    return (
                        <TouchableOpacity
                            key={index + 80}
                            onPress={() => {
                                handleCardClick(card.Suit, card.Value, index);
                            }}
                            activeOpacity={0.8}
                            style={{
                                width: 70,
                                height: 70,
                                transform: [{ translateY }],
                            }}
                        >
                            <Image
                                style={{
                                    position: 'absolute',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1,
                                    marginLeft: 4,
                                    marginTop: -10,
                                    width: 70,
                                    height: 70,
                                }}
                                source={cardImages[imagePath]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    );
                })}
        </View>
    );

    const isBorderVisible = (player) => {
        return game.StartedCard && game.StartedCard.Value === player.LastPlayedCard.Value && game.StartedCard.Suit === player.LastPlayedCard.Suit;
    };

    return (
        <View style={{ zIndex: 30, ...(game && game.Players && game.Players[0] && game.Players[0].HasFolded ? { opacity: 0.5 } : {}) }}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 70}}>
                {renderImages()}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {game && game.Players[0] && game.Players[0].LastPlayedCard && (
                    <View>
                        <View style={{
                            position: 'absolute',
                            bottom: 90,
                            zIndex: 55,
                            width: 50,
                            height: 0,
                            borderColor: 'orange',
                            borderWidth: isBorderVisible(game.Players[0]) ? 2 : 0,
                            backgroundColor: 'orange',
                        }}></View>
                        <Image
                            style={{
                                position: 'absolute',
                                bottom: 90,
                                zIndex: 50,
                                width: 50,
                                height: 50,
                            }}
                            source={cardImages[`${game.Players[0].LastPlayedCard.Value}${game.Players[0].LastPlayedCard.Suit}`]}
                            resizeMode="contain"
                        />
                    </View>
                )}
            </View>
        </View>
    );
};

export default PlayerCards;