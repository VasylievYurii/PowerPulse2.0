import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LogoutIcon, LogoutRouteStyled } from '../LogOutBtn/LogOutBtn.styled';

export const BackdropMenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #04040466;
`;

export const MenuContainerStyled = styled.div`
  position: relative;
  right: 0;
  margin-left: auto;
  height: 100vh;
  background-color: var(--color-main-one);
  padding: 26px 32px 32px 32px;

  @media (max-width: 374px) {
    max-width: 200px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 200px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 350px;
  }
`;

export const IconCross = styled.svg`
  width: 32px;
  height: 32px;
  fill: var(--color-text);
`;

export const CloseMenuBtnStyled = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  stroke: white;
  top: 26px;
  right: 32px;
`;

export const NavContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transform: translateY(100%);
`;

export const LinkStyled = styled(NavLink)`
  color: var(--color-text);
  padding: 10px 27px;
  border: 1px solid #efede833;
  border-radius: 12px;

  font-size: 16px;

  &.active {
    border-color: var(--color-text);
  }
`;

export const LogOutStyled = styled(LogoutRouteStyled)`
  position: absolute;
  bottom: 32px;
  left: 32px;
`;

export const LogOutIconOnMenuStyled = styled(LogoutIcon)``;
