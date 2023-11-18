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
} from './Welcome.styled.js';

const Welcome = () => {
  return (
    <SectionTemplateNoAuth>
      <SectionTemplateLeft>
        <Logo />
        <SecondWrapperTemplate>
          <Heading>Transforming your body shape with Power Pulse</Heading>
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
