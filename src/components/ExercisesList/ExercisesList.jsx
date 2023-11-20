import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { useParams } from 'react-router-dom';
import { getExercisesFilter } from '../../redux/exercises/exeOperation';
import {
  NameExercises,
  WrapperExercises,
  ButtonGoBack,
  LinkBtn,
  IconWrapperBack,
  WrapperNav,
} from './ExercisesList.styled';
import SectionTemplate from '../SectionTemplate';
import sprite from '../../assets/sprite.svg';
import AddExerciseSuccess from '../../components/AddExerciseSuccess/index';
import BasicModalWindow from '../../components/BasicModalWindow';

import {
  ChaptersWrapper,
  LinkStyled,
} from '../../pages/Exercises/Exercises.styled';
import ChapterTemplate from '../ChapterTemplate/ChapterTemplate';

const ExercisesList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/exercises');
  const backLinkBodyparts = useRef(
    location.state?.from ?? '/exercises/body parts',
  );
  const backLinkMuscles = useRef(location.state?.from ?? '/exercises/muscles');
  const backLinkEquipment = useRef(
    location.state?.from ?? '/exercises/equipment',
  );
  const { exeFilter } = useSelector((state) => state.exercises);

  const params = useParams();
  const current = params.id;

  // const category = params.filter;

  // console.log(current, category, exeFilter);

  useEffect(() => {
    const paramsExe = {
      filter: params.filter,
      name: params.id,
    };
    if (paramsExe) {
      dispatch(getExercisesFilter(paramsExe));
    }
  }, [dispatch]);

  // useEffect(() => {
  //   if (data) {
  //     const exePart = exePartFilter(data, current, category);
  //     setArrFilter(exePart);
  //   }
  // }, [data, current, category]);
  // function exePartFilter(arr, text, filter) {
  //   let key = 'equipment';
  //   if (filter === 'Muscles') {
  //     key = 'target';
  //   }
  //   if (filter === 'Body parts') {
  //     key === 'bodyPart';
  //   }
  //   const arrayExe = arr.filter((item) => item[key] === text);
  //   console.log(arrayExe);
  //   return arrayExe;
  // }

  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <SectionTemplate>
      <ButtonGoBack>
        <IconWrapperBack>
          <use href={`${sprite}#icon-arrow`} />
        </IconWrapperBack>
        <LinkBtn to={backLinkLocation.current}>Back</LinkBtn>
      </ButtonGoBack>
      <WrapperNav>
        <NameExercises>{ucFirst(current)}</NameExercises>
        <ChaptersWrapper>
          <li>
            <LinkStyled to={backLinkBodyparts.current}>
              <ChapterTemplate>Body parts</ChapterTemplate>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={backLinkMuscles.current}>
              <ChapterTemplate>Muscles</ChapterTemplate>
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={backLinkEquipment.current}>
              <ChapterTemplate>Equipment</ChapterTemplate>
            </LinkStyled>
          </li>
        </ChaptersWrapper>
      </WrapperNav>

      <WrapperExercises>
        {exeFilter.data?.map(
          ({
            bodyPart,
            name,
            target,
            _id,
            burnedCalories,
            equipment,
            gifUrl,
          }) => {
            return (
              <ExercisesItem
                key={_id}
                calories={burnedCalories}
                target={ucFirst(target)}
                NameBodyPart={ucFirst(bodyPart)}
                name={ucFirst(name)}
                equipment={equipment}
                gifUrl={gifUrl}
                burnedCalories={burnedCalories}
                exeId={_id}
              />
            );
          },
        )}
      </WrapperExercises>
    </SectionTemplate>
  );
};

export default ExercisesList;
