import { useEffect, useState } from "react"

export const useSessionStorage = (key: string, defaultValue: any) => {

    const [State, setState] = useState(() => {
        let Value;
        try {
            Value = JSON.parse(window.sessionStorage.getItem(key) || defaultValue)
        }
        catch {
            Value = defaultValue
        };
        return Value;
    });

    useEffect(() => {
        window.sessionStorage.setItem(key, JSON.stringify(State))
    }, [State, key]);

    return [State, setState];
};