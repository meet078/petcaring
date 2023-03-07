import { NavigationProp } from "@react-navigation/native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FC } from "react"
import Text from "./utils/custom/Text"
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
} from 'react-native';

const SignIn = ({}):JSX.Element => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>PetCaring</Text>
                    <Text>Sign In your account</Text>
                    <TextInput placeholder="Username" style={styles.textInput} />
                    <View style={styles.btnContainer}>
                        <Button title="Submit" onPress={() => null} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

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
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});
export default SignIn;