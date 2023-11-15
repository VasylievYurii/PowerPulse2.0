import { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { useParams } from 'react-router';
import { WraperExercises, NameExercises } from './ExercisesList.styled';
import { getExercisesFilter } from '../../redux/exercises/exeOperation';
import {
  IconWrapperStart,
  TextStart,
  WraperStart,
} from '../ExercisesItem/ExercisesItem.styled';
import sprite from '../../assets/sprite.svg';

const ExercisesList = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/exercises');
  const dispatch = useDispatch();
  const { exeFilter } = useSelector((state) => state.exercises);
  const params = useParams();

  const current = params.id;
  // const category = params.filter;
  useEffect(() => {
    console.log('list');
    const paramsExe = {
      filter: params.filter,
      name: params.id,
    };
    if (paramsExe) {
      dispatch(getExercisesFilter(paramsExe));
    }
  }, [dispatch]);
  console.log('tut', exeFilter);

  // useEffect(() => {
  //   if (array) {
  //     const exersisesPart = arraybodyPart(array, current, category);
  //     setExersises(exersisesPart);
  //   }
  // }, [array, current, category]);
  // function arraybodyPart(arr, text, filter) {
  //   let key = 'equipment';
  //   if (filter === 'Muscles') {
  //     key = 'target';
  //   }
  //   if (filter === 'Body parts') {
  //     key === 'bodyPart';
  //   }
  //   const arrayExe = arr.filter((item) => item[key] === text);
  //   console.log('fggxf', arrayExe);
  //   return arrayExe;
  // }
  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <>
      {/* <WraperStart>
        <IconWrapperStart>
          <use href={`${sprite}#icon-arrow`} height={24} width={24} />
        </IconWrapperStart>
        <TextStart>Start</TextStart>
      </WraperStart> */}

      <button className="btnGoBack">
        <Link to={backLinkLocation.current}>Go back</Link>
      </button>

      <NameExercises>{ucFirst(current)}</NameExercises>
      <WraperExercises>
        {exeFilter.map(({ bodyPart, name, target, _id, burnedCalories }) => (
          <ExercisesItem
            key={_id}
            calories={burnedCalories}
            target={ucFirst(target)}
            NameBodyPart={ucFirst(bodyPart)}
            name={ucFirst(name)}
          />
        ))}
      </WraperExercises>
    </>
  );
};

export default ExercisesList;
