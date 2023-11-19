import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoriesProducts } from '../../redux/selectors';
import Select from 'react-select';
// import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/sprite.svg';
import {
  getProductsCategories,
  getProducts,
} from '../../redux/products/productsOperations';
import { firstSelectStyles, secondSelectStyles } from './SelectStyles';
import {
  ProductsFiltersWrapper,
  LabelEl,
  InputEl,
  SearchBtnSearch,
  SearchSvgSearch,
  SearchBtnClose,
  SearchSvgClose,
  SelectWrapper,
} from './ProductsFilters.styled';

const options = [
  { value: 'all', label: 'All' },
  { value: 'true', label: 'Recommended ' },
  { value: 'false', label: 'Not recommended' },
];

const ProductsFilters = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState({
    value: 'all',
    label: 'All categories',
  });
  const [recommended, setRecommended] = useState(options[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        recommended: recommended.value,
        category: category.value,
        query,
      }),
    );
  }, [recommended, category, query, dispatch]);

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
    setQuery(value);
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

  return (
    <>
      <ProductsFiltersWrapper>
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

        <SelectWrapper>
          <Select
            styles={firstSelectStyles}
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
          <Select
            styles={secondSelectStyles}
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
        </SelectWrapper>
      </ProductsFiltersWrapper>
    </>
  );
};

export default ProductsFilters;
