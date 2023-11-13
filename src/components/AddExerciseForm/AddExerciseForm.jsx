import React from 'react';
import {TimerTitle, CountdownCircleTimer, TimerButton, Calories, ItemTitle,ButtonConteiner, Button} from './AddExerciseForm.styled';

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
      <div>
        <div>
        {/* <Gif src={gifUrl} alt={name} /> */}
          <TimerTitle>Time</TimerTitle>
          <CountdownCircleTimer >renderTime</CountdownCircleTimer>
           <TimerButton /* type="button" */ />  {/* onClick={}>
              <svg className="timerButtonIcon">
                <use href={isPlaying ? `${sprite}` : `${sprite}`} />
              </svg>   
          </TimerButton>  */}
          <Calories> Burned calories: {/* <span className="caloriesSpan">{calculatedCalories}</span> */} </Calories>
        </div>
        <div>
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
          <ButtonConteiner>
            <Button title="Add to diary" onClick={handleAddToDiary} >
              </Button>
          </ButtonConteiner>
        </div>
      </div>
    );
  };

export default AddExerciseForm;



