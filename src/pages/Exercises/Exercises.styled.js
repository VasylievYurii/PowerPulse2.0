import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ChaptersWrapper = styled.ul`
  display: flex;
  justify-content: end;
  gap: 28px;
`;

export const LinkStyled = styled(NavLink)`
  position: relative;
  display: block;
  color: rgba(239, 237, 232, 0.4);

  &.active {
    color: var(--color-text);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: var(--color-main-one);
      border-radius: 2px;
    }
  }
`;
