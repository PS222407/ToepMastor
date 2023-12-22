import {View, Image} from "react-native";
import blackShirtImage from "../images/black-shirt.png"
import whiteShirtImage from "../images/white-shirt.png"
import knockedImage from "../images/knocked.png"

const PlayerCalls = ({player}) => {
    return(
        <View style={{ flexDirection: 'row', zIndex: 50, position: 'absolute', right: 4, top: -25, width: 30, height: 30 }}>
            {player.CalledDirtyLaundry && (
                <View style={{ width: 30, height: 30, borderRadius: 5, padding: 2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                    source={blackShirtImage}
                    style={{ width: 25, height: 25}}
                    resizeMode="contain"
                    alt="dirty laundry"
                    />
                </View>
            )}

            {player.CalledWhiteLaundry && (
                <View style={{ width: 30, height: 30, borderRadius: 5, padding: 2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                    source={whiteShirtImage}
                    style={{ width: 25, height: 25}}
                    resizeMode="contain"
                    alt="white laundry"
                    />
                </View>
            )}

            {player.HasKnocked && (
                <View style={{ width: 30, height: 30, borderRadius: 5, padding: 2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={knockedImage}
                        style={{ width: 25, height: 25}}
                        resizeMode="contain"
                        alt="knocked"
                    />
                </View>
            )}
        </View>
    )
}

export default PlayerCalls