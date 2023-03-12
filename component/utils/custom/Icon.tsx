import { FC } from "react";
import { ColorValue, StyleProp, TextStyle } from "react-native";
import Text from "./Text";
export interface IconProps {
    value: string,
    size?: Number,
    color?: ColorValue,
    outlined?: Boolean,
    style?: StyleProp<TextStyle>
}

const Icon: FC<IconProps> = ({ value, size, outlined, style }) => {
    let iconstyle : TextStyle = {
        fontFamily: outlined ? "MaterialIconsOutlined-Regular" : "MaterialIcons-Regular",
        fontSize:  Number(size ?? 24),
    }
    return (<Text style={[iconstyle, style]}>{value}</Text>);
}

export default Icon;