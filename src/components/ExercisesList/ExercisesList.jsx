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
    <div>
      {exersises.map(({ bodyPart, equipment, target, _id, burnedCalories }) => (
        <ExercisesItem
          key={_id}
          calories={burnedCalories}
          target={target}
          NameBodyPart={bodyPart}
          equipment={equipment}
        />
      ))}
    </div>
  );
};

export default ExercisesList;
