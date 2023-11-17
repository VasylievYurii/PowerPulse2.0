

import {Container, GifWrapper, Gif,  Timer,  TimerTitle,CountdownCircleTimer, TimerWrapper, TimerButton, Calories,  RightContainer, List, ListItem, ItemTitle, ItemValue, ButtonContainer, Button} from './AddExerciseForm.styled'


// import Timer from '../Timer/Timer';
// import { getUserParams } from '../../redux/auth/operations';
// import { useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { addExercise } from '../../redux/diary/operations';
// const AddProductForm = ({ eldata, onClick, closeModal }) => {

// const formatDate = date => {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

 export const AddExerciseForm = ({name, target, bodyPart, equipment }) => {
  // const {
  //   bodyPart,
  //   equipment,
  //   burnedCalories,
  //   gifUrl,
  //   name,
  //   target,
  //   _id,
  //   time,
  // } = data;

//   const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
//   const [dinamicTime, setDinamicTime] = useState(0);

//   const dispatch = useDispatch();
//   // const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     dispatch(getUserParams());
//   }, [dispatch]);

//   const amount = Math.round((burnedCalories / (time * 60)) * 180);
//   // ;

//   const savedDate = localStorage.getItem('selectedDate');
//   let date = new Date(); // Default to current date

//   if (savedDate) {
//     const parsedDate = new Date(savedDate);
//     if (!isNaN(parsedDate.getTime())) {
//       date = parsedDate; // Use parsed date if valid
//     }
//   }

  //  const formattedDate = formatDate(date);

   const handleAddToDiary = () => {
     if (!amount) {
       toast.error('Must be greater than 0');
       return;
     }

    //  dispatch(
    //    addExercise({
    //      date: formattedDate, // Use the formatted date
    //      bodyPart,
    //      target,
    //      time: dinamicTime,
    //      exerciseId: _id,
    //      equipment,
    //      name,
    //      burnedCalories: dinamicBurnCal,
    //    }),
    //  );
     onClick();
     // closeModal();
   };

 
  return (
    <Container>
      <div>
        <GifWrapper>
          <Gif   src="../../assets/" alt=""   /> 
        </GifWrapper>
        <Timer>
          <TimerTitle>Time</TimerTitle>
          <TimerWrapper>
              {/* <CountdownCircleTimer
               isPlaying={isPlaying}
              duration={time * 60}
              colors={'#e6533c'}
              size={125}
              strokeWidth={4}
              trailColor={'#040404'}
              strokeLinecap="round"
              rotation={-1}
            >
              {({ remainingTime }) => renderTime({ remainingTime })}
            </CountdownCircleTimer>  */}
             {/* <CloseBtnWrapper onClick={handleCloseClick} >
            <use href={`${sprite}#icon-cross`} />
          </CloseBtnWrapper>  */}
          </TimerWrapper>
           <TimerButton  /* nClick={toggleIsPlaying} */ >
            {/* <use href={`${sprite}#icon-pause`} />   */}
          </TimerButton> 
          <Calories>
            Burned calories:  <span>150</span> 
          </Calories>
        </Timer>
      </div>
      <RightContainer>
        <List>
          <ListItem>
            <ItemTitle>Name</ItemTitle>
             <ItemValue>{name}</ItemValue> 
          </ListItem>
          <ListItem>
            <ItemTitle>Target</ItemTitle>
            <ItemValue>{target}</ItemValue>
          </ListItem>
          <ListItem>
            <ItemTitle>Body Part</ItemTitle>
            <ItemValue>{bodyPart}</ItemValue>
          </ListItem>
          <ListItem>
            <ItemTitle>Equipment</ItemTitle>
            <ItemValue>{equipment}</ItemValue>
          </ListItem>
        </List>
        <ButtonContainer>
           <Button type="button" onClick={handleAddToDiary}>
            Add to diary 
            </Button>
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
};

export default AddExerciseForm;