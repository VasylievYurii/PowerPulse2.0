// import React from 'react';
import products from './products_15_pieces';
// import { useEffect } from 'react';
import ProductsItem from '../ProductsItem';

import { ProductsListWrapper } from './ProductsList.styled';

const isProductRecommended = false;

const capitalizeString = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

const ProductsList = () => {
  return (
    <ProductsListWrapper>
      {products.map((product) => (
        <ProductsItem
          key={product._id}
          title={product.title}
          calories={product.calories}
          category={capitalizeString(product.category.name)}
          weight={product.weight}
          recommended={isProductRecommended}
        />
      ))}
    </ProductsListWrapper>
  );
};

export default ProductsList;
