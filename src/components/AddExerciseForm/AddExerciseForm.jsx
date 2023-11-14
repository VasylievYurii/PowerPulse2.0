import React from 'react';
import {
  ExersiceModalWindowWrap,
  ExersiceModalContainer,
  ExersiceModalImgWrapper,
  ExersiceModalWindowBtn,
  BoxBtn,
  ExersiceModalImg,
  ExersiceModalTimer,
} from './AddExerciseForm.styled';

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
    <ExersiceModalContainer>
      <ExersiceModalWindowWrap>
        <ExersiceModalImgWrapper>
          {/* <ExersiceModalImg src={gifUrl} alt={name} /> */}
        </ExersiceModalImgWrapper>
        <ExersiceModalTimer>
          {/* <Timer
            data={data}
            setDinamicBurnCal={setDinamicBurnCal}
            dinamicBurnCal={dinamicBurnCal}
            setDinamicTime={setDinamicTime}
          /> */}
        </ExersiceModalTimer>
       {/*  <ExersiceModalWindowList
          name={name}
          bodypart={bodyPart}
          target={target}
          equipment={equipment}
          time={time}
        /> */}
        <BoxBtn>
          <ExersiceModalWindowBtn type="button" onClick={handleAddToDiary}>
            Add to diary
          </ExersiceModalWindowBtn>
        </BoxBtn>
      </ExersiceModalWindowWrap>
    </ExersiceModalContainer>
  )
  };

export default AddExerciseForm;



