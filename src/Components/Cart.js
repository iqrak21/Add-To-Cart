import React,{createContext, useReducer,useEffect} from 'react';
import './Cart.css';
import ContextCart from './ContextCart';
import {product} from './product';
import {reducer} from './reducer';

const initialState={
    item:product,
    totalAmount:0,
    totalItem:0
}

export const CartContext=createContext();

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem=(id)=>{
        return dispatch({
            type:"REMOVE_ITEM",
            payload:id,
        })
    }
    // increment the item
    const increment =(id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:id,
        })
    }

      // decrement the item
      const decrement =(id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id,
        })
    }
    //we will use the useEffect to update the data
    useEffect(() => {
       dispatch({type:"GET_TOTAL"});
    },[state.item] );
   
   
    return (
        <>
        <CartContext.Provider value={{...state,removeItem,increment,decrement}}>
       <ContextCart/>
       </CartContext.Provider>
        </>
    )
}

export default Cart
