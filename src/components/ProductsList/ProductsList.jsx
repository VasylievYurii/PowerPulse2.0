// import products from './products_15_pieces';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import {
  selectProducts,
  selectProductsTotal,
  selectQueryFilter,
  selectCategoryFilter,
  selectRecommendedFilter,
  selectUserBlood,
  selectProductsIsLoading,
} from '../../redux/selectors';
import { getProducts } from '../../redux/products/productsOperations';

import ProductsItem from '../ProductsItem';
import NoProductSearchResult from '../NoProductSearchResults';

import { ProductsListWrapper } from './ProductsList.styled';

const capitalizeString = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

const ProductsList = () => {
  const dispatch = useDispatch();

  const query = useSelector(selectQueryFilter);
  const category = useSelector(selectCategoryFilter);
  const recommended = useSelector(selectRecommendedFilter);
  const blood = useSelector(selectUserBlood);

  const products = useSelector(selectProducts);
  const total = useSelector(selectProductsTotal);
  const isLoadingProducts = useSelector(selectProductsIsLoading);

  useEffect(() => {
    dispatch(
      getProducts({
        recommended: recommended.value,
        category: category.value,
        query,
      }),
    );
  }, [recommended, category, query, dispatch]);

  return (
    <>
      {products.length > 0 && (
        <ProductsListWrapper>
          {products.map((product) => (
            <ProductsItem
              key={product._id}
              id={product._id}
              title={product.title}
              calories={product.calories}
              category={capitalizeString(product.category.name)}
              weight={product.weight}
              recommended={
                blood
                  ? product.groupBloodNotAllowed[blood]
                    ? false
                    : true
                  : false
              }
            />
          ))}
        </ProductsListWrapper>
      )}
      {products.length === 0 && !isLoadingProducts && <NoProductSearchResult />}
    </>
  );
};

export default ProductsList;
