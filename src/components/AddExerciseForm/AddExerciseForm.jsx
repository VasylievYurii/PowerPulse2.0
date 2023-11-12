import React from 'react';
import {Container, LeftContainer, GifWrapper, Timer, CountdownCircleTimer, Calories, RightContainer, List, ListItem, ButtonContainer} from './AddExerciseForm.styled';

const AddExerciseForm = () => {

    return (
      <Container>
        <LeftContainer>
          <GifWrapper>
            <Gif src={gifUrl} alt={name} />
          </GifWrapper>
          <Timer>
            <TimerTitle>Time</TimerTitle>
            <TimerWrapper>
              <CountdownCircleTimer >
                 {/* renderTime */}
              </CountdownCircleTimer>
            </TimerWrapper>
            <TimerButton type="button" onClick={toggleIsPlaying}>
             {/*  <svg className="timerButtonIcon">
                <use href={isPlaying ? `${sprite}` : `${sprite}`} />
              </svg> */}
            </TimerButton>
            <Calories>
              Burned calories: <span className="caloriesSpan">{calculatedCalories}</span>
            </Calories>
          </Timer>
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
            <Button title="Add to diary" onClick={handleAddToDiary} />
          </ButtonContainer>
        </RightContainer>
      </Container>
    );
  };

export default AddExerciseForm;



