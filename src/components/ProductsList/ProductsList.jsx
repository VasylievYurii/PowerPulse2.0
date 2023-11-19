// import products from './products_15_pieces';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectProducts } from '../../redux/selectors';
import { getProducts } from '../../redux/products/productsOperations';

import ProductsItem from '../ProductsItem';

import { ProductsListWrapper } from './ProductsList.styled';

const isProductRecommended = false;

const capitalizeString = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <ProductsListWrapper>
      {products.map((product) => (
        <ProductsItem
          key={product._id}
          id={product._id}
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
