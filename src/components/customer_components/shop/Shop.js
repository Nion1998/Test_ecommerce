import React, {useState} from "react";
import {useLoaderData} from "react-router-dom";
import Products from "../products/Products";
import {addToDb} from "../../../utilities/fakedb";

const Shop = () => {
  const productsdata = useLoaderData();

  const handleAddToCart = selectedProduct => {
    console.log("handel", selectedProduct);
    addToDb(selectedProduct);
  };

  return (
    <div className="container-lg m-auto row g-2 g-md-3 g-lg-4">
      {productsdata.products.map(product => (
        <div className="col-6 col-md-4 col-ld-4 col-xl-3 ">
          <Products
            key={product.id}
            id={product.id}
            thumbnail={product.images[0]}
            title={product.title}
            price={product.price}
            rating={product.rating}
            quantity={1}
            handleAddToCart={handleAddToCart}
          ></Products>
        </div>
      ))}
    </div>
  );
};

export default Shop;
