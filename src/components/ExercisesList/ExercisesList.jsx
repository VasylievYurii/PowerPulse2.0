import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExercisesItem from '../ExercisesItem/ExercisesItem';

const ExercisesList = () => {
  const [exersises, setExersises] = useState([]);
  const { array } = useSelector((state) => state.exercises);
  useEffect(() => {
    if (array) {
      const exersisesPart = arraybodyPart(array, 'chest');
      setExersises(exersisesPart);
    }
  }, [array]);
  function arraybodyPart(arr, text) {
    const arrayExe = arr.filter((item) => item.bodyPart === text);
    console.log(arrayExe);
    return arrayExe;
  }
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
