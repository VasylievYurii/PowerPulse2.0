import ExersiceFormList from './AddExersiceFormList/AddExersiceFormList';

import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import AddExerciseSuccess from '../AddExerciseSuccess/AddExerciseSuccess';
import {Container,  Gif,  TimerWrapper,  ButtonContainer, Button, Title} from './AddExerciseForm.styled'

import Timer from '../Timer/Timer';
import { getUserParams } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addWorkout } from '../../redux/workouts/workoutsOperations';
import { selectOneWorkout } from '../../redux/selectors';
import { useSelector } from 'react-redux';


export const AddExerciseForm = ({
  onClick,
  exeId,
  gifUrl,
  name,
  bodyPart,
  target,
  equipment,
}) => {
  const oneWorkout = useSelector(selectOneWorkout);
  //  console.log(oneWorkout);

  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const [dinamicTime, setDinamicTime] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleOpenSuccessModal = () => {
    setShowModal((prevState) => !prevState);
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

      <Gif src={gifUrl} alt={name} />

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
          name={name}
          bodypart={bodyPart}
          target={target}
          equipment={equipment}
        />
        <ButtonContainer>
          <Button type="button" onClick={handleOpenSuccessModal}>
            Add to diary
          </Button>
        </ButtonContainer>
        {showModal && (
          <BasicModalWindow>
            <AddExerciseSuccess
              exeId={exeId}
              onClick={handleOpenSuccessModal}
            />
          </BasicModalWindow>
        )}
      </div>
    </Container>
  );
};

export default AddExerciseForm;
