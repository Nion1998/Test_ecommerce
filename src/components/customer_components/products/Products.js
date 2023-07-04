import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

const Products = product => {
  const navigate = useNavigate();
  const {id, key, thumbnail, title, price, rating, quantity, handleAddToCart} =
    product;
  const times = Array(Math.round(rating)).fill(null);

  const handleClick = id => {
    navigate(`/productdetail/${id}`);
  };

  return (
    <Card style={{width: "auto", height: "25rem"}}>
      {key}
      <Card.Img
        onClick={() => handleClick(id)}
        className="img-fluid h-50 p-2"
        variant="top"
        src={thumbnail}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="w-100 d-flex justify-content-between align-items-center ">
          <h5>$ {price}</h5> <h6>$ {price}</h6>
        </Card.Text>
        <Card.Text className="fs-6  text-warning">
          {times.map((_, index) => (
            <span key={index}>
              <FontAwesomeIcon icon={faStar} />
            </span>
          ))}
        </Card.Text>
        <div className="">
          <Button
            onClick={() => handleAddToCart(product)}
            className="w-100  fw-bold"
            variant="primary "
          >
            Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Products;
