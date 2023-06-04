import "./Card.scss"
import { Link } from "react-router-dom"
import React from 'react'

function Card({item}) {
  return (
          <Link className="link" to={`/product/${item.id}`}>
          <div className="card">
              <div className="image">
                  <img src={item.img1} alt="" className="mainImg" />
                  <img src={item.img2} alt="" className="secondImg" />
              </div>

              <h2>{item.title}</h2>

              <div className="priceNrating">
                  <h3>Price: ₹{item.price}</h3>
                  <h3 className="oldPrice">old price: <span>₹{item.variant_compare_at_price}</span></h3>
              </div>
          </div>
          </Link>
  )
}

export default Card
