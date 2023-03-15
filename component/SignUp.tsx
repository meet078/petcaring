import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, RefObject, useEffect, useRef, useState } from "react";
import { Animated, Keyboard, NativeMethods, NativeSyntheticEvent, ScrollView, StyleSheet, TextInput, TextInputKeyPressEventData, useWindowDimensions, View } from "react-native";
import { RootStackParamList } from "../Root";
import Button from "./utils/custom/Button";
import IconInputText from "./utils/custom/IconInputText";
import InputText from "./utils/custom/InputText";
import Radio from "./utils/custom/Radio";
import Text from "./utils/custom/Text";
type props = NativeStackScreenProps<RootStackParamList, "signup">
const SignUp = ({ }): JSX.Element => {
    const { width: windowWidth } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;
    const styles = StyleSheet.create({
        scrollContainer: {
            flex: 1,
        },
        detailContainer: {
            flex: 1,
            padding: 24,
            width: windowWidth
        },
        header: {
            fontSize: 24,
            marginBottom: 10,
            fontWeight: "bold",
        },
        indicatorContainer: {
            paddingVertical: 20
        },
    });
    let scrollSlide = useRef<ScrollView>(null);
    const [genderValue, setGenderValue] = useState("");
    const [slide, setSlide] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const onNextSlide = () => {
        if (slide < 2)
            setSlide(slide + 1);
    }
    const onPreviousSlide = () => {
        if (slide > 0)
            setSlide(slide - 1);
    }
    useEffect(() => {
        scrollSlide.current?.scrollTo({ x: windowWidth * slide, y: 0, animated: true });
    }, [slide])
    let firstnumber= useRef< TextInput>(null);
    let secondnumber= useRef< TextInput>(null);
    let thirdnumber= useRef< TextInput>(null);
    let fournumber= useRef< TextInput>(null);
    let fivenumber= useRef< TextInput>(null);
    let sixnumber= useRef< TextInput>(null);
    const otphandleKey = (e:NativeSyntheticEvent<TextInputKeyPressEventData>, callback?:()=>void )=>{
        if(e.nativeEvent.key!="Backspace"){

            callback?.();
        }
    }
    return <View style={styles.scrollContainer}>
        <ScrollView
            horizontal={true}
            ref={scrollSlide}
            scrollToOverflowEnabled={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}>
            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.detailContainer}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.header}>Set Up Your Profile ✍🏻</Text>
                    </View>
                    <InputText placeholder="First Name" />
                    <InputText placeholder="Middle Name" />
                    <InputText placeholder="Last Name" />
                    <InputText placeholder="Email" keyboardType="email-address" />
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <InputText placeholder="Code" keyboardType="phone-pad" />
                        </View>
                        <InputText placeholder="Mobile number(Optional)" containerStyle={{ flex: 1 }} keyboardType="phone-pad" />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold" }}>Gender</Text>
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                            <Radio text="Male" value="male" mainValue={genderValue} setMainValue={setGenderValue} />
                            <Radio text="Female" value="female" mainValue={genderValue} setMainValue={setGenderValue} />
                            <Radio text="Other" value="other" mainValue={genderValue} setMainValue={setGenderValue} />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.detailContainer}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.header}>Set Password</Text>
                    </View>
                    <IconInputText password={!showPassword} icon={showPassword ? "visibility_off" : "visibility"} placeholder="Password" onIconPress={() => setShowPassword(!showPassword)} />
                    <InputText placeholder="Confirm Password" password={!showPassword} />
                </View>
            </ScrollView>

            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.detailContainer}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.header}>Otp Verfication</Text>
                        <Text>Send in your email</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <InputText maxLength={1} style={{ textAlign: "center" }} ref={firstnumber} onKeyPress={(e)=> otphandleKey(e, ()=>secondnumber.current?.focus())} keyboardType="number-pad" />
                        <InputText maxLength={1} style={{ textAlign: "center" }} ref={secondnumber} onKeyPress={(e)=> otphandleKey(e, ()=>thirdnumber.current?.focus())} keyboardType="number-pad"/>
                        <InputText maxLength={1} style={{ textAlign: "center" }} ref={thirdnumber} onKeyPress={(e)=> otphandleKey(e, ()=>fournumber.current?.focus())}  keyboardType="number-pad"/>
                        <InputText maxLength={1} style={{ textAlign: "center" }} ref={fournumber} onKeyPress={(e)=> otphandleKey(e, ()=>fivenumber.current?.focus())}  keyboardType="number-pad"/>
                        <InputText maxLength={1} style={{ textAlign: "center" }} ref={fivenumber} onKeyPress={(e)=> otphandleKey(e, ()=>sixnumber.current?.focus())}  keyboardType="number-pad"/>
                        <InputText maxLength={1} style={{ textAlign: "center" }} ref={sixnumber} onKeyPress={(e)=> otphandleKey(e, Keyboard.dismiss)}  keyboardType="number-pad"/>
                    </View>
                </View>
            </ScrollView>
        </ScrollView >

        <View style={styles.indicatorContainer}>
            <Button value="Continue" onPress={onNextSlide} />
            {
                slide != 0 &&
                <Button value="Back" backgroundColor="transparent" onPress={() => { onPreviousSlide() }} />
            }
        </View>
    </View >
}
export default SignUp;