import React from 'react';
import {Container,LeftContainer,  GifWrapper,/* Gif, */TitleWrapper,TimerWrapper, TimerTitle, CountdownCircleTimer, /* IconPause */TimerButtonWrapper, TimerButton, CaloriesWrapper,  Calories,RightContainer,List,ListItem, ItemTitle,ButtonContainer, Button} from './AddExerciseForm.styled';

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
          
            </LeftContainer>
        <RightContainer>
          <List>
            <ListItem>
              <ItemTitle>Name</ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>Target</ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>Body Part</ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>Equipment</ItemTitle>
            </ListItem>
          </List>
          <ButtonContainer>
            <Button type="button" onClick={handleAddToDiary} >
            Add to diary
              </Button>
          </ButtonContainer>
        </RightContainer>
      </Container>
    );
  };

export default AddExerciseForm;



