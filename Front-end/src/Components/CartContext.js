import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from './Reducer';

const CartContext = createContext();

const initialState = {
    item: [],
    totalAmount: 0,
    totalItem: 0,
}

export function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    // add product in cart
    const addItem = (item) => {
        return dispatch({
            type: 'ADD_ITEM',
            payload: item,
        });
    };


    //to delete the individual elements from the cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    }

    //clear the cart
    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" })
    }

    // increment the item
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id
        })
    }

    //decrement the item
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id
        })
    }

    useEffect(() => {
        dispatch({
            type: "GET_TOTAL"
        })
    }, [state.item])


    return (
        <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement, addItem }}>
            {children}
        </CartContext.Provider>
    );
}

export const UseCart = () => useContext(CartContext)