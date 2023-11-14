import styled from 'styled-components';

export const SectionNoAuth = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

export const ContainerNoAuth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  padding-bottom: 40px;
  height: 100vh;

  @media screen and (max-width: 767px) {
    gap: 65px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    flex-direction: row;
  }
`;
