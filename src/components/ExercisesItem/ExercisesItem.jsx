import {
  Indexes,
  IndexesText,
  IndexesValue,
  WraperIndexes,
  HeaderIndexes,
  TextStart,
  NameExes,
  WraperExercisesItem,
  IconWrapper,
  WraperNameExes,
  WraperStart,
  IconWrapperStart,
  IndexesTextBody,
  IndexesTextTarget,
  IndexesValueBody,
} from './ExercisesItem.styled.js';
import sprite from '../../assets/sprite.svg';
const ExercisesItem = ({ calories, target, NameBodyPart, name }) => {
  return (
    <WraperExercisesItem>
      <HeaderIndexes>
        <p>WORKOUT</p>
        <WraperStart>
          <TextStart>Start</TextStart>
          <IconWrapperStart>
            <use href={`${sprite}#icon-arrow`} height={24} width={24} />
          </IconWrapperStart>
        </WraperStart>
      </HeaderIndexes>
      <WraperNameExes>
        <IconWrapper>
          <use href={`${sprite}#icon-run`} height={17} width={17} />
        </IconWrapper>
        <NameExes>{name}</NameExes>
      </WraperNameExes>
      <WraperIndexes>
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
      </WraperIndexes>
    </WraperExercisesItem>
  );
};

export default ExercisesItem;
