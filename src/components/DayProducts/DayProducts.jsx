import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import DayProductItem from '../DayProductItem';
import { useSelector } from 'react-redux';
import { selectMeals } from '../../redux/selectors';
import {
  DiarySections,
  DiaryTitle,
  DiaryLink,
  NextIconWrapper,
  WrapTitlesTablet,
  DiarySupTitleTablet,
  DiaryLists,
  SectionsWrapTitle,
  EmptyText,
} from '../../pages/Diary/Diary.styled';
import MediaQuery from 'react-responsive'


const DayProducts = () => {
  const meals = useSelector(selectMeals);

  return (
    <DiarySections>
      <SectionsWrapTitle>
        <DiaryTitle>Products</DiaryTitle>
        <Link to="/products">
          <DiaryLink>
            Add product
            <NextIconWrapper>
              <use href={`${sprite}#icon-arrow`} />
            </NextIconWrapper>
          </DiaryLink>
        </Link>
      </SectionsWrapTitle>

      {meals.length !== 0 ? (
        <>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <WrapTitlesTablet>
              <DiarySupTitleTablet width='206px'>
                Title
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='130px'>
                Category
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='92px'>
                Calories
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='92px'>
                Weight
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='82px'>
                Recommend
              </DiarySupTitleTablet>
            </WrapTitlesTablet>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <WrapTitlesTablet>
              <DiarySupTitleTablet width='212px'>
                Title
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='166px'>
                Category
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='105px'>
                Calories
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='105px'>
                Weight
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='110px'>
                Recommend
              </DiarySupTitleTablet>
            </WrapTitlesTablet>
          </MediaQuery>
          <DiaryLists>
            {' '}
            {meals.map((meal) => (
              <DayProductItem meal={meal} key={meal._id} />
            ))}{' '}
          </DiaryLists>
        </>
      ) : (
        <EmptyText>Not found products</EmptyText>
      )}
    </DiarySections>
  );
};

export default DayProducts;
