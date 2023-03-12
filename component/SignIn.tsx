import { NavigationProp } from "@react-navigation/native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import Text from "./utils/custom/Text"
import {
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    View,
} from 'react-native';

import InputText from "./utils/custom/InputText";
import { useState } from "react";
import IconInputText from "./utils/custom/IconInputText";
import Button from "./utils/custom/Button";
import CustomView from "./utils/custom/CustomView";
const SignIn = ({ }): JSX.Element => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        inner: {
            padding: 24,
            flex: 1,
            justifyContent: 'space-around',

        },
        header: {
            fontSize: 36,
            marginBottom: 10,

        },
        btnContainer: {
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center"
        },
        
    });
    const [emailError, setEmailError] = useState("hello");
    const [passwordError, setPasswordError] = useState("password");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <View>
                    <Text style={styles.header}>Pet Caring</Text>
                    <Text>Sign In your account</Text>
                </View>
                <View>
                    <InputText placeholder="Email" error={emailError} />
                    <IconInputText icon={showPassword?"visibility_off":"visibility"} placeholder="Password" error={passwordError} password={!showPassword} onIconPress={() => setShowPassword(!showPassword)} />
                </View>
                <View style={styles.btnContainer}>
                    <Button value="Sign In" style={{paddingHorizontal: 20}}/>
                    <Button value="Don't have account?" color="blue" backgroundColor="transparent" rootstyle={{marginTop: 10}} textstyle={{textDecorationLine: "underline"}}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
export default SignIn;