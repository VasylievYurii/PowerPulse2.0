import React, { useEffect, useState } from 'react';
import {
  DiarySections,
  DiaryWrapTitle,
  DiaryTitle,
  DiaryLink,
  NextIconWrapper,
  WrapTitlesTablet,
  DiarySupTitleTablet,
  DiaryLists,
  SectionsWrapTitle
} from '../../pages/Diary/Diary.styled';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { selectWorkouts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import DayExercisesItem from '../DayExercisesItem';


const DayExercises = () => {
  const workouts = useSelector(selectWorkouts);
  const [points, setPoints] = useState(window.innerWidth);

  const handleResize = () => setPoints(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (workouts?.length !== 0) {
    console.log('workouts - всі workouts', workouts);
    return (
      <DiarySections height='1066px'>
        <SectionsWrapTitle>
          <DiaryTitle>Exercises</DiaryTitle>
          <Link to="/exercises">
            <DiaryLink>
              Add exercise
              <NextIconWrapper>
                <use href={`${sprite}#icon-next`} />
              </NextIconWrapper>
            </DiaryLink>
          </Link>
        </SectionsWrapTitle>
        <WrapTitlesTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '206px' : '212px'}>Body Part</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '130px' : '166px'}>Equipment</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '130px' : '166px'}>Name</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '92px' : '105px'}>Target</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '92px' : '105px'}>Burned Calories</DiarySupTitleTablet>
          <DiarySupTitleTablet width={(points < 1440) ? '82px' : '110px'}>Time</DiarySupTitleTablet>
        </WrapTitlesTablet>
        <DiaryLists>
          {workouts?.map((workout) =>
            <DayExercisesItem workout={workout} points={points} key={workout._id} />
          )}
        </DiaryLists>
      </DiarySections>
    );
  }
};

export default DayExercises;
