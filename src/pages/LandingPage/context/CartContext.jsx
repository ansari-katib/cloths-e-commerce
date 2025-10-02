import React, { createContext, useContext, useEffect, useState } from 'react'


//  cart context hook :
const CartContextHook = createContext();
export const CartProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const localData = localStorage.getItem("cartData");
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(data));
    }, [data]);

    return (
        <CartContextHook.Provider value={{ data, setData }}>
            {children}
        </CartContextHook.Provider>
    )
}

//  custom hook to handle local storage data :
export const useCart = () => useContext(CartContextHook);