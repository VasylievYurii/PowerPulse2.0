import React from 'react';
import Select from 'react-select';
import { products } from 'products.json';
import { useState } from 'react';

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

const ProductsList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // const [hiddenBtnClose, setHiddenBtnClose] = useState(false);
  // const [category, setCategory] = useState('');
  // const [recommended, setRecommended] = useState(optionsRec[0]);

  // Відповідає за оновлення стану
  const handleChange = (e) => {
    const { value } = e.currentTarget;

    setSearchQuery(value.toLowerCase());
  };

  return (
    <>
      return (
      <>
        <ul>
          <li>
            <form>
              <input
                type="text"
                name="searchQuery"
                autoComplete="off"
                autoFocus
                placeholder="Search"
                value={searchQuery}
                onChange={handleChange}
              ></input>
              <button></button>
              <button></button>
            </form>
          </li>
          <li></li>
          <li></li>
        </ul>
      </>
      );
    </>
  );
};

export default ProductsList;
