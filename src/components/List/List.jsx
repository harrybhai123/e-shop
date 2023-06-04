import "./List.scss";
import Card from "../Card/Card";
import React from "react";

const List = ({ products }) => {
  return (
    <div className="list">
      {products.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
