import React from 'react';
import {Container,LeftContainer,  GifWrapper,/* Gif, */TitleWrapper,TimerWrapper, TimerTitle, CountdownCircleTimer, /* IconPause */TimerButtonWrapper, TimerButton,CaloriesWrapper, Calories,RightContainer, ItemTitle,ButtonContainer, Button} from './AddExerciseForm.styled';

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
             <GifWrapper>
            {/* <Gif src={gifUrl} alt={name} />  */}
            </GifWrapper> 
            <TitleWrapper>
            <TimerTitle>Time</TimerTitle>
            </TitleWrapper>
            <TimerWrapper>
              <CountdownCircleTimer >
                 {/* renderTime  */}
              </CountdownCircleTimer>
            </TimerWrapper>
            <TimerButtonWrapper>
           <TimerButton  onClick={handleAddToDiary}>
              {/* <IconPause>
              <use href={`${sprite}#icon-pause`} />
              </IconPause>  */}  
          </TimerButton>  
            </TimerButtonWrapper>
            
          <CaloriesWrapper>
              <Calories> Burned calories: {/* <span className="caloriesSpan">{calculatedCalories}</span> */} </Calories>
              </CaloriesWrapper>
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



