import { FC, ReactNode, useState } from "react";
import { Appearance, View } from "react-native";
import AppContext from "./AppContext";

export type colorvaluetype = {
    text?: string,
    background: string
    backgroundSubtle: string,
    shadowColor: string,
    rippleColor: string,
    borderColor: string,
}
export interface appstatereturn {
    signIn: boolean,
    setSignIn: (arg0: boolean) => void,
    title: string,
    darkMode: boolean,
    changeMode: () => void,
    colorValue: colorvaluetype,
}
const AppState: FC<{ children: ReactNode }> = ({ children }) => {
    const [signIn, setSignIn] = useState(false);
    const [darkMode, setDarkMode] = useState(Appearance.getColorScheme()=="dark");
    return <View>

        <AppContext.Provider value={{
            title: "Pet Caring",
            signIn: signIn,
            setSignIn: setSignIn,
            darkMode: darkMode,
            changeMode: () => setDarkMode(!darkMode),
            colorValue: darkMode ? {
                text: "white",
                background: "black",
                backgroundSubtle: "#121212",
                shadowColor: "#999999",
                rippleColor: "#999999",
                borderColor: "#eaeaea"
            } :
                {
                    text: "#323232",
                    background: "white",
                    backgroundSubtle: "#efefef",
                    shadowColor: "#121212",
                    rippleColor: "lightgray",
                    borderColor: "gray",
                }
        }} >
            {children}
        </AppContext.Provider >
    </View>
}
export default AppState;