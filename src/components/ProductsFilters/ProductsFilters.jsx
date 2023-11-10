import { useState } from 'react';
import { InputEl } from './ProductsFilters.styled';

const ProductsFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  //   const [hiddenBtnClose, setHiddenBtnClose] = useState(false);
  //   const [category, setCategory] = useState('');
  //   const [recommended, setRecommended] = useState(options[0]);

  // Відповідає за оновлення стану
  const handleChange = (e) => {
    const { value } = e.currentTarget;
    // setHiddenBtnClose(value.length > 0);
    setSearchQuery(value.toLowerCase());
  };
  return (
    <>
      <ul>
        <li>
          <InputEl
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
          />
          <button type="submit"></button>
          <button></button>
        </li>
        <li>
          <div>{/* <Select /> */}</div>
        </li>
        <li>
          <div>{/* <Select /> */}</div>
        </li>
      </ul>
    </>
  );
};

export default ProductsFilters;
