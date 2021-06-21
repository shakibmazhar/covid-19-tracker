import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

// Creating app context
const AppContext = React.createContext();

// Default state
let inititalState = {
    daily: {},
    countries: [],
    countryData: {},
    motherload: [],
    mapPosition: [24, 90],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, inititalState);
    return (
        <AppContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

//Context hook
const useAppContext = () => {
    return useContext(AppContext);
};

export { useAppContext, AppProvider };
