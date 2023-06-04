import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";
import React from 'react'
import { useSelector } from "react-redux";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const data = useSelector((state) => state.cart.products);

  return (
    <>
     <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" style={{ width: "60px", marginTop:"5px" }} alt="" />
          </div>

          <div className="item">
            <Link className="link" to="/">
              E - Shop
            </Link>
          </div>
          
            <div className="leftItem">
            <Link className="link" to="/products/1">
              Men
            </Link>
            <Link className="link" to="/products/2">
              Women
            </Link>
            <Link className="link" to="/products/3">
              Kid's
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Store
            </Link>
          </div>
          <div className="icons">
            <Person2OutlinedIcon className="personicon icon" />
            <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
              <ShoppingCartOutlinedIcon />
              <span className="badge">{data.length}</span>
            </div>
          </div>
        </div>
      </div>
      {cartOpen && <Cart />}
    </div>
    </>
  );
};

export default Navbar;