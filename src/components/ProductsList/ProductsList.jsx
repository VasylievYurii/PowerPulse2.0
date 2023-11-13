// import React from 'react';
import products from './products_15_pieces';
// import { useEffect } from 'react';
import ProductsItem from '../ProductsItem';



const ProductsList = () => {
  return (
    <div>
      {/* <p>Это Kомпонент ProductsList</p>
      <ul>
       {products.map(item => {
          <ProductsItem key={item._id} product={item} />
       })} 
      </ul> */}
      <ProductsItem/>
    </div>
  );
};

export default ProductsList;
