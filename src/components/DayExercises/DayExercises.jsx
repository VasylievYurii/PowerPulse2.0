import React, { useEffect, useState } from 'react';
import {
  DiarySections,
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
import MediaQuery from 'react-responsive'

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
          <MediaQuery minWidth={768} maxWidth={1439}>
            <WrapTitlesTablet>
              <DiarySupTitleTablet width='90px'>
                Body Part
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='132px'>
                Equipment
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='128px'>
                Name
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='84px'>
                Target
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='78px'>
                Burned Calories
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='72px'>
                Time
              </DiarySupTitleTablet>
            </WrapTitlesTablet>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <WrapTitlesTablet>
              <DiarySupTitleTablet width='115px'>
                Body Part
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='157px'>
                Equipment
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='131px'>
                Name
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='106px'>
                Target
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='91px'>
                Burned Calories
              </DiarySupTitleTablet>
              <DiarySupTitleTablet width='82px'>
                Time
              </DiarySupTitleTablet>
            </WrapTitlesTablet>
          </MediaQuery>
          <DiaryLists>
            {' '}
            {workouts.map((workout) => (
              <DayExercisesItem workout={workout} key={workout._id} />
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
