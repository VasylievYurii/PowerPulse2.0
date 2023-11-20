import React, { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import {
  DiaryCard,
  DescriptionItem,
  DiarySupTitle,
  ValueBox,
  WrapLastDescrBox,
  TrashIconWrapper,
  DiaryTrashButton,
} from '../../pages/Diary/Diary.styled';
import { Circle } from './DayProductItem.styled';
import { delDiaryMealsThunk } from '../../redux/meals/mealsOperations';

const DayProductItem = ({ meal, points }) => {
  let { _id,
    product: { title, category:{ name }, groupBloodNotAllowed },
    profile: { blood },
    calories,
    weight
  } = meal;
  
  const dispatch = useDispatch();

  const deleteProductItem = (productId) => {
    dispatch(delDiaryMealsThunk(productId));
  };

  return (
    <DiaryCard key={_id}>     
      <DescriptionItem>
        <DiarySupTitle>Title</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '204px' : ((points >= 1440) ? '212px' : '100%')}>{title}</ValueBox>
      </DescriptionItem>
      <DescriptionItem>
        <DiarySupTitle>Category</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '128px' : ((points >= 1440) ? '166px' : '100%')}>{name}</ValueBox>
      </DescriptionItem>
      <WrapLastDescrBox>
        <DescriptionItem>
          <DiarySupTitle>Calories</DiarySupTitle>
          <ValueBox $maxwidth='81px' width={(points < 1440 && points >= 768) ? '90px' : ((points >= 1440) ? '105px' : '100%')}>
            {calories}
          </ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle>Weight</DiarySupTitle>
          <ValueBox $maxwidth='80px' width={(points < 1440 && points >= 768) ? '90px' : ((points >= 1440) ? '105px' : '100%')}>
            {weight}
          </ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle>Recommend</DiarySupTitle>
          <ValueBox $maxwidth='76px' display='flex' width={(points < 1440 && points >= 768) ? '80px' : ((points >= 1440) ? '110px' : '100%')}>
            <Circle color={`${groupBloodNotAllowed[blood]}`} />
            {groupBloodNotAllowed[blood] ? 'Yes' : 'No'}
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
    </DiaryCard>
  );
};

export default DayProductItem;
