import { FC, ReactNode, useState } from "react";
import AppContext from "./AppContext";

export interface appstatereturn {
    signIn: boolean,
    setSignIn: (arg0: boolean) => void,
    title: string,
}
const AppState: FC<{ children: ReactNode }> = ({ children }) => {
    const [signIn, setSignIn] = useState(false);
    return <AppContext.Provider value={{title: "Pet Caring",signIn: signIn, setSignIn: setSignIn }}>
        {children}
    </AppContext.Provider>
}
export default AppState;