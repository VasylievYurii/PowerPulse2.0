import React from 'react';
import {Container,LeftContainer, /* GifWrapper, Gif, */ TimerTitle, CountdownCircleTimer, TimerButton, Calories,RightContainer, ItemTitle,ButtonContainer, Button} from './AddExerciseForm.styled';

const handleAddToDiary = () => {
  if (!amount) {
    toast.error('Must be greater than 0');
    return;
  }

  dispatch(
    addExercise({
      date: formattedDate, // Use the formatted date
      bodyPart,
      target,
      time: dinamicTime,
      exerciseId: _id,
      equipment,
      name,
      burnedCalories: dinamicBurnCal,
    }),
  );
  onClick();
};

const AddExerciseForm = () => {

    return (
      <Container>
        <LeftContainer>
          <div>
            {/* <GifWrapper>
            <Gif src={gifUrl} alt={name} /> 
            </GifWrapper> */}
          <TimerTitle>Time</TimerTitle>
          <CountdownCircleTimer >renderTime</CountdownCircleTimer>
           <TimerButton /* type="button" */ />  {/* onClick={}>
              <svg className="timerButtonIcon">
                <use href={isPlaying ? `${sprite}` : `${sprite}`} />
              </svg>   
          </TimerButton>  */}
          <Calories> Burned calories: {/* <span className="caloriesSpan">{calculatedCalories}</span> */} </Calories>
          </div>
          </LeftContainer>
        <RightContainer>
          <div>
            <div>
              <ItemTitle>Name</ItemTitle>
            </div>
            <div>
              <ItemTitle>Target</ItemTitle>
            </div>
            <div>
              <ItemTitle>Body Part</ItemTitle>
            </div>
            <div>
              <ItemTitle>Equipment</ItemTitle>
            </div>
          </div>
          <ButtonContainer>
            <Button title="Add to diary" onClick={handleAddToDiary} >
              </Button>
          </ButtonContainer>
        </RightContainer>
      </Container>
    );
  };

export default AddExerciseForm;



