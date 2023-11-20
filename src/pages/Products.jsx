import SectionTemplate from '../components/SectionTemplate';
import ProductsFilters from '../components/ProductsFilters';
import TitlePage from '../components/TitlePage';
import ProductsList from '../components/ProductsList';
import {
  ProductWrapTitle,
  ProductWrapper,
  Span,
} from './Products/Products.styled';

const Products = () => {
  return (
    <SectionTemplate>
      <ProductWrapper>
        <Span>Filters</Span>
        <ProductWrapTitle>
          <TitlePage>Products</TitlePage>
        </ProductWrapTitle>
        <ProductsFilters />
        <ProductsList />
      </ProductWrapper>
    </SectionTemplate>
  );
};

export default Products;
