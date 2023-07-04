import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ProductDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { addToDb, removeFromDb } from '../../../utilities/fakedb';

const ProductDetail = () => {
  const { proId } = useParams();
  const productsdata = useLoaderData();
  const [product, setProduct] = useState(productsdata);
  const [imageTab, setImageTab] = useState(product.thumbnail);

  useEffect(() => {
    const foundProduct = productsdata.products.find((product) => product.id === parseInt(proId));
    setProduct(foundProduct);
    setImageTab(foundProduct.thumbnail);
  }, [productsdata, proId]);

  console.log(product);

  const handleImageTab = (image) => {
    setImageTab(image);
  };

  // const times = Array(Math.floor(product.rating)).fill(null);

  return (
    <div>
      <div className='container-lg'>
        <div className='d-md-flex'>
          <div className='w-50'>
            <div className='tabMain'>
              <img className='img-fluid w-100 rounded-3' id='expandedImg' src={imageTab} alt='' />
            </div>
            <div className='tabBtn d-flex'>
              {product.images &&
                product.images.map((item) => (
                  <div className='m-1' key={item.id} onClick={() => handleImageTab(item)}>
                    <img src={item} className='img-fluid' alt='' />
                  </div>
                ))}
            </div>
          </div>
          <div className='ms-md-4'>
            <p>
              <span className='fw-bold'>Category:</span> <span className='text-primary'>{product.category}</span>
            </p>
            <div>
              <h2>{product.title}</h2>
            </div>
            {/* {times.map((_, index) => (
              <span className='fs-4 text-warning' key={index}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))} */}

            <div className='my-2'>
              <h3>
                Price: <span className='text-primary'>{product.price}</span>
              </h3>
              <h5>
                Brand: <span className='text-primary'>{product.brand}</span>
              </h5>
            </div>
            <div className='w-100'>
              <h6>Description</h6>
              <hr />
              {product.description}
            </div>
            <Button className='my-5 w-50' onClick={() => addToDb(product)} variant="primary">Add to cart</Button>{' '}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;
