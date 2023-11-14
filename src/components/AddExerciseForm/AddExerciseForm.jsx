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

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export const ExersiceModalWindow = () => {
  const { bodyPart, equipment, burnedCalories, gifUrl, name, target, _id, time } = data;
}

const formattedDate = formatDate(date);

const handleAddToDiary = () => {
  if (!amount) {
    toast.error('Must be greater than 0');
    return;
  }

  dispatch(
    addExercise({
      date: formattedDate, 
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



