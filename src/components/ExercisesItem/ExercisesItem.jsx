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
} from './ExercisesItem.styled.js';
import sprite from '../../assets/sprite.svg';
const ExercisesItem = ({ calories, target, NameBodyPart, equipment }) => {
  return (
    <WraperExercisesItem>
      <HeaderIndexes>
        <p>WORKOUT</p>
        <WraperStart>
          <TextStart>Start</TextStart>
          <IconWrapperStart>
            <use href={`${sprite}#icon-run`} height={13} width={13} />
          </IconWrapperStart>
        </WraperStart>
      </HeaderIndexes>
      <WraperNameExes>
        <IconWrapper>
          <use href={`${sprite}#icon-run`} height={17} width={17} />
        </IconWrapper>
        <NameExes>{equipment}</NameExes>
      </WraperNameExes>
      <WraperIndexes>
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
      </WraperIndexes>
    </WraperExercisesItem>
  );
};

export default ExercisesItem;
