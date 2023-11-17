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
} from './ExercisesList.styled';
import SectionTemplate from '../SectionTemplate';
import sprite from '../../assets/sprite.svg';
import AddExerciseSuccess from '../../components/AddExerciseSuccess/index';
import BasicModalWindow from '../../components/BasicModalWindow';

const ExercisesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/exercises');

  const { exeFilter } = useSelector((state) => state.exercises);

  const params = useParams();
  const current = params.id;
  const category = params.filter;
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
  const onClickStart = (e) => {
    console.log('start');
    setIsModalOpen((prevState) => !prevState);
  };
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
        {exeFilter.data?.map(
          ({ bodyPart, name, target, _id, burnedCalories }) => {
            return (
              <ExercisesItem
                key={_id}
                calories={burnedCalories}
                target={ucFirst(target)}
                NameBodyPart={ucFirst(bodyPart)}
                name={ucFirst(name)}
                onClickStart={onClickStart}
              />
            );
          },
        )}
      </WrapperExercises>
      {isModalOpen && (
        <BasicModalWindow onClick={onClickStart}>
          <AddExerciseSuccess onClick={onClickStart} />
        </BasicModalWindow>
      )}
    </SectionTemplate>
  );
};

export default ExercisesList;
