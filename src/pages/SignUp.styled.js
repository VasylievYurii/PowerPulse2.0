import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TitleSignupStyled = styled.h1`
font-size: 24px;
line-height: 1.16;
color: var(--color-text);
margin-bottom: 14px;
`

export const ParagrStyled = styled.p`
font-size: 14px;
line-height: 1.28;
color: rgba(239, 237, 232, 0.30);
margin-bottom: 28px;
`

export const NavLinkStyled = styled(NavLink)`
line-height: 1.5;
color:  var(--color-text);
text-decoration: underline;
`

export const TextRedirectStyled = styled.p`
line-height: 1.5;
color: rgba(239, 237, 232, 0.60);
margin-top: 12px;
margin-bottom: 0;
`