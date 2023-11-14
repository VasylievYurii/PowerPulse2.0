import React, { useEffect, useState } from 'react';
import {
  DiarySupTitle,
  DescriptionItem,
  ValueBox,
  DiaryProductCard,
  WrapLastDescrBox,
  Circle,
  TrashIconWrapper,
  DiaryTrashButton,
} from './DayProductItem.styled';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { delDiaryMealsThunk } from '../../redux/diary/diaryOperations';

const DayProductItem = ({ meal, points }) => {
  let { _id, product: { title, category, groupBloodNotAllowed }, calories, weight } = meal;

  const dispatch = useDispatch();

  const deleteProductItem = (productId) => {
    dispatch(delDiaryMealsThunk(productId));
  };

  return (
    <DiaryProductCard key={_id}>     
      <DescriptionItem>
        <DiarySupTitle>Title</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '204px' : ((points >= 1440) ? '212px' : '100%')}>{title}</ValueBox>
      </DescriptionItem>
      <DescriptionItem>
        <DiarySupTitle>Category</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '128px' : ((points >= 1440) ? '166px' : '100%')}>{category}</ValueBox>
      </DescriptionItem>
      <WrapLastDescrBox>
        <DescriptionItem>
          <DiarySupTitle>Calories</DiarySupTitle>
          <ValueBox width={(points < 1440 && points >= 768) ? '90px' : ((points >= 1440) ? '105px' : '100%')}>
            {calories}
          </ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle>Weight</DiarySupTitle>
          <ValueBox width={(points < 1440 && points >= 768) ? '90px' : ((points >= 1440) ? '105px' : '100%')}>
            {weight}
          </ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle>Recommend</DiarySupTitle>
          <ValueBox display='flex' width={(points < 1440 && points >= 768) ? '80px' : ((points >= 1440) ? '110px' : '100%')}>
            <Circle />
            fff
          </ValueBox>
        </DescriptionItem>
        <DiaryTrashButton
          type="button"
          onClick={() => deleteProductItem(_id)}>
          <TrashIconWrapper>
            <use href={`${sprite}#icon-trash`} />
          </TrashIconWrapper>
        </DiaryTrashButton>
      </WrapLastDescrBox>
    </DiaryProductCard>
  );
};

export default DayProductItem;
