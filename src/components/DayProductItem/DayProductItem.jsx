import React from 'react';
import { DiarySupTitle, DescriptionItem, ValueBox, DiaryProductCard, WrapLastDescrBox, Circle, TrashIconWrapper, DiaryTrashButton } from './DayProductItem.styled';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { delDiaryMealsThunk } from '../../redux/diary/diaryOperations';

const DayProductItem = () => {

const dispatch = useDispatch();

    const deleteProductItem = (productId) => {
        dispatch(delDiaryMealsThunk(productId))
    };

  return (
        <DiaryProductCard>
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
                      <DiaryTrashButton type="button" onClick={() => deleteProductItem(id)}>
          <TrashIconWrapper stroke='var(--color-main-two)' >
            <use href={`${sprite}#icon-trash`} />
          </TrashIconWrapper>
            </DiaryTrashButton>
          </WrapLastDescrBox>
        </DiaryProductCard>
  )
};

export default DayProductItem;