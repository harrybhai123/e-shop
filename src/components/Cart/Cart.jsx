import { useEffect, useRef, useState } from "react";
import "./Cart.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";

const Cart = () => {
  const data = useSelector(state=> state.cart.products)
  const dispatch = useDispatch()
  const [isHidden, setIsHidden] = useState(false);
  const cartRef = useRef(null);

  const totalPrice = () => {
    let total = 0
    data.forEach(item => {
      total += item.quantity * item.price
    });
    return total.toFixed(2)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsHidden(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  function handleClick(){
    setIsHidden(true)
  }

  return (
    <div ref={cartRef} className={isHidden ? "cart hidden" : "cart"} >
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="cart image" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{`${item.description?.substring(0, 80)}...`}</p>
            <div className="price">{`Price: ${item.price}`}</div>
            <div className="price">{`No. Of Items: ${item.quantity}`}</div>
          </div>
          <p className="remove" onClick={() => dispatch(removeItem(item.id))}>remove</p>
        </div>
      ))}
        <div className="total">
              <div className="totalpricetext">{`Total Amount: `}</div>
              <div className="totalprice">
                  ₹{totalPrice()}
              </div>
            </div>

      <Link className="link" to='/payment'>
      <button className="checkout" onClick={() => handleClick() }>
          <AddShoppingCartIcon />
              proceed to checkout
          </button>
      </Link>
      <span className="reset" onClick={() => dispatch(resetCart())}>reset cart</span>
    </div>
  );
};

export default Cart;
