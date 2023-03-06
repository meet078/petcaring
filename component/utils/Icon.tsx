import { FC } from "react";
import { ColorValue, StyleProp, Text, TextStyle, View } from "react-native";
export interface IconProps {
    value: string,
    size?: Number,
    color?: ColorValue,
    outlined?: Boolean,
    style?: StyleProp<TextStyle>
}

const Icon: FC<IconProps> = ({ value, size, color, outlined, style }) => {
    let iconstyle : TextStyle = {
        fontFamily: outlined ? "MaterialIconsOutlined-Regular" : "MaterialIcons-Regular",
        fontSize:  Number(size ?? 24),
        color: color,
    }
    return (<Text style={[iconstyle, style]}>{value}</Text>);
}

export default Icon;