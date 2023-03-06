import { StyleSheet } from "react-native";

export const { flatListContainer, itemContainer,organizationname, textcontainer, ratingbox,ratingtext, imagebackground } = StyleSheet.create({
    flatListContainer: {
        display: "flex", paddingBottom: 10
    },
    itemContainer:{ elevation: 5, margin: "1.5%", height: 250, width: "47%", backgroundColor: "white", borderRadius: 10, overflow: 'hidden' },
    textcontainer: { padding: 10 },
    organizationname: { fontWeight: "bold", fontSize: 20 },
    ratingbox: { flexDirection: "row", backgroundColor: "green", padding: 3, marginStart: "auto", alignItems: "center", borderRadius: 5 },
    ratingtext: { color: "white" },
    imagebackground: { flex: 1, padding: 10 },
});