import {
  TitleModalStyled,
  NavLinkExStyled,
  ButtonExerStyled,
} from './AddExerciseSuccess.styled';
import { NavLink } from 'react-router-dom';

const AddExerciseSuccess = () => {
  return (
    <div>
      <img src="../../assets/thumb_up_color.png" alt="Thumb up" />
      <TitleModalStyled>Well done</TitleModalStyled>
      <p>Your time:</p>
      <p>Burned calories:</p>
      <ButtonExerStyled>Next Exercise</ButtonExerStyled>
      <NavLinkExStyled to="/diary">
        To the diary
        <svg>
          <use />
        </svg>
      </NavLinkExStyled>
    </div>
  );
};

export default AddExerciseSuccess;
