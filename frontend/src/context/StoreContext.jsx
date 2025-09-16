import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        // if user add item first time in the cart, this statement will be executed, key ID is itemId
        // else if any item is already available and quantity is one, else statement will increase that
        if (!cartItems[itemId]) {
            setCartItems((prev => ({...prev, [itemId]:1})))
        } else {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(() => {
        
    }, [cartItems])

      const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;