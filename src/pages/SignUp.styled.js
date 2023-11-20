import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TitleSignupStyled = styled.h1`
  font-size: 24px;
  line-height: 1.16;
  color: var(--color-text);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
`;

export const ParagrStyled = styled.p`
  font-size: 14px;
  line-height: 1.28;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    max-width: 496px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  line-height: 1.5;
  color: var(--color-text);
  text-decoration: underline;
`;

export const TextRedirectStyled = styled.p`
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
  margin-top: 12px;
  /* margin-bottom: ${(props) => (props.$margin ? '121px' : '35px')}; */

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    /* margin-bottom: ${(props) => (props.$margin ? '135px' : '39px')}; */
  }
`;
