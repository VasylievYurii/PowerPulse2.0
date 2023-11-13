import React from 'react';
import { DayProductsStyle, DiaryTitle, DiaryProductsList, NextIconWrapper, DiaryLink, DayProductsWrapTitle } from './DayProducts.styled';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import DayProductItem from '../DayProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryMeals } from '../../redux/selectors';

const DayProducts = () => {
  const meals = useSelector(selectDiaryMeals);
  console.log(meals);

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
    <DayProductsStyle>
      <DayProductsWrapTitle>
        <DiaryTitle>Products</DiaryTitle>
        <Link to='/products'>
          <DiaryLink>Add product
          <NextIconWrapper size='16px' stroke='var(--color-main-one)' >
            <use href={`${sprite}#icon-next`} />
            </NextIconWrapper>
            </DiaryLink>
        </Link>
      </DayProductsWrapTitle>
      <DiaryProductsList>
        {/* {mealsByDate.map((meal) =>
                    <DayProductItem meal={meal} key={meal.id} />
                )} */}
        <DayProductItem />
      </DiaryProductsList>
    </DayProductsStyle>
  )
};

export default DayProducts;