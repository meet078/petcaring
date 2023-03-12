import { FC, ReactNode, useContext } from "react";
import { StyleProp, TextStyle, Text as OldText } from "react-native";
import AppContext from "../../../context/AppContext";

export interface textprops{
    children: ReactNode,
    style?: StyleProp<TextStyle>
}
const Text: FC<textprops> = ({children, style}) => {
    const appState = useContext(AppContext);
    return (<OldText style={[{fontFamily: "Ubuntu", color: appState?.colorValue.text}, style]}>{children}</OldText>)
};
export default Text;