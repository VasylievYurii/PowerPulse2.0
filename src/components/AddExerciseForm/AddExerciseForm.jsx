import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
/* import sprite from '../../images/svg/sprite.svg'; */
import PropTypes from 'prop-types';
/* import Button from 'components/Button/Button'; */
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
/*  import { fetchDiarySaveExercise } from 'redux/operations';  */
/* import toast from 'react-hot-toast'; */

import {Container, GifWrapper, Gif, Timer, TimerTitle, TimerWrapper, TimerButton, Calories,  RightContainer, List, ListItem, ItemTitle, ItemValue, ButtonContainer, Button} from './AddExerciseForm.styled'




const AddExerciseForm = ({ data, onSuccess }) => {
   const { _id, bodyPart, equipment, gifUrl, name, target, burnedCalories, time } = date; 

  const [currentTime, setCurrentTime] = useState(time * 60);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
  };

  const calculatedCalories = Math.floor((currentTime / 60) * (burnedCalories / 3)); 

  const handleAddToDiary = () => {
    if (!calculatedCalories) {
      return;
    }

    dispatch(
      fetchDiarySaveExercise({
        exercise: _id,
        time: Math.ceil(currentTime / 60),
        calories: calculatedCalories,
      }),
    )
      .then(onSuccess(currentTime, calculatedCalories))
      .catch((error) => {
        toast(error.message);
      });
  };

  const renderTime = ({ remainingTime }) => {
    setCurrentTime(time * 60 - remainingTime);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${minutes}:${seconds}`
       
  };
     onClick(); 
    // closeModal();
  

  return (
    <Container>
      <div>
        <GifWrapper>
         {/*  <Gif src={gifUrl} alt={name} /> */}
        </GifWrapper>
        <Timer>
          <TimerTitle>Time</TimerTitle>
          <TimerWrapper>
            <CountdownCircleTimer
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
            </CountdownCircleTimer> 
          </TimerWrapper>
          <TimerButton onClick={toggleIsPlaying}>
          {/* <use href={`${sprite}#icon-pause`} /> */}
          </TimerButton>
          <Calories>
            Burned calories: {/* <span className="caloriesSpan">{calculatedCalories}</span> */}
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
          <Button title="Add to diary" onClick={handleAddToDiary} />
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
};

export default AddExerciseForm;