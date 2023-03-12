import { FC, useContext, useState } from "react";
import { StyleProp, StyleSheet, TextInput, TextStyle, View } from "react-native"
import AppContext from "../../../context/AppContext";
import IconButton from "./IconButton";
import Text from "./Text";
export interface iconinputtextprops {
    icon: string,
    defaultValue?: string,
    value?: string,
    placeholder?: string,
    onChangeText?: (arg0: string) => void,
    style?: StyleProp<TextStyle>,
    error?: string | null,
    password?: boolean,
    onIconPress?: () => void
}
const IconInputText: FC<iconinputtextprops> = ({onIconPress, defaultValue, icon, value, error, onChangeText, style, placeholder, password }) => {
    const appState = useContext(AppContext);
    const [borderFocus, setBorderFocus] = useState(false);
    const customstyle = StyleSheet.create({
        root:{
            margin: 5,
        },
        inputcontainer: {
            flexDirection: "row",
            borderRadius: 10,
            borderColor: error ? "red" : borderFocus ? "orange" : appState?.colorValue.borderColor,
            borderWidth: 2,
            paddingEnd: 5,
            justifyContent: "space-between",
            alignItems: "center",
        },
        inputtext: {
            flex: 1,
            padding: 10,
            marginEnd: 5,
            fontFamily: "Ubuntu",
            color: appState?.colorValue.text,
        },
        errorText: {
            marginTop: 5,
            color: "red",
            paddingStart: 12,
        }
    });
    return <View style={customstyle.root}>
        <View style={customstyle.inputcontainer}>
            <TextInput defaultValue={defaultValue} secureTextEntry={password} placeholder={placeholder} onBlur={() => setBorderFocus(false)} onFocus={() => setBorderFocus(true)} value={value} onChangeText={onChangeText} style={[customstyle.inputtext, style]} placeholderTextColor={appState?.colorValue.borderColor} />
            <IconButton icon={{value: icon}} onPress={onIconPress}/>
        </View>
        {
            error &&
            <Text style={customstyle.errorText}>{error}</Text>
        }
    </View>
}
export default IconInputText;