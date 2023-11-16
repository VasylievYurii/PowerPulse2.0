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
} from './ExercisesItem.styled.js';
import sprite from '../../assets/sprite.svg';

const ExercisesItem = ({ calories, target, NameBodyPart, name }) => {
  return (
    <WrapperExercisesItem>
      <HeaderIndexes>
        <p>WORKOUT</p>
        <WrapperStart>
          <TextStart>Start</TextStart>
          <IconWrapperStart>
            <use href={`${sprite}#icon-arrow`} height={24} width={24} />
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
          <IndexesText>Body part:</IndexesText>
          <IndexesValue>{NameBodyPart}</IndexesValue>
        </Indexes>
        <Indexes>
          <IndexesText>Target:</IndexesText>
          <IndexesValue>{target}</IndexesValue>
        </Indexes>
      </WrapperIndexes>
    </WrapperExercisesItem>
  );
};

export default ExercisesItem;
