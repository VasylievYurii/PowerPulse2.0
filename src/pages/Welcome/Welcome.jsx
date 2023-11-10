import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import SectionTemplate from '../../components/SectionTemplate/SectionTemplate';
import WelcomeStats from '../../components/WelcomeStats';
import {
  Buttons,
  Heading,
  WelcomeOutlinedBtn,
  WelcomePrimaryBtn,
} from './Welcome.styled.js';

const Welcome = () => {
  return (
    <SectionTemplate>
      <Logo />
      <Heading>Transforming your body shape with Power Pulse</Heading>
      <Buttons>
        <Link to="/signup">
          <WelcomePrimaryBtn>Sign Up</WelcomePrimaryBtn>
        </Link>
        <Link to="/signin">
          <WelcomeOutlinedBtn>Sign In</WelcomeOutlinedBtn>
        </Link>
      </Buttons>
      <WelcomeStats />
    </SectionTemplate>
  );
};

export default Welcome;
