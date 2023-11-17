import React from 'react';
import sprite from '../../assets/sprite.svg';
import {
  ProductForm,
  ImgProduct,
  Title,
  Calories,
  Next,
  ToTheDairy,
} from './AddProductForm.styled';

const AddProductForm = ({ calories, onClick }) => {
  const handleCloseClick = () => {
    onClick();
  };

  return (
    <ProductForm>
      <ImgProduct src="" alt="" />
      <Title>Well done</Title>
      <Calories>Calories: <span>{calories}</span></Calories>
      <Next type='button' onClick={handleCloseClick}>Next product</Next>
      <ToTheDairy to='/diary'>
        <span>To the dairy</span>
        <svg>
          <use href={`${sprite}#icon-next`} />
        </svg>
      </ToTheDairy>
    </ProductForm>
  );
};

export default AddProductForm;
