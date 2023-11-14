import React from 'react';
import { WrapperStyled } from './ExercisesSubcategoriesList.styled';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

const ExercisesSubcategoriesList = ({ arr }) => {
  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <WrapperStyled>
      {arr.map(({ name, imgURL, _id, filter }) => (
        <ExercisesSubcategoriesItem
          key={_id}
          fig={imgURL}
          nameImg={ucFirst(name)}
          category={filter}
        />
      ))}
    </WrapperStyled>
  );
};

export default ExercisesSubcategoriesList;
