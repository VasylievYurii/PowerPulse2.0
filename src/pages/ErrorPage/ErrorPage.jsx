import {
  Container,
  Svg,
  Content,
  Title,
  Text,
  StyledLink,
  Section404,
  LogoText,
  ButtonWrapper,
  LinkStyled,
} from './ErrorPage.styled';
import sprite from '../../assets/sprite.svg';

const ErrorPage = () => {
  return (
    <Section404>
      <Container>
        <StyledLink to="/welcome">
          <Svg>
            <use href={`${sprite}#icon-vector`} />
          </Svg>
          <LogoText>
            <use href={`${sprite}#icon-powerpulse`} />
          </LogoText>
        </StyledLink>

        <Content>
          <Title>404</Title>
          <Text>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Text>
          <LinkStyled to="/welcome">
            <ButtonWrapper>Go Home</ButtonWrapper>
          </LinkStyled>
        </Content>
      </Container>
    </Section404>
  );
};

export default ErrorPage;
