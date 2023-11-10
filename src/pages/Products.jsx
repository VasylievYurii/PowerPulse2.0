import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import ProductsItem from '../components/ProductsItem/ProductsItem';
import { Children } from 'react';

const Products = () => {
  return (
    <SectionTemplate>
      <p>Products page</p>
      <ProductsItem>{Children}</ProductsItem>
    </SectionTemplate>
  );
};

export default Products;