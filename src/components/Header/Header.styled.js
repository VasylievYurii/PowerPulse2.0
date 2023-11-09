import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff;
  transition: color 0.3s var(--timing-function);

  &:hover,
  &:focus {
    color: var(--color-main-one);
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  fill: ${(props) => props.color || 'none'};
  stroke: ${(props) => props.color || 'var(--color-back-two)'};
  display: inline-block;
  margin-right: 5px;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;
