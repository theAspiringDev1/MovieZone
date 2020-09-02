import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    const [isLoggedIn,setIsLoggedIn] = useState(true)

    return (
        <UserContext.Provider value={{ isLoggedIn,setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}
