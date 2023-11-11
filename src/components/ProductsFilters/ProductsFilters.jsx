import { useState } from 'react';
import Select from 'react-select';
import sprite from '../../assets/sprite.svg';

import {
  LabelEl,
  InputEl,
  FilterBtnSearch,
  FilterSvgSearch,
  FilterBtnClose,
  FilterSvgClose,
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
  const [hiddenBtnClose, setHiddenBtnClose] = useState(false);
  const [category, setCategory] = useState(null);
  const [recommended, setRecommended] = useState(options[0]);

  // Відповідає за оновлення стану
  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setSearchQuery(value.toLowerCase());

    if (searchQuery > 0) {
      setHiddenBtnClose(true);
    }
  };

  const clearSearchField = () => {
    setSearchQuery('');
    setCategory(null);
    setRecommended(null);
    if (searchQuery > 0) {
      setHiddenBtnClose(true);
    }
  };

  return (
    <>
      <ul>
        <li>
          <LabelEl>
            <InputEl
              type="text"
              name="productsSearch"
              autoComplete="off"
              autoFocus
              placeholder="Search"
              value={searchQuery}
              onChange={handleChange}
            />
            <FilterBtnClose onClick={clearSearchField} type="button">
              <FilterSvgClose>
                <use href={sprite + '#icon-cross'}></use>
              </FilterSvgClose>
            </FilterBtnClose>
            <FilterBtnSearch type="submit">
              <FilterSvgSearch>
                <use href={sprite + '#icon-search'}></use>
              </FilterSvgSearch>
            </FilterBtnSearch>
          </LabelEl>
        </li>
        <li>
          <div>
            <Select value={category} placeholder="Categories" />
          </div>
        </li>
        <li>
          <div>
            <Select value={recommended} />
          </div>
        </li>
      </ul>
    </>
  );
};

export default ProductsFilters;
