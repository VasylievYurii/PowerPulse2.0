import React from 'react';
import { DayProductsStyle, DayProductsSupTitle, DayProductsTitle, DayProductsWrapTitle } from './DayProducts.styled';

const DayProducts = () => {
  return (
    <DayProductsStyle>
      <DayProductsWrapTitle>
        <DayProductsTitle>Products</DayProductsTitle>
        <a href="#">Add product</a>
      </DayProductsWrapTitle>   
<ul>
  <li><DayProductsSupTitle>Title</DayProductsSupTitle>
      <p></p>
      <DayProductsSupTitle>Category</DayProductsSupTitle>
      <p></p>
      <div>
        <DayProductsSupTitle>Calories</DayProductsSupTitle><p></p>
        <DayProductsSupTitle>Weight</DayProductsSupTitle><p></p>
        <DayProductsSupTitle>Recommend</DayProductsSupTitle><p></p>
        <button>Del</button>
      </div></li>
</ul>
    </DayProductsStyle>
  )
};

export default DayProducts;