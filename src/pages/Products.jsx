import SectionTemplate from '../components/SectionTemplate';
import ProductsFilters from '../components/ProductsFilters';
import TitlePage from '../components/TitlePage';
import ProductsList from '../components/ProductsList';

const Products = () => {
  return (
    <SectionTemplate>
      <TitlePage>Products</TitlePage>
      <ProductsFilters />
      <ProductsList />
    </SectionTemplate>
  );
};

export default Products;
