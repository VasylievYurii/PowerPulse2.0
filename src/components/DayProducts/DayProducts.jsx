import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import DayProductItem from '../DayProductItem';
import { useDispatch, useSelector } from 'react-redux';
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
  EmptyText
} from '../../pages/Diary/Diary.styled';

const DayProducts = () => {
  const meals = useSelector(selectMeals);
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

    return (
      <DiarySections>
        <SectionsWrapTitle>
          <DiaryTitle>Products</DiaryTitle>
          <Link to="/products">
            <DiaryLink>
              Add product
              <NextIconWrapper>
                <use href={`${sprite}#icon-next`} />
              </NextIconWrapper>
            </DiaryLink>
          </Link>
        </SectionsWrapTitle>
        <WrapTitlesTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '206px' : '212px'}>Title</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '130px' : '166px'}>Category</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '92px' : '105px'}>Calories</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '92px' : '105px'}>Weight</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '82px' : '110px'}>Recommend</DiarySupTitleTablet>
        </WrapTitlesTablet>
        {meals.length !== 0 ? <DiaryLists>
          {meals.map((meal) =>
            <DayProductItem meal={meal} points={points} key={meal._id} />
          )}
        </DiaryLists> : <EmptyText>Not found products</EmptyText>
        }
      </DiarySections>
    );
};

export default DayProducts;
