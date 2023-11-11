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
  font-size: 16px;
  line-height: 24px; 
  padding: 10px 27px;
  color: var(--color-text);
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.20);
  transition: background-color 0.3s var(--timing-function);


  &:hover,
  &:focus {
    background-color: var(--color-main-one);
  }
`;

export const StyledLinkSettings = styled(Link)`
  padding: 10px 27px;
  color: var(--color-text);
  background-color: transparent;
  border-radius: 12px;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
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

