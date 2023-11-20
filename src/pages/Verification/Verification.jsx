import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import SectionTemplateNoAuth from '../../components/SectionTemplateNoAuth';
import SectionTemplateLeft from '../../components/SectionTemplateLeft';
import SecondWrapperTemplate from '../../components/SecondWrapperTemplate';
import TitleSignupStyled from '../SignUp.styled';
import { Buttons, WelcomePrimaryBtn } from '../Welcome/Welcome.styled';

const Verification = () => {
  return (
    <SectionTemplateNoAuth>
      <SectionTemplateLeft>
        <Logo />
        <SecondWrapperTemplate>
          <TitleSignupStyled>
            Your email has been verified successfully!
          </TitleSignupStyled>
          <Buttons>
            <Link to="/signin">
              <WelcomePrimaryBtn>Sign In</WelcomePrimaryBtn>
            </Link>
          </Buttons>
        </SecondWrapperTemplate>
      </SectionTemplateLeft>
    </SectionTemplateNoAuth>
  );
};

export default Verification;
