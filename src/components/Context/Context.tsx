import React, { createContext, useContext, useState } from "react";

const MyContext = createContext<{ state: boolean; setState: React.Dispatch<React.SetStateAction<boolean>> }>({
    state: false,
    setState: () => { },
});

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<boolean>(false);
    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};