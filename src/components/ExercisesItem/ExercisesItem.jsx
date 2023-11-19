import { useState } from 'react';
import {
  Indexes,
  IndexesText,
  IndexesValue,
  WrapperIndexes,
  HeaderIndexes,
  TextStart,
  NameExes,
  WrapperExercisesItem,
  IconWrapper,
  WrapperNameExes,
  WrapperStart,
  IconWrapperStart,
  IndexesTextBody,
  IndexesTextTarget,
  IndexesValueBody,
  ExercisesTitle,
} from './ExercisesItem.styled.js';
import sprite from '../../assets/sprite.svg';
import AddExerciseForm from '../../components/AddExerciseForm/index';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow.jsx';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../../redux/workouts/workoutsOperations';


const ExercisesItem = ({ calories, target, NameBodyPart, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const onClickStart = () => {
    // console.log('start');
    setIsModalOpen((prevState) => !prevState);
    dispatch(
      addWorkout({
         date: new Date(),
         time: 2,
         exercise_id: '64f2458d6f67bc34bae4f7f4',
        
       }),
     );
  };
  return (
    <>
      <WrapperExercisesItem>
        <HeaderIndexes>
          <ExercisesTitle>WORKOUT</ExercisesTitle>
          <WrapperStart onClick={onClickStart}>
            <TextStart>Start</TextStart>
            <IconWrapperStart>
              <use href={`${sprite}#icon-arrow`} />
            </IconWrapperStart>
          </WrapperStart>
        </HeaderIndexes>
        <WrapperNameExes>
          <IconWrapper>
            <use href={`${sprite}#icon-run`} height={17} width={17} />
          </IconWrapper>
          <NameExes>{name}</NameExes>
        </WrapperNameExes>
        <WrapperIndexes>
          <Indexes>
            <IndexesText>Burned calories:</IndexesText>
            <IndexesValue>{calories}</IndexesValue>
          </Indexes>
          <Indexes>
            <IndexesTextBody>Body part:</IndexesTextBody>
            <IndexesValueBody>{NameBodyPart}</IndexesValueBody>
          </Indexes>
          <Indexes>
            <IndexesTextTarget>Target:</IndexesTextTarget>
            <IndexesValueBody>{target}</IndexesValueBody>
          </Indexes>
        </WrapperIndexes>
      </WrapperExercisesItem>
      {isModalOpen && (
        <BasicModalWindow onClick={onClickStart}>
          <AddExerciseForm onClick={onClickStart} />
        </BasicModalWindow>
      )}
    </>
  );
};

export default ExercisesItem;
