import PlayerItem from "./PlayerItem";
import PlayerCards from "../PlayerCards";

const PlayerData = ({game, selectedCard, setSelectedCard, backCard, cardImages}) => [
    {
        icon: (
            <PlayerItem game={game} selectedCard={selectedCard} setSelectCard={setSelectedCard} index={2} backCard={backCard} cardImages={cardImages} />
        ),
    },
    {
        empty: true,
    },
    {
        icon: (
            <PlayerItem game={game} selectedCard={selectedCard} setSelectCard={setSelectedCard} index={3} backCard={backCard} cardImages={cardImages} />
        )
    },
    {
        empty: true,
    },
    {
        icon: (
            <PlayerItem game={game} selectedCard={selectedCard} setSelectCard={setSelectedCard} index={4} backCard={backCard} cardImages={cardImages} />
        )
    },
    {
        empty: true,
    }, {
        empty: true,
    }, {
        empty: true,
    }, {
        empty: true,
    }, {
        empty: true,
    },
    {
        icon: (
            <PlayerItem game={game} selectedCard={selectedCard} setSelectCard={setSelectedCard} index={1} backCard={backCard} cardImages={cardImages} />
        )
    },
    {
        empty: true,
    },
    {
        icon: <PlayerCards game={game} setSelectedCard={setSelectedCard} selectedCard={selectedCard}/>,
    },
    {
        empty: true,
    },
    {
        icon: (
            <PlayerItem game={game} selectedCard={selectedCard} setSelectCard={setSelectedCard} index={5} backCard={backCard} cardImages={cardImages} />
        )
    },
];

export default PlayerData