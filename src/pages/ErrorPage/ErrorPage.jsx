import { useNavigate } from 'react-router-dom';
import {
  Container,
  Left,
  Content,
  Title,
  Text,
  StyledLink,
} from './ErrorPage.styled';
import Button from '../../components/LogOutBtn';
import SectionTemplateNoAuth from '../../components/SectionTemplateNoAuth';

/* import svg */

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  console.log('404');
  return (
    <SectionTemplateNoAuth>
      {' '}
      <Container>
        <StyledLink to="/">
          {/*  <Svg>
          <use href={`$`} />
        </Svg> */}
        </StyledLink>
        <Left>
          <Content>
            <Title>404</Title>
            <Text>
              Sorry, you have reached a page that we could not find. It seems
              that you are lost among the numbers and letters of our virtual
              space. Perhaps this page went on vacation or decided to disappear
              into another dimension. We apologize for this inconvenience.
            </Text>
            <Button
              className="Button"
              text="Go Home"
              type="button"
              onClick={handleClick}
            />
          </Content>
        </Left>
      </Container>
    </SectionTemplateNoAuth>
  );
};

export default ErrorPage;
