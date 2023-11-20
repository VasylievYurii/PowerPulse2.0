import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserParams } from '../../redux/auth/operations';
import { addWorkout } from '../../redux/workouts/workoutsOperations';
import { toast } from 'react-toastify';
import AddExerciseFormList from './AddExerciseFormList';
import CountdownTimer from '../CountdownTimer';
import {
  Container,
  Gif,
  Button,
  ExerciseWrapper,
  ListWrapper,
} from './AddExerciseForm.styled';

export const AddExerciseForm = ({
  onClick,
  exeId,
  gifUrl,
  name,
  bodyPart,
  target,
  equipment,
  onClickToggle,
}) => {
  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const [dinamicTime, setDinamicTime] = useState(0);

  const dispatch = useDispatch();

  const handleOpenSuccessModal = () => {
    onClickToggle();
    dispatch(
      addWorkout({
        date: new Date(),
        time: 4,
        exercise_id: exeId,
      }),
    );
    onClick();
  };

  return (
    <Container>
      <ExerciseWrapper>
        <Gif src={gifUrl} alt={name} />
        <CountdownTimer />
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
