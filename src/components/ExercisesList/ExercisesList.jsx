import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { useParams } from 'react-router-dom';
import { getExercisesFilter } from '../../redux/exercises/exeOperation';
import {
  NameExercises,
  GeneralWrapper,
  WrapperExercises,
  ButtonGoBack,
  LinkBtn,
  IconWrapperBack,
} from './ExercisesList.styled';
import sprite from '../../assets/sprite.svg';

const ExercisesList = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/exercises');
  const dispatch = useDispatch();
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
    <GeneralWrapper>
      <div>
        <ButtonGoBack>
          <IconWrapperBack>
            <use href={`${sprite}#con-next`} width={24} height={24} />
            <LinkBtn to={backLinkLocation.current}>Back</LinkBtn>
          </IconWrapperBack>
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
      </div>
    </GeneralWrapper>
  );
};

export default ExercisesList;
