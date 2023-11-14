import React, { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { delDiaryMealsThunk } from '../../redux/diary/diaryOperations';
import {
    DiaryCard,
    DescriptionItem,
    DiarySupTitle,
    ValueBox,
    WrapLastDescrBox,
    TrashIconWrapper,
    DiaryTrashButton,
} from '../../pages/Diary/Diary.styled';

const DayExercisesItem = ({ workout, points }) => {
    let { _id,
        burnedCalories,
        time,
        exercise_id: { bodyPart, equipment, name, target }
    } = workout;

  const dispatch = useDispatch();

  const deleteProductItem = (productId) => {
    dispatch(delDiaryMealsThunk(productId));
  };

  return (
    <DiaryCard key={_id}>     
      <DescriptionItem>
        <DiarySupTitle>Body Part</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '204px' : ((points >= 1440) ? '212px' : '100%')}>{bodyPart}</ValueBox>
      </DescriptionItem>
      <DescriptionItem>
        <DiarySupTitle>Equipment</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '128px' : ((points >= 1440) ? '166px' : '100%')}>{equipment}</ValueBox>
          </DescriptionItem>
          <DescriptionItem>
        <DiarySupTitle>Name</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '128px' : ((points >= 1440) ? '166px' : '100%')}>{name}</ValueBox>
      </DescriptionItem>
      <WrapLastDescrBox>
        <DescriptionItem>
          <DiarySupTitle>Target</DiarySupTitle>
          <ValueBox width={(points < 1440 && points >= 768) ? '90px' : ((points >= 1440) ? '105px' : '100%')}>
            {target}
          </ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle>Burned Calories fhsf</DiarySupTitle>
          <ValueBox width={(points < 1440 && points >= 768) ? '90px' : ((points >= 1440) ? '105px' : '100%')}>
            {burnedCalories}
          </ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle>Time</DiarySupTitle>
          <ValueBox width={(points < 1440 && points >= 768) ? '80px' : ((points >= 1440) ? '110px' : '100%')}>
            {time}
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

export default DayExercisesItem;
