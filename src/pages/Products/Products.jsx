import { Link, useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";
import { useState } from "react";
import React from "react";
import data from "../../productsData";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Products = () => {
  let catId = parseInt(useParams().id);
  let men = data[0];
  let women = data[1];
  let kid = data[2];

  let pageData = catId === 1 ? men : catId === 2 ? women : kid;

  const [range, setRange] = useState([0, 5000]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  function onRangeChange(newRange) {
    setRange(newRange);
  }

  let handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  let filteredData = pageData.filter(
    (item) => range && item.price >= range[0] && item.price <= range[1]
  );

  let sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProduct = sortedData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="products">
      <div className="left">
        <div className="searchContainer">
          <input type="text" className="search" placeholder="Search products" value={searchTerm}
            onChange={handleSearch} />
        </div>
        <div className="filterItem">
          <h2>Filter. Find. Enjoy.</h2>
          <div className="inputItem">
            <p className="filtertext">
              Find what you're looking for in seconds with our filtering system.
              Refine your search by category, brand, price, color, and more.
              Enjoy a seamless shopping experience on any device.
            </p>
          </div>
          <div className="filterItem">

            <div className="items">
              <div className="item">
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </div>
              <div className="item">
                <Link className="link" to="/products/2">
                  Women
                </Link>
              </div>
            </div>

            <div className="items">
              <div className="item">
                <Link className="link" to="/products/3">
                  Kid's
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem sliderParent">
            <span> {range[0]}</span>
            <Slider
              className="slider"
              range
              value={range}
              onChange={onRangeChange}
              min={0}
              max={5000}
            />
            <span>{range[1]}</span>

          </div>
        </div>

        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <button onClick={() => handleSortOrderChange("highToLow")}>
              High to Low
            </button>
          </div>
          <div className="inputItem">
            <button onClick={() => handleSortOrderChange("lowToHigh")}>
              Low to High
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="categoryImg"
          src='/Img/sale.jpg'
          alt="products head image"
        />
        {filteredData.length === 0 ? (
          <h1>No products found</h1>
        ) : (<List products={filteredProduct} catId={catId} />)}
      </div>
    </div>
  );
};

export default Products;
