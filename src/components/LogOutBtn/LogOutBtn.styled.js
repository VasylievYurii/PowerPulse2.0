import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoutRouteStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text);
  font-size: 16px;
`;

export const LogoutIcon = styled.svg`
  fill: transparent;
  stroke: var(--color-text);
  width: 20px;
  height: 20px;
`;
