import React from 'react';
import { DayProductsStyle, DiarySupTitle, DiaryLink, DiaryTitle, DiaryWrapTitle, DescriptionItem, ValueBox, DiaryProductsList, DiaryProductsCard, WrapLastDescrBox, Circle, TrashIconWrapper, NextIconWrapper } from './DayProducts.styled';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const DayProducts = () => {
  return (
    <DayProductsStyle>
      <DiaryWrapTitle>
        <DiaryTitle>Products</DiaryTitle>
        <Link to='/products'>
          <DiaryLink>Add product
          <NextIconWrapper size='16px' stroke='var(--color-main-one)' >
            <use href={`${sprite}#icon-next`} />
            </NextIconWrapper>
            </DiaryLink>
        </Link>
      </DiaryWrapTitle>
      <DiaryProductsList>
        <DiaryProductsCard>
          <DescriptionItem>
            <DiarySupTitle>Title</DiarySupTitle>
            <ValueBox>Bread Hercules grain</ValueBox>
          </DescriptionItem>
          <DescriptionItem>
            <DiarySupTitle>Category</DiarySupTitle>
            <ValueBox>Flour</ValueBox>
          </DescriptionItem>
          <WrapLastDescrBox>
            <DescriptionItem>
              <DiarySupTitle>Calories</DiarySupTitle>
              <ValueBox>100</ValueBox>
            </DescriptionItem>
            <DescriptionItem>
              <DiarySupTitle>Weight</DiarySupTitle>
              <ValueBox>500</ValueBox>
            </DescriptionItem>
            <DescriptionItem>
              <DiarySupTitle>Recommend</DiarySupTitle>
              <ValueBox>
                <Circle />
                fff</ValueBox>
            </DescriptionItem>
                      {/* <button type="button"> */}
          <TrashIconWrapper stroke='var(--color-main-two)' >
            <use href={`${sprite}#icon-trash`} />
          </TrashIconWrapper>
            {/* </button> */}
          </WrapLastDescrBox>
        </DiaryProductsCard>
      
      </DiaryProductsList>
    </DayProductsStyle>
  )
};

export default DayProducts;