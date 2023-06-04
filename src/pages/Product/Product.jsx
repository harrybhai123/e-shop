import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import data from "../../productsData";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";


const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()

  let catId = parseInt(useParams().id);
  let men = data[0];
  let women = data[1];
  let kid = data[2];
  let product
  if (catId <= 30) {
    product = men.find((product) => product.id === catId);
  } else if (catId <= 92) {
    product = women.find((product) => product.id === catId);
  } else {
    product = kid.find((product) => product.id === catId);
  }



  let image = [];
  for (let i = 1; i <= 5; i++) {
    const img = product[`img${i}`];
    if (img) {
      image.push(img);
    }
  }

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          {image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={(e) => setSelectImg(index)}
            />
          ))}
        </div>
        <div className="mainImg">
          <img src={image[selectImg]} alt={selectImg} />
        </div>
      </div>
      <div className="right">
        <h1>{product.title}</h1>
        <p>
          {product.description}
        </p>

        <p>
          {product.complete_the_look}
        </p>

        <div className="priceContainer">
          <span className="price">₹{product.price}</span>
          <span className="priceOff">₹{product.variant_compare_at_price}</span>
        </div>

        <div className="quantity">
          <button
            className="minus"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="plus"
            onClick={() => setQuantity((prev) => (prev === 10 ? 10 : prev + 1))}
          >
            +
          </button>
        </div>

        <div className="links">
          <button className="addToCart" onClick={() => dispatch(addToCart({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            img: product.img1,
            quantity,
          }))}>
            <AddShoppingCartIcon />
            Add To Cart
          </button>

          <div className="item">
            <FavoriteBorderIcon />
            add to whishlist
          </div>

        </div>



        <div className="otherdetails">
          {/* <div className="info">
            <span>brand: {product?.brand}</span>
            <span>care instructions: {product?.care_instructions}</span>
            <span>material: {product?.dominant_material}</span>
            <span>ideal_for: {product?.ideal_for}</span>
            <span>color: {product?.actual_color}</span>
            <span>product type: {product?.product_type}</span>
            <span>type: {product?.type}</span>
          </div> */}
          <hr />
          <div className="details">
            <span>description: {product.body}</span>
            <span>additional information: {product.inventory}</span>
            <span>more.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;