import { StyleSheet } from "react-native";

export const { appbar, appbarTitle , appbarMenu} = StyleSheet.create({
    appbar: {
        //height appbar 
        height: 60,
        // add padding
        paddingHorizontal: 10,
        paddingVertical: 5,
        // add shadow
        elevation: 1,
        // set layout and align child item
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // border radius
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    appbarTitle: {
        fontWeight: "bold",
        fontSize: 20
    },
    appbarMenu:{
        flexDirection: "row",
    },
});