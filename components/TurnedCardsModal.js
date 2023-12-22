/* eslint-disable */
import {Button, Modal, View, Text, Image} from "react-native";
import cardImages from "./CardImages";

const TurnedCardsModal = ({ isVisible, victimCards, onClose }) => {
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => onClose()}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                    <Text style={{ color: 'black' }}>Player who turned: {victimCards.PlayerName}</Text>
                    <Text style={{ color: 'black' }}>Victim: {victimCards.VictimName}</Text>

                    <View style={{ flexDirection: 'row', padding: 16, backgroundColor: 'white' }}>
                        {victimCards.Hand && victimCards.Hand.map((card, index) => (
                            <View key={index} style={{ paddingHorizontal: 8 }}>
                                <Image
                                    source={cardImages[`${card.Value}${card.Suit}`]}
                                    style={{ width: 50, height: 70 }}
                                    resizeMode="contain"
                                    alt={`card from victim ${index}`}
                                />
                            </View>
                        ))}
                    </View>

                    <Text style={{ marginBottom: 10, color: 'black' }}>
                        {victimCards.victimBluffed ?
                            `${String(victimCards.VictimName)} has to play with open cards!`
                            : `${String(victimCards.PlayerName)} gets a penalty point!`
                        }
                    </Text>

                    <Button title="Close" onPress={() => onClose()} />
                </View>
            </View>
        </Modal>
    );
};

export default TurnedCardsModal;
