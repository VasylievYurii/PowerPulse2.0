import { Container, Title, Text, LinkBtn, Button } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Text>Sorry, you have reached a page that we could not find. It seems that you are lost among
        the numbers and letters of our virtual space. Perhaps this page went on vacation or
        decided to disappear into another dimension. We apologize for this inconvenience.</Text>
      <LinkBtn to="/diary">
        <Button>Go Home</Button>
      </LinkBtn>
    </Container>
  );
};

export default ErrorPage;

