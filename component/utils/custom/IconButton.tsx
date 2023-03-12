import { FC, useContext } from "react";
import { StyleProp, Text, TextStyle, TouchableNativeFeedback, View } from "react-native";
import AppContext from "../../../context/AppContext";
import Icon, { IconProps } from "./Icon";
interface IconButtonProps {
    icon: IconProps,
    value?: string,
    textStyle?: StyleProp<TextStyle>,
    onPress?: () => void
}
const IconButton: FC<IconButtonProps> = ({ icon, value, textStyle, onPress }) => {
    const appState = useContext(AppContext);
    return (

        <View style={{margin: 5}}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(String(appState?.colorValue.rippleColor), true)} onPress={onPress}>
                <View style={{ padding: 3, justifyContent: "center", alignItems: "center" }}>
                    {
                        icon &&
                        <Icon {...icon} />
                    }
                    {
                        value &&
                        <Text style={[{ fontSize: 12 }, textStyle]}>{value}</Text>
                    }
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

export default IconButton;