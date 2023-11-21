import React, { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { delDiaryWorkoutThunk } from '../../redux/workouts/workoutsOperations';
import {
    DiaryCard,
    DescriptionItem,
    DiarySupTitle,
    ValueBox,
    WrapLastDescrBox,
    TrashIconWrapper,
    DiaryTrashButton,
} from '../../pages/Diary/Diary.styled';

const DayExercisesItem = ({ workout }) => {
    let { _id,
        burnedCalories,
        time,
        exercise_id: { bodyPart, equipment, name, target }
    } = workout;
  const [points, setPoints] = useState(window.innerWidth);
  const handleResize = () => setPoints(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dispatch = useDispatch();

  const deleteWorkoutItem = (workoutId) => {
    dispatch(delDiaryWorkoutThunk(workoutId));
  };

  return (
    <DiaryCard key={_id}>     
      <DescriptionItem>
        <DiarySupTitle>Body Part</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '90px' : ((points >= 1440) ? '115px' : '100%')}>
          {bodyPart}</ValueBox>
      </DescriptionItem>
      <DescriptionItem>
        <DiarySupTitle>Equipment</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '132px' : ((points >= 1440) ? '157px' : '100%')}>
          {equipment}</ValueBox>
          </DescriptionItem>
          <DescriptionItem>
        <DiarySupTitle>Name</DiarySupTitle>
        <ValueBox width={(points < 1440 && points >= 768) ? '128px' : ((points >= 1440) ? '131px' : '100%')}>
          {name}</ValueBox>
      </DescriptionItem>
      <WrapLastDescrBox>
        <DescriptionItem>
          <DiarySupTitle>Target</DiarySupTitle>
          <ValueBox $maxwidth='81px' width={(points < 1440 && points >= 768) ? '84px' : ((points >= 1440) ? '106px' : '100%')}>
            {target}</ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle size="80px">Burned Calories</DiarySupTitle>
          <ValueBox $maxwidth='80px' width={(points < 1440 && points >= 768) ? '78px' : ((points >= 1440) ? '91px' : '100%')}>
            {burnedCalories}</ValueBox>
        </DescriptionItem>
        <DescriptionItem>
          <DiarySupTitle>Time</DiarySupTitle>
          <ValueBox $maxwidth='76px' width={(points < 1440 && points >= 768) ? '72px' : ((points >= 1440) ? '82px' : '100%')}>
            {time}</ValueBox>
        </DescriptionItem>
        <DiaryTrashButton
          type="button"
          onClick={() => deleteWorkoutItem(_id)}>
          <TrashIconWrapper>
            <use href={`${sprite}#icon-trash`} />
          </TrashIconWrapper>
        </DiaryTrashButton>
      </WrapLastDescrBox>
    </DiaryCard>
  );
};

export default DayExercisesItem;
