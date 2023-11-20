import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategoriesProducts,
  selectCategoryFilter,
  selectRecommendedFilter,
} from '../../redux/selectors';
// import { selectProduct } from '../../redux/selectors';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/sprite.svg';
// import { productReducer } from '../../redux/products/productsSlice';
import { getProductsCategories } from '../../redux/products/productsOperations';
import {
  updateQueryFilter,
  updateCategoryFilter,
  updateRecommendedFilter,
} from '../../redux/products/filtersSlice';
import { options } from '../../redux/products/filtersConstants';

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

const ProductsFilters = () => {
  const [inputQuery, setInputQuery] = useState('');

  const category = useSelector(selectCategoryFilter);
  const recommended = useSelector(selectRecommendedFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCategories());
  }, [dispatch]);

  // Перетворюємо рядок так, щоб перший символ був у верхньому регістрі,
  // а решта рядка лишалася незмінною
  const capitalizeString = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };

  const categories = useSelector(selectCategoriesProducts);
  // console.log('categories', categories);

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
    setInputQuery(value);

    console.log('inputQuery.value', inputQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    // setQuery(searchValue);
    dispatch(updateQueryFilter(searchValue));
  };

  const resetForm = () => {
    setInputQuery('');
  };

  const handleCategoriesChange = (e) => {
    // setCategory(e);
    dispatch(updateCategoryFilter(e));
  };

  const handleRecomendedChange = (e) => {
    // setRecommended(e);
    dispatch(updateRecommendedFilter(e));
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
      backgroundColor: state.isSelected
        ? 'rgba(28, 28, 28, 1)'
        : state.isFocused
        ? 'rgba(28, 28, 28, 1)'
        : 'rgba(28, 28, 28, 1)', // Стилізація фона активної опції и ховера
      padding: '14px',
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,

      background: 'transparent',
      borderRadius: '12px',
      border: '1px solid rgba(239, 237, 232, 0.3)',
      height: height,
      appearance: 'none', // Removing default appearance
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: '#EFEDE8',
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'rgba(28, 28, 28, 1)', //фон списку
      overflowY: 'auto',
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'transparent', // колір розділювача
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: '#EFEDE8',
    }),
    container: (defaultStyles) => ({
      ...defaultStyles,
      border: '1px solid rgba(239, 237, 232, 0.30)',
      borderRadius: '12px',
      outline: 'none',
    }),
    menuList: (base) => ({
      ...base,
      borderRadius: '12px', // Бордер при скроле

      '::-webkit-scrollbar': {
        display: 'none',
      },
      // overflowY: 'scroll',
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
                value={inputQuery}
                onChange={handleChange}
              />
              {inputQuery && (
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
              theme={(theme) => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary50: 'rgba(255, 255, 255, 0.10)', // Цвет фона при нажатии на селект в меню
                  primary: 'transparent',
                  neutral40: '#EFEDE8', // ховер на птичку
                  neutral20: 'transparent', // дефолтный бордер
                  neutral30: 'transparent', // дефолтный ховер бордер
                  neutral50: 'rgba(239, 237, 232, 1)', // цвет плейсхолдера
                  neutral80: 'rgba(239, 237, 232, 1)',
                },
              })}
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
              theme={(theme) => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary50: 'rgba(255, 255, 255, 0.10)', // Цвет фона при нажатии на селект в меню
                  primary: 'transparent',
                  neutral40: '#EFEDE8', // ховер на птичку
                  neutral20: 'transparent', // дефолтный бордер
                  neutral30: 'transparent', // дефолтный ховер бордер
                  neutral50: 'rgba(239, 237, 232, 1)', // цвет плейсхолдера
                  neutral80: 'rgba(239, 237, 232, 1)',
                },
              })}
            />
          </SelectContainer>
        </li>
      </ProductsFiltersList>
    </>
  );
};

export default ProductsFilters;
