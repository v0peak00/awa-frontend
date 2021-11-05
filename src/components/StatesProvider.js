import React, {createContext, useState, useContext} from 'react';


const StateContext = createContext();
export const useStates = () => useContext(StateContext);


export default function StatesProvider({children}) {

    const [mainPage, setMainPage] = useState('restaurants');

    const setMainPageRestaurants = () => {setMainPage('restaurants');}
    const isMainPageRestaurants = () => {
        if (mainPage == 'restaurants') return true;
        else return false;
    }

    const setMainPageMenu = () => {setMainPage('menu');}
    const isMainPageMenu = () => {
        if (mainPage == 'menu') return true;
        else return false;
    }

    return (
        <StateContext.Provider value={{
            mainPage,
            setMainPageRestaurants,
            setMainPageMenu,
            isMainPageRestaurants,
            isMainPageMenu
        }}>
            {children}
        </StateContext.Provider>
    )
}