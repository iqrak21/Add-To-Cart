import React,{useContext} from 'react';
import Item from './Item';
import { Scrollbars } from "react-custom-scrollbars-2";

import {CartContext} from './Cart';

export const ContextCart = () => {
    
    const {item,totalItem,price,totalAmount} = useContext(CartContext)
    return (
        <>
         <header>
         <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow"  className="arrow-icon"/>
          <h3>Continue Shopping</h3>
          </div>
          <div className="cart-icon">
          <img src="./images/cart.png" alt="cart"/>
          <p>{totalItem}</p>
          </div>
        </header>
        <section className="main-cart-section">
         <h1>Shopping Cart</h1>
         <p className="total-items">You have <span className="total-items-count">{totalItem}</span> items in shopping cart</p>

         <div className="cart-items">
             <div className="cart-items-container"> 
             <Scrollbars>
                 {
                     item.map((CurItem)=>{
                     return  <Item key={CurItem.id} {...CurItem}/>
                     })
                 }
           
                  </Scrollbars>
                 </div>

         </div>
    <div className="card-total">
        <h3>Cart Total: <span>{totalAmount}₹</span></h3>
        <button>CheckOut</button>
        
        </div>
        </section>
            
        </>
    )
}

export default ContextCart
