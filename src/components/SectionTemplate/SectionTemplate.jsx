import { Section, Container } from './SectionTemplate.styled';

function SectionTemplate({ children }) {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  );
}
export default SectionTemplate;
