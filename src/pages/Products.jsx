import SectionTemplate from '../components/SectionTemplate';
import ProductsFilters from '../components/ProductsFilters';
import TitlePage from '../components/TitlePage';

const Products = () => {
  return (
    <SectionTemplate>
      <TitlePage>Products page</TitlePage>
      <ProductsFilters />
    </SectionTemplate>
  );
};

export default Products;
