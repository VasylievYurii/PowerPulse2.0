import { SectionNoAuth, ContainerNoAuth } from './SectionTemplateNoAuth.styled';

function SectionTemplateNoAuth({ children }) {
  return (
    <SectionNoAuth pathname={location.pathname}>
      <ContainerNoAuth>{children}</ContainerNoAuth>
    </SectionNoAuth>
  );
}
export default SectionTemplateNoAuth;
