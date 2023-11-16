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
import image from '../../assets/thumb_up.png';

const AddExerciseSuccess = ({ onClick }) => {
  const handleCloseClick = () => {
    onClick();
  };

  return (
    <ContainerExerStyled>
      <ImgThumbUp src={image} alt="Thumb up" />
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
          <use href={`${sprite}#icon-arrow`} width={16} height={16} />
        </SvgExerArrow>
      </NavLinkExStyled>
    </ContainerExerStyled>
  );
};

export default AddExerciseSuccess;
