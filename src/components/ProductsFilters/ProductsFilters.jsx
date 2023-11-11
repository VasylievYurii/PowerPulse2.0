import { useState } from 'react';
// import Select from 'react-select';
import sprite from '../../assets/sprite.svg';

import {
  LabelEl,
  InputEl,
  SearchBtnSearch,
  SearchSvgSearch,
  SearchBtnClose,
  SearchSvgClose,
} from './ProductsFilters.styled';

// const options = [
//   { value: 'all', label: 'All' },
//   { value: 'recommended', label: 'Recommended ' },
//   { value: 'notRecommended', label: 'Not recommended' },
// ];

// const productsCategories = [
//   'alcoholic drinks',
//   'berries',
//   'cereals',
//   'dairy',
//   'dried fruits',
//   'eggs',
//   'fish',
//   'flour',
//   'fruits',
//   'meat',
//   'mushrooms',
//   'nuts',
//   'oils and fats',
//   'poppy',
//   'sausage',
//   'seeds',
//   'sesame',
//   'soft drinks',
//   'vegetables and herbs',
// ];

const ProductsFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [category, setCategory] = useState(null);
  // const [recommended, setRecommended] = useState(options[0]);

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

  return (
    <>
      <ul>
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
          <div>
            {/* <Select value={category} placeholder="Categories" /> */}
          </div>
        </li>
        <li>
          <div>{/* <Select value={recommended} /> */}</div>
        </li>
      </ul>
    </>
  );
};

export default ProductsFilters;
