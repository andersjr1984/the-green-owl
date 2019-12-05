import React, { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';

import prodOne from './DSC_0003.JPG';
import prodTwo from './DSC_0008.JPG';
import prodThree from './DSC_0027.JPG';
import prodFour from './DSC_0031.JPG';
import prodFive from './DSC_0034.JPG';
import prodSix from './DSC_0039.JPG';
import prodSeven from './DSC_0074.JPG';

import './Products.css';
import { Cart } from '../../App';

export const prodObjArr = [
  {
    name: 'Product One',
    key: 'prod-one',
    image: prodOne,
    price: 12,
  },
  {
    name: 'Product Two',
    key: 'prod-two',
    image: prodTwo,
    price: 12,
  },
  {
    name: 'Product Three',
    key: 'prod-three',
    image: prodThree,
    price: 12,
  },
  {
    name: 'Product Four',
    key: 'prod-four',
    image: prodFour,
    price: 12,
  },
  {
    name: 'Product Five',
    key: 'prod-five',
    image: prodFive,
    price: 12,
  },
  {
    name: 'Product Six',
    key: 'prod-six',
    image: prodSix,
    price: 12,
  },
  {
    name: 'Product Seven',
    key: 'prod-seven',
    image: prodSeven,
    price: 12,
  },
];


const Products = () => {
  const { cart, setCart } = useContext(Cart);

  const addToCart = (tempProd) => {
    const product = { ...tempProd };
    if (cart.find((item) => item.key === product.key)) return null;
    const tempCart = [...cart];
    product.quantity = 1;
    tempCart.push(product);

    setCart(tempCart);
  };

  return (
    <div id="product-page">
      <h2>Products</h2>
      {prodObjArr.map((product) => (
        <IndProdDisp key={`prod-disp${product.key}`} product={product} addToCart={addToCart} />
      ))};
    </div>
  );
};

const IndProdDisp = ({ product, addToCart }) => (
  <Alert variant="info">
    <img src={product.image} alt={product.name} align="left" />
    <p>{product.name}</p>
    <Button size="sm" onClick={() => addToCart(product)}>
      Add To Cart
    </Button>
  </Alert>
);

export default Products;
