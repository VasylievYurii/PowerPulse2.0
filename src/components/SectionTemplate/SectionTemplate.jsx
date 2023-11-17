import { Section, Container } from './SectionTemplate.styled';
import { useLocation } from 'react-router-dom';

function SectionTemplate({ children }) {
  const location = useLocation();

  return (
    <Section pathname={location.pathname}>
      <Container>{children}</Container>
    </Section>
  );
}
export default SectionTemplate;
