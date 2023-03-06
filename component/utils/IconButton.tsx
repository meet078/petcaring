import { FC } from "react";
import { StyleProp, Text, TextStyle, TouchableNativeFeedback, View } from "react-native";
import Icon, { IconProps } from "./Icon";
interface IconButtonProps {
    icon: IconProps,
    value?: string,
    textStyle?: StyleProp<TextStyle>,
    onPress?: () => void
}
const IconButton: FC<IconButtonProps> = ({ icon, value, textStyle, onPress }) => {
    return (
        <View style={{margin: 5}}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("", true)} onPress={onPress}>
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