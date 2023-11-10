import SectionTemplate from '../../components/SectionTemplate/SectionTemplate';
import {
  Buttons,
  Heading,
  WelcomeOutlinedBtn,
  WelcomePrimaryBtn,
} from './Welcome.styled.js';

const Welcome = () => {
  return (
    <SectionTemplate>
      <Heading>Transforming your body shape with Power Pulse</Heading>
      <Buttons>
        <WelcomePrimaryBtn>Sign Up</WelcomePrimaryBtn>
        <WelcomeOutlinedBtn>Sign In</WelcomeOutlinedBtn>
      </Buttons>
    </SectionTemplate>
  );
};

export default Welcome;
