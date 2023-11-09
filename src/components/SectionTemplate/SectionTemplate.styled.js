import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  max-width: 420px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 860px) {
    max-width: 860px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
