import {
  TitleModalStyled,
  NavLinkExStyled,
  ButtonExerStyled,
  TextExerStyled,
  WrapTextExerStyled,
  ContainerExerStyled,
  SvgEferArrow,
  ImgThumbUp,
} from './AddExerciseSuccess.styled';
import sprite from '../../assets/sprite.svg';

import imageThumbUp from '../../assets/thumb_up.png';


const AddExerciseSuccess = ({ onClick }) => {
  const handleCloseClick = () => {
    onClick();
  };

  return (
    <ContainerExerStyled>

      <ImgThumbUp src={imageThumbUp} alt="Thumb up" />

      <TitleModalStyled>Well done</TitleModalStyled>
      <WrapTextExerStyled>
        <TextExerStyled>
          Your time: <span>3 minutes</span>
        </TextExerStyled>
        <TextExerStyled>
          Burned calories: <span>250</span>
        </TextExerStyled>
      </WrapTextExerStyled>
      <ButtonExerStyled onClick={handleCloseClick}>
        Next Exercise
      </ButtonExerStyled>
      <NavLinkExStyled to="/diary">
        To the diary
        <SvgExerArrow>
          <use href={`${sprite}#icon-arrow`} />
        </SvgExerArrow>
      </NavLinkExStyled>
    </ContainerExerStyled>
  );
};

export default AddExerciseSuccess;
