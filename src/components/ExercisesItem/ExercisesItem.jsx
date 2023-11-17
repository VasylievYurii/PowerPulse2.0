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
} from './ExercisesItem.styled.js';
import sprite from '../../assets/sprite.svg';

const ExercisesItem = ({
  calories,
  target,
  NameBodyPart,
  name,
  onClickStart,
}) => {
  return (
    <WrapperExercisesItem>
      <HeaderIndexes>
        <p>WORKOUT</p>
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
  );
};


export default ExercisesItem;
