import React from 'react';
import { DayProductsStyle, DiaryTitle, DiaryWrapTitle, DiaryProductsList, NextIconWrapper, DiaryLink } from './DayProducts.styled';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import DayProductItem from '../DayProductItem';
import { useDispatch, useSelector } from 'react-redux';

const DayProducts = () => {
  // const dispatch = useDispatch();
    // const [load, setLoad] = useState(true);
    // const meals = useSelector(selectPhoneBookValue);
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
        {/* {mealsByDate.map((meal) =>
                    <DayProductItem meal={meal} key={meal.id} />
                )} */}
        <DayProductItem />
      </DiaryProductsList>
    </DayProductsStyle>
  )
};

export default DayProducts;