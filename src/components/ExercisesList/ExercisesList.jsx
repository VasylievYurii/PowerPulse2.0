import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { useParams } from 'react-router-dom';
import { getExercisesFilter } from '../../redux/exercises/exeOperation';
import {
  NameExersises,
  GeneralWraper,
  WrapperExercises,
  ButtonGoBack,
  LinkBtn,
  IconWraperBack,
} from './ExercisesList.styled';
import sprite from '../../assets/sprite.svg';

const ExercisesList = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/exercises');
  const dispatch = useDispatch();
  // const [exersises, setExersises] = useState([]);
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
  console.log('tut', exeFilter);
  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <GeneralWraper>
      <div>
        <ButtonGoBack>
          <IconWraperBack>
            <use href={`${sprite}#icon-next`} width={24} height={24} />
          </IconWraperBack>
          <LinkBtn to={backLinkLocation.current}>Back</LinkBtn>
        </ButtonGoBack>
        <NameExersises>{ucFirst(current)}</NameExersises>
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
    </GeneralWraper>
  );
};

export default ExercisesList;
