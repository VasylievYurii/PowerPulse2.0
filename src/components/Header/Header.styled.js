import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoutIcon, LogoutRouteStyled } from '../LogOutBtn/LogOutBtn.styled';

export const HeaderContainer = styled.div`
  @media (max-width: 374px) {
    padding: 12px 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    padding: 24px 20px;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    padding: 19px 26px;
  }

  @media (min-width: 1440px) {
    padding: 20px 96px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 27px;
  color: var(--color-text);
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: background-color 0.3s var(--timing-function);

  &:hover,
  &:focus {
    background-color: var(--color-main-one);
  }
`;

export const StyledLinkSettings = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--color-text);
  background-color: transparent;
  border-radius: 12px;
`;

export const IconSettings = styled.svg`
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
  fill: ${(props) => props.color || 'none'};
  stroke: ${(props) => props.color || 'var(--color-back-two)'};
  display: block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;

export const IconUser = styled.svg`
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
  fill: ${(props) => props.color || 'var(--color-back-two)'};
  display: block;
  transition: fill 0.3s var(--timing-function);
  &:hover,
  &:focus {
    fill: var(--color-main-one);
  }
`;

export const UserWrapper = styled.div`
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  padding: 11px;
  &:hover {
    ${IconUser} {
      fill: var(--color-main-one);
    }
  }
`;

export const Burger = styled.svg`
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
  fill: ${(props) => props.color || 'none'};
  stroke: ${(props) => props.color || 'var(--color-back-two)'};
  display: block;

  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SecondNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const LogoutWrapperStyled = styled(LogoutRouteStyled)``;

export const LogoutIconStyled = styled(LogoutIcon)`
  stroke: var(--color-main-one);
`;
