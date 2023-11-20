import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
  import {
  selectCategoriesProducts,
  selectCategoryFilter,
  selectRecommendedFilter,
} from '../../redux/selectors';
import { selectCategoriesProducts } from '../../redux/selectors';
import Select from 'react-select';
// import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/sprite.svg';
import { getProductsCategories } from '../../redux/products/productsOperations';
import {
  updateQueryFilter,
  updateCategoryFilter,
  updateRecommendedFilter,
} from '../../redux/products/filtersSlice';
import { options } from '../../redux/products/filtersConstants';
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

  return (
    <>
      <ProductsFiltersWrapper>
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
