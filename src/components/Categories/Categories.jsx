import "./Categories.scss";
import React from 'react'
function Categories() {
  return (
    <div className="categories">
      <div className="imageCircle">
        <img
          src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/lehenga_2_1_360x.png?v=1670229999"
          alt=""
        />
        <span>LEHENGAS</span>
      </div>

      <div className="imageCircle">
        <img
          src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/saree_1_1_360x.png?v=1670230072"
          
          alt=""
        />
        <span>SAREES</span>
      </div>

      <div className="imageCircle">
        <img
         src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/salwar_2_1_1_360x.png?v=1671012234"
        
          alt=""
        />
        <span>SALWAR SUITS</span>
      </div>

      <div className="imageCircle">
        <img
           src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/Gown_1_360x.png?v=1670229999"
          alt=""
        />
        <span>GOWNS</span>
      </div>
    </div>
  );
}

export default Categories;
