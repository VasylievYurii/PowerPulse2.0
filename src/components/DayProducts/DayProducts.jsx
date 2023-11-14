import React, { useEffect, useState } from 'react';
import {
  DayProductsStyle,
  DiaryTitle,
  DiaryProductsList,
  NextIconWrapper,
  DiaryLink,
  DayProductsWrapTitle,
  WrapTitlesTablet,
  DiarySupTitleTablet,
} from './DayProducts.styled';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import DayProductItem from '../DayProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryMeals } from '../../redux/selectors';

const DayProducts = () => {
  const meals = useSelector(selectDiaryMeals);
  const [points, setPoints] = useState(window.innerWidth);

  const handleResize = () => setPoints(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // const dispatch = useDispatch();
  // const [load, setLoad] = useState(true);
  // const date = useSelector(selectDate);

  // useEffect(() => {
  //     setLoad(false);
  // }, [])

  // useEffect(() => {
  //     dispatch(getContactsThunk())
  // }, [dispatch]);

  // const mealsByDate = meals.filter(({ meal.date }) =>
  //   (meal.date === date));

  if (meals.length !== 0) {
    console.log('meals - всі продукти', meals);
    return (
      <DayProductsStyle>
        <DayProductsWrapTitle>
          <DiaryTitle>Products</DiaryTitle>
          <Link to="/products">
            <DiaryLink>
              Add product
              <NextIconWrapper>
                <use href={`${sprite}#icon-next`} />
              </NextIconWrapper>
            </DiaryLink>
          </Link>
        </DayProductsWrapTitle>
        <WrapTitlesTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '206px' : '212px'}>Title</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '130px' : '166px'}>Category</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '92px' : '105px'}>Calories</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '92px' : '105px'}>Weight</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '82px' : '110px'}>Recommend</DiarySupTitleTablet>
        </WrapTitlesTablet>
        <DiaryProductsList>
          {meals.map((meal) =>
            <DayProductItem meal={meal} points={points} key={meal._id} />
          )}
        </DiaryProductsList>
      </DayProductsStyle>
    );
  }
};

export default DayProducts;
