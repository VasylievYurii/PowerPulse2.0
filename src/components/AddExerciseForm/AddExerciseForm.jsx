import ExersiceFormList from './AddExersiceFormList/AddExersiceFormList';
import { Container, Gif, TimerWrapper, ButtonContainer, Button, Title } from './AddExerciseForm.styled'
import Timer from '../Timer/Timer';
import { getUserParams } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addWorkout } from '../../redux/workouts/workoutsOperations';
import { selectOneWorkout } from '../../redux/selectors';
import { useSelector } from 'react-redux';



export const AddExerciseForm = ({ onClick }) => {

  const oneWorkout = useSelector(selectOneWorkout);
  //  console.log(oneWorkout.exercise_id);

  const dispatch = useDispatch();

  const handleAddToDiary = () => {
    dispatch(
      addWorkout({
        date: new Date(),
        time: 2,
        exercise_id: '64f2458d6f67bc34bae4f7f4',
      }),
    );
    onClick();
  };

  return (
    <Container>
      <Gif src={oneWorkout?.exercise_id.gifUrl} alt={oneWorkout?.exercise_id.name} />
      <Title>Time</Title>
      <TimerWrapper>
        <Timer
        // data={data}
        // setDinamicBurnCal={setDinamicBurnCal}
        // dinamicBurnCal={dinamicBurnCal}
        // setDinamicTime={setDinamicTime}
        />
      </TimerWrapper>
      <div>
        <ExersiceFormList
          name={oneWorkout?.exercise_id.name}
          bodypart={oneWorkout?.exercise_id.bodyPart}
          target={oneWorkout?.exercise_id.target}
          equipment={oneWorkout?.exercise_id.equipment}
        />
        <ButtonContainer>
          <Button type="button" onClick={handleAddToDiary}>
            Add to diary
          </Button>
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default AddExerciseForm;
