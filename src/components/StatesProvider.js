import React, {createContext, useState, useContext} from 'react';


const StateContext = createContext();
export const useStates = () => useContext(StateContext);


export default function StatesProvider({children}) {
    const [page, setPage] = useState('restaurants');

    return (
        <StateContext.Provider value={{
            page,
            setPage
        }}>
            {children}
        </StateContext.Provider>
    )
}