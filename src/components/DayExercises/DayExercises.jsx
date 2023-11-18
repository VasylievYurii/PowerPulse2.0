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
  SectionsWrapTitle,
  EmptyText,
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DiarySections height="1066px">
      <SectionsWrapTitle>
        <DiaryTitle>Exercises</DiaryTitle>
        <Link to="/exercises">
          <DiaryLink>
            Add exercise
            <NextIconWrapper>
              <use href={`${sprite}#icon-arrow`} />
            </NextIconWrapper>
          </DiaryLink>
        </Link>
      </SectionsWrapTitle>

      {workouts.length !== 0 ? (
        <>
          <WrapTitlesTablet>
            <DiarySupTitleTablet width={points < 1440 ? '90px' : '115px'}>
              Body Part
            </DiarySupTitleTablet>
            <DiarySupTitleTablet width={points < 1440 ? '132px' : '157px'}>
              Equipment
            </DiarySupTitleTablet>
            <DiarySupTitleTablet width={points < 1440 ? '128px' : '131px'}>
              Name
            </DiarySupTitleTablet>
            <DiarySupTitleTablet width={points < 1440 ? '84px' : '106px'}>
              Target
            </DiarySupTitleTablet>
            <DiarySupTitleTablet width={points < 1440 ? '78px' : '91px'}>
              Burned Calories
            </DiarySupTitleTablet>
            <DiarySupTitleTablet width={points < 1440 ? '72px' : '82px'}>
              Time
            </DiarySupTitleTablet>
          </WrapTitlesTablet>
          <DiaryLists>
            {' '}
            {workouts.map((workout) => (
              <DayExercisesItem
                workout={workout}
                points={points}
                key={workout._id}
              />
            ))}{' '}
          </DiaryLists>
        </>
      ) : (
        <EmptyText>Not found exercises</EmptyText>
      )}
    </DiarySections>
  );
};

export default DayExercises;
