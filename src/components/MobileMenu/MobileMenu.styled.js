import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackdropMenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #04040466;
`;

export const MenuContainerStyled = styled.div`
  right: 0;
  margin-left: auto;
  height: 100vh;
  max-width: 350px;
  background-color: var(--color-main-one);
  padding: 26px 32px 32px 32px;

  position: relative;
`;

export const CloseMenuBtnStyled = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  stroke: white;
  top: 26px;
  right: 32px;
  padding: 10px;
  border: 1px solid white;
`;

export const NavContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transform: translateY(50%);
`;

export const LinkStyled = styled(NavLink)`
  color: var(--color-text);
  padding: 10px 27px;
  border: 1px solid #efede833;
  border-radius: 12px;

  &.active {
    border-color: var(--color-text);
  }
`;

export const LogoutRouteStyled = styled(Link)`
  position: absolute;
  bottom: 32px;
  left: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text);
`;

export const LogoutIcon = styled.svg`
  fill: var(--color-text);
  filter: invert(1);
  width: 20px;
  height: 20px;

  outline: 1px solid white;
`;
