import { FC, useContext, useState } from "react";
import { StyleProp, StyleSheet, TextInput, TextStyle, View } from "react-native"
import AppContext from "../../../context/AppContext";
import Text from "./Text";
export interface inputtextprops {
    defaultValue?: string,
    value?: string,
    placeholder?: string,
    onChangeText?: (arg0: string) => void,
    style?: StyleProp<TextStyle>,
    error?: string | null,
    password?: boolean,
}
const InputText: FC<inputtextprops> = ({ defaultValue, value, error,onChangeText, style, placeholder,password }) => {
    const appState = useContext(AppContext);
    const [borderFocus, setBorderFocus] = useState(false);
    const customstyle = StyleSheet.create({
        inputcontainer: {
            margin: 5,
        },
        inputtext: {
            borderRadius: 10,
            borderColor: error ? "red" : borderFocus ? "orange" : appState?.colorValue.borderColor,
            padding: 10,
            fontFamily: "Ubuntu",
            color: appState?.colorValue.text,
            borderWidth: 2,
        },
        errorText: {
            marginTop: 5,
            color: "red",
            paddingStart: 12,
        }
    });
    return <View style={customstyle.inputcontainer}>
        <TextInput defaultValue={defaultValue} secureTextEntry={password} placeholder={placeholder} onBlur={() => setBorderFocus(false)} onFocus={() => setBorderFocus(true)} value={value} onChangeText={onChangeText} style={[customstyle.inputtext, style]} placeholderTextColor={appState?.colorValue.borderColor} />
        {
            error &&
            <Text style={customstyle.errorText}>{error}</Text>
        }
    </View>
}
export default InputText;