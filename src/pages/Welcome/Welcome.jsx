import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import SectionTemplateNoAuth from '../../components/SectionTemplateNoAuth';
import SectionTemplateLeft from '../../components/SectionTemplateLeft';
import SecondWrapperTemplate from '../../components/SecondWrapperTemplate';
import WelcomeStats from '../../components/WelcomeStats';
import {
  Buttons,
  Heading,
  WelcomeOutlinedBtn,
  WelcomePrimaryBtn,
  CircleStyled,
} from './Welcome.styled.js';
import sprite from '../../assets/sprite.svg';

const Welcome = () => {
  return (
    <SectionTemplateNoAuth>
      <SectionTemplateLeft>
        <Logo />
        <SecondWrapperTemplate>
          <Heading>
            Transforming your{' '}
            <span>
              body
              <CircleStyled>
                <use href={`${sprite}#icon-line`} />
              </CircleStyled>
              &nbsp;
            </span>
            shape with Power Pulse
          </Heading>
          <Buttons>
            <Link to="/signup">
              <WelcomePrimaryBtn>Sign Up</WelcomePrimaryBtn>
            </Link>
            <Link to="/signin">
              <WelcomeOutlinedBtn>Sign In</WelcomeOutlinedBtn>
            </Link>
          </Buttons>
        </SecondWrapperTemplate>
      </SectionTemplateLeft>

      <WelcomeStats />
    </SectionTemplateNoAuth>
  );
};

export default Welcome;
