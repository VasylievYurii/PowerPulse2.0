import React from 'react';
import {TimerTitle, CountdownCircleTimer, TimerButton, Calories, ItemTitle, Button} from './AddExerciseForm.styled';


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
          <div>
            <Button title="Add to diary" /* onClick={handleAddToDiary} */ />
          </div>
        </div>
      </div>
    );
  };

export default AddExerciseForm;



