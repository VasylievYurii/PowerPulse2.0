import {
  TitleModalStyled,
  NavLinkExStyled,
  ButtonExerStyled,
  TextExerStyled,
  WrapTextExerStyled,
  ContainerExerStyled,
  SvgExerArrow,
  ImgThumbUp,
} from './AddExerciseSuccess.styled';
import sprite from '../../assets/sprite.svg';
import { selectOneWorkout } from '../../redux/selectors';
// import { addWorkout } from '../../redux/workouts/workoutsOperations';
import { useDispatch, useSelector } from 'react-redux';

import imageThumbUp from '../../assets/thumb_up_color.png';

const AddExerciseSuccess = ({ onClick }) => {
  // const dispatch = useDispatch();
  const oneWorkout = useSelector(selectOneWorkout);

  // const exerObject = {
  //   exercise_id: '64f2458d6f67bc34bae4f7f4',
  //   time: 2,
  //   date: new Date(),
  // };

  const handleCloseClick = () => {
    // dispatch(addWorkout(exerObject));

    onClick();
  };

  return (
    <ContainerExerStyled>
      <ImgThumbUp src={imageThumbUp} alt="Thumb up" loading="lazy" />

      <TitleModalStyled>Well done</TitleModalStyled>
      <WrapTextExerStyled>
        <TextExerStyled>
          Your time: <span>{oneWorkout?.time} minutes</span>
        </TextExerStyled>
        <TextExerStyled>
          Burned calories: <span>{oneWorkout?.burnedCalories}</span>
        </TextExerStyled>
      </WrapTextExerStyled>
      <ButtonExerStyled onClick={handleCloseClick}>
        Next Exercise
      </ButtonExerStyled>
      <NavLinkExStyled to="/diary">
        <TextExerStyled>To the diary</TextExerStyled>
        <SvgExerArrow>
          <use href={`${sprite}#icon-arrow`} />
        </SvgExerArrow>
      </NavLinkExStyled>
    </ContainerExerStyled>
  );
};

export default AddExerciseSuccess;
