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

const ExercisesItem = ({ calories, target, NameBodyPart, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickStart = () => {
    // console.log('start');
    setIsModalOpen((prevState) => !prevState);
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
