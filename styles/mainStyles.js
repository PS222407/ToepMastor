import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
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

export default mainStyles;