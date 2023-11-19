import ExersiceFormList from './AddExersiceFormList/AddExersiceFormList';

import {Container,  Gif,  TimerWrapper,  ButtonContainer, Button} from './AddExerciseForm.styled'

import Timer from '../Timer/Timer';
import { getUserParams } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addWorkout } from '../../redux/workouts/workoutsOperations';
import { selectOneWorkout } from '../../redux/selectors';
import { useSelector } from 'react-redux';

// const formatDate = date => {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

 export const AddExerciseForm = ({ onClick, closeModal  }) => {

   const oneWorkout = useSelector(selectOneWorkout);
  //  console.log(oneWorkout.exercise_id);

  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const [dinamicTime, setDinamicTime] = useState(0);

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
      
        <Gif   src="https://ftp.goit.study/img/power-pulse/gifs/0003.gif" alt="name" /> 
          <TimerWrapper>
               {/* <Timer
            data={data}
            setDinamicBurnCal={setDinamicBurnCal}
            dinamicBurnCal={dinamicBurnCal}
            setDinamicTime={setDinamicTime}
            /> */}
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