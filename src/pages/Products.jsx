import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import ProductsItem from '../components/ProductsItem/ProductsItem';
import ProductsFilters from '../components/ProductsFilters/ProductsFilters';
import { Children } from 'react';

const Products = () => {
  return (
    <SectionTemplate>
      <p>Products page</p>
      <ProductsFilters />
      <ProductsItem>{Children}</ProductsItem>
    </SectionTemplate>
  );
};

export default Products;
