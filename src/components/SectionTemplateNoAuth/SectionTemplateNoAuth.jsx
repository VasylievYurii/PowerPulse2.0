import { SectionNoAuth, ContainerNoAuth } from './SectionTemplateNoAuth.styled';

function SectionTemplateNoAuth({ children }) {
  return (
    <SectionNoAuth>
      <ContainerNoAuth>{children}</ContainerNoAuth>
    </SectionNoAuth>
  );
}
export default SectionTemplateNoAuth;
