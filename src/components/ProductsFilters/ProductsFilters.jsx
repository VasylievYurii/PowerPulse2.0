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

const animatedComponents = makeAnimated();

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

const options = [
  { value: 'all', label: 'All' },
  { value: 'true', label: 'Recommended ' },
  { value: 'false', label: 'Not recommended' },
];

const ProductsFilters = () => {
  // const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState({
    value: 'all',
    label: 'All categories',
  });
  const [recommended, setRecommended] = useState(options[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getProducts({
        recommended: recommended.value,
        category: category.value,
        query,
        // page,
        // limit,
      }),
    );
  }, [recommended, category, query, dispatch]);
  // page;

  // Перетворюємо рядок так, щоб перший символ був у верхньому регістрі,
  // а решта рядка лишалася незмінною
  const capitalizeString = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };

  const categories = useSelector(selectCategoriesProducts);

  const categoriesList = [
    { value: 'all', label: 'All categories' },
    ...categories.map(({ _id, name }) => ({
      value: _id,
      label: capitalizeString(name),
    })),
  ];

  // Відповідає за оновлення стану
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    console.log('setQuery.value', query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    setQuery(searchValue);
  };

  const resetForm = () => {
    setQuery('');
  };

  const handleCategoriesChange = (e) => {
    setCategory(e);
  };

  const handleRecomendedChange = (e) => {
    setRecommended(e);
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
              components={animatedComponents}
              className="react-select-container"
              classNamePrefix="react-select"
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
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </SelectContainer>
        </li>
      </ProductsFiltersList>
    </>
  );
};

export default ProductsFilters;
