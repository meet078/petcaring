import { FC, ReactNode } from "react";
import { StyleProp, TextStyle, Text as OldText } from "react-native";

export interface textprops{
    children: ReactNode,
    style?: StyleProp<TextStyle>
}
const Text: FC<textprops> = ({children, style}) => (<OldText style={[{fontFamily: "Ubuntu"}, style]}>{children}</OldText>);
export default Text;