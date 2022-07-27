import React from 'react'
import Products from '../../Products/Products';
import { useState, useEffect} from 'react';
const Cart = () => {
  const [productss, setProducts] = useState([]);
  

  

  useEffect(() => {
    setProducts(productss);
  }, []);

  return (
    1
  )
}

export default Cart;