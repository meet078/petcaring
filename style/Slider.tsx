import { StyleProp, StyleSheet, ViewStyle, ViewToken } from "react-native";

export const {card, indicatorContainer,normalDot,scrollContainer} = StyleSheet.create({
    scrollContainer: {
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'silver',
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const sliderimage = (windowWidth: number):StyleProp<ViewStyle> => ({ width: windowWidth, height: 200 });