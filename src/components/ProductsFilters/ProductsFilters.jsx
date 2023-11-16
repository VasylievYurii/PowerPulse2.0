import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoriesProducts } from '../../redux/selectors';
// import { selectProduct } from '../../redux/selectors';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/sprite.svg';
// import { productReducer } from '../../redux/products/productsSlice';
import {
  getProductsCategories,
  getProducts,
} from '../../redux/products/productsOperations';

import {
  ProductsFiltersList,
  LabelEl,
  InputEl,
  SearchBtnSearch,
  SearchSvgSearch,
  SearchBtnClose,
  SearchSvgClose,
  SelectContainer,
} from './ProductsFilters.styled';
import debounce from 'lodash.debounce';

const animatedComponents = makeAnimated();

const options = [
  { value: 'all', label: 'All' },
  { value: 'true', label: 'Recommended ' },
  { value: 'false', label: 'Not recommended' },
];

const ProductsFilters = () => {
  // const limit = 16;
  // const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  console.log('1 state', query);
  const [category, setCategory] = useState('');
  // console.log('category========', category);
  const [recommended, setRecommended] = useState(options[0]);
  // console.log('recommended=====', recommended);

  // const product = useSelector(selectProduct);
  // console.log('product', product);

  const dispatch = useDispatch();

  // const applyFilters = () => {
  //   dispatch(getProducts(recommended, category, query, page, limit));
  // };

  const debouncedDispatch = debounce((query) => {
    dispatch(getProducts(query));
  }, 300);

  useEffect(() => {
    debouncedDispatch(query);

    // очищення затриманої функції при розмонтажі компонента
    return () => debouncedDispatch.cancel();
  }, [query, debouncedDispatch, dispatch]);

  useEffect(() => {
    dispatch(getProductsCategories());
  }, [dispatch]);

  // Перетворюємо рядок так, щоб перший символ був у верхньому регістрі,
  // а решта рядка лишалася незмінною
  const capitalizeString = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };

  const categories = useSelector(selectCategoriesProducts);
  // console.log('categories State', categories);

  const categoriesList = categories.map(({ _id, name }) => ({
    value: _id,
    label: capitalizeString(name),
  }));
  // console.log('categoriesList===>', categoriesList);

  // Відповідає за оновлення стану
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    // applyFilters();

    console.log('setQuery.value', query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    setQuery(searchValue);
    // console.log(query);

    // applyFilters();
  };

  const resetForm = () => {
    setQuery('');
    // applyFilters();
  };

  const handleCategoriesChange = (e) => {
    // console.log('e', e);
    const { value } = e;

    setCategory(value);
    console.log('category', value);
    // console.log(category);

    // applyFilters();
  };

  const handleRecomendedChange = (e) => {
    // console.log('e', e);
    const { value } = e;

    setRecommended(value);
    // console.log('recommended', recommended);

    // applyFilters();
  };

  const isMobile = useMediaQuery({ minWidth: 375 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  let height = '';

  isMobile ? (height = '46px') : (height = '52px');
  isTablet ? (height = '52px') : (height = '46px');
  isDesktop ? (height = '52px') : (height = '46px');

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,

      fontSize: '14px',
      height: height,
      color: state.isSelected ? '#E6533C' : '#EFEDE8',
      background: '#1C1C1C',
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,

      background: 'transparent',
      borderRadius: '12px',
      border: '1px solid rgba(239, 237, 232, 0.3)',
      height: height,
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: '#EFEDE8',
    }),
  };

  return (
    <>
      <ProductsFiltersList>
        <li>
          <form onSubmit={handleSubmit}>
            <LabelEl>
              <InputEl
                type="text"
                name="productsSearch"
                placeholder="Search"
                value={query}
                onChange={handleChange}
              />
              {query && (
                <SearchBtnClose type="button" onClick={resetForm}>
                  <SearchSvgClose>
                    <use href={sprite + '#icon-cross'}></use>
                  </SearchSvgClose>
                </SearchBtnClose>
              )}
              <SearchBtnSearch type="submit">
                <SearchSvgSearch>
                  <use href={sprite + '#icon-search'}></use>
                </SearchSvgSearch>
              </SearchBtnSearch>
            </LabelEl>
          </form>
        </li>
        <li>
          <SelectContainer>
            <Select
              styles={customStyles}
              value={category}
              onChange={handleCategoriesChange}
              options={categoriesList}
              placeholder="Categories"
              components={animatedComponents}
            />
          </SelectContainer>
        </li>
        <li>
          <SelectContainer>
            <Select
              styles={customStyles}
              value={recommended}
              onChange={handleRecomendedChange}
              options={options}
              components={animatedComponents}
            />
          </SelectContainer>
        </li>
      </ProductsFiltersList>
    </>
  );
};

export default ProductsFilters;
