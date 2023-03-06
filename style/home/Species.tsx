import { FC } from "react";
import { StyleSheet } from "react-native";


export const {speciesstyle, speciesImage, speciestitle, speciesImageContainer} = StyleSheet.create({
    speciesstyle: {
        margin: 10,
        elevation: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    speciesImageContainer:{
        width: 100,
        borderRadius: 100,
        height: 100,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
        marginBottom: 5,
    },
    speciesImage: {
        height: 80,
        width: 80
    },
    speciestitle: {
        fontSize: 18,
    }
});