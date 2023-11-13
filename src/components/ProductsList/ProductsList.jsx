// import React from 'react';
import products from './products_15_pieces';
// import { useEffect } from 'react';
import ProductsItem from '../ProductsItem';

const ProductsList = () => {
  return (
    <div>
      <p>ProductsList</p>
      <ul>
        {products.map((item) => (
          <ProductsItem
            key={item._id}
            weight={item.weight}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
