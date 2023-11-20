import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../../redux/workouts/workoutsOperations';
import AddExerciseFormList from './AddExerciseFormList';
import CountdownTimer from '../CountdownTimer';
import {
  Container,
  Gif,
  Button,
  ExerciseWrapper,
  ListWrapper,
} from './AddExerciseForm.styled';

function secondsToMinutes(seconds) {
  let minutes = seconds / 60;
  return minutes.toFixed(2);
}
export const AddExerciseForm = ({
  onClick,
  exeId,
  gifUrl,
  name,
  bodyPart,
  target,
  burnedCalories,
  equipment,
  onClickToggle,
}) => {
  const dispatch = useDispatch();
  const [dynamicBurnCal, setDynamicBurnCal] = useState(0);
  const [dynamicTime, setDynamicTime] = useState(0);

  useEffect(() => {
    let updatedCalories = Math.round(
      (secondsToMinutes(dynamicTime) * burnedCalories) / 3,
    );
    setDynamicBurnCal(updatedCalories);
  }, [dynamicTime, burnedCalories]);

  const handleOpenSuccessModal = () => {
    onClickToggle();
    dispatch(
      addWorkout({
        exercise_id: exeId,
        date: Date.now(),
        time: 180 - dynamicTime,
      }),
    );
    onClick();
  };

  const handleTime = (time) => {
    setDynamicTime(time);
  };

  return (
    <Container>
      <ExerciseWrapper>
        <Gif src={gifUrl} alt={name} />
        <CountdownTimer
          handleTime={handleTime}
          dynamicBurnCal={dynamicBurnCal}
        />
      </ExerciseWrapper>

      <ListWrapper>
        <AddExerciseFormList
          name={name}
          bodypart={bodyPart}
          target={target}
          equipment={equipment}
        />

        <Button type="button" onClick={handleOpenSuccessModal}>
          Add to diary
        </Button>
      </ListWrapper>
    </Container>
  );
};

export default AddExerciseForm;
