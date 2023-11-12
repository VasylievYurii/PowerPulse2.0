import { useState } from 'react';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/sprite.svg';

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
  { value: 'recommended', label: 'Recommended ' },
  { value: 'notRecommended', label: 'Not recommended' },
];

const productsCategories = [
  'alcoholic drinks',
  'berries',
  'cereals',
  'dairy',
  'dried fruits',
  'eggs',
  'fish',
  'flour',
  'fruits',
  'meat',
  'mushrooms',
  'nuts',
  'oils and fats',
  'poppy',
  'sausage',
  'seeds',
  'sesame',
  'soft drinks',
  'vegetables and herbs',
];

const ProductsFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState(null);
  const [recommended, setRecommended] = useState(options[0]);

  // Перетворюємо рядок так, щоб перший символ був у верхньому регістрі,
  // а решта рядка лишалася незмінною
  const capitalizeString = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };

  const categoriesList = productsCategories.map((product) => ({
    value: product,
    label: capitalizeString(product),
  }));

  // Відповідає за оновлення стану
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    // console.log(e);
    // console.log(searchValue);
    setSearchQuery(searchValue);
  };

  const resetForm = () => {
    setSearchQuery('');
  };

  const handleCategoriesChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleRecomendedChange = (e) => {
    const { value } = e.target;
    setRecommended(value);
  };

  const isMobile = useMediaQuery({ minWidth: 375 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  let height = '';

  isMobile ? (height = '46px') : (height = '52px');
  isTablet ? (height = '52px') : (height = '46px');
  isDesktop ? (height = '52px') : (height = '46px');

  const customStyles = {
    option: (defaultStyles, { isFocused, isSelected }) => ({
      ...defaultStyles,
      backgroundColor: isSelected
        ? 'rgba(28, 28, 28, 1)'
        : isFocused
        ? 'rgba(28, 28, 28, 1)'
        : 'rgba(28, 28, 28, 1)',
      color: isSelected ? '#E6533C' : '#EFEDE8',
      padding: '14px',
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      background: 'trasparent',
      height: height,
      appearance: 'none', // Вилучення стандартного вигляду
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: '#EFEDE8',
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'transparent', // Прозорий колір розділювача
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: '#EFEDE8', // Колір стрілки розгортання списку
    }),
    container: (defaultStyles) => ({
      ...defaultStyles,
      border: '1px solid rgba(239, 237, 232, 0.30)',
      borderRadius: '12px',
      outline: 'none',
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
                value={searchQuery}
                onChange={handleChange}
              />
              {searchQuery && (
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
              options={categoriesList || []}
              placeholder="Categories"
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
            />
          </SelectContainer>
        </li>
      </ProductsFiltersList>
    </>
  );
};

export default ProductsFilters;
