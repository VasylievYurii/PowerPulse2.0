import styled from 'styled-components';

export const SecondWrapperTemplateStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 151px;
  }

  /* gap: 40px; */
  /* @media (orientation: landscape) {
    transform: scale(0.7);
  }

  @media (min-width: 769px) and (orientation: landscape) {
    transform: scale(0.8);
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    transform: scale(0.9);
  }

  @media (min-width: 1440) and (orientation: landscape) {
    transform: scale(1);
  } */
`;
