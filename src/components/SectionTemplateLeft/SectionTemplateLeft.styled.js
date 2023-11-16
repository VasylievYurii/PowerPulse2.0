import styled from 'styled-components';

export const LeftSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 598px;
  }
  @media screen and (min-width: 1440px) {
    height: auto;
    gap: 20%;
    justify-content: start;
  }
`;
