import { useSelector } from 'react-redux';
import SectionTemplate from '../components/SectionTemplate';
import ProductsFilters from '../components/ProductsFilters';
import TitlePage from '../components/TitlePage';
import ProductsList from '../components/ProductsList';
import Loader from '../components/Loader';
import {
  selectProductsIsLoading,
  selectProductsError,
} from '../redux/selectors';

const Products = () => {
  const isLoading = useSelector(selectProductsIsLoading);
  const error = useSelector(selectProductsError);

  return (
    <SectionTemplate>
      <TitlePage>Products</TitlePage>
      <ProductsFilters />
      {isLoading && !error && <Loader />}
      <ProductsList />
    </SectionTemplate>
  );
};

export default Products;
