import { useEffect, useRef } from 'react';
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
} from './ExercisesList.styled';
import SectionTemplate from '../SectionTemplate';
import sprite from '../../assets/sprite.svg';

const ExercisesList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/exercises');
  const { exeFilter } = useSelector((state) => state.exercises);
  const params = useParams();
  const current = params.id;
  useEffect(() => {
    const paramsExe = {
      filter: params.filter,
      name: params.id,
    };
    if (paramsExe) {
      dispatch(getExercisesFilter(paramsExe));
    }
  }, [dispatch]);

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
      <NameExercises>{ucFirst(current)}</NameExercises>
      <WrapperExercises>
        {exeFilter.map(({ bodyPart, name, target, _id, burnedCalories }) => (
          <ExercisesItem
            key={_id}
            calories={burnedCalories}
            target={ucFirst(target)}
            NameBodyPart={ucFirst(bodyPart)}
            name={ucFirst(name)}
          />
        ))}
      </WrapperExercises>
    </SectionTemplate>
  );
};

export default ExercisesList;
