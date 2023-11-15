import styled from 'styled-components';

export const IconSettings = styled.svg`
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  fill: ${(props) => props.color || 'none'};
  stroke: ${(props) => props.color || 'var(--color-back-two)'};
  display: block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
  @media screen and (min-width: 768px) {
    width: ${(props) => props.size || '28px'};
    height: ${(props) => props.size || '28px'};
  }
`;

export const IconUser = styled.svg`
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
  fill: ${(props) => props.color || 'var(--color-back-two)'};
  display: block;
  transition: fill 0.3s var(--timing-function);
`;

export const UserWrapper = styled.div`
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  width: 37px;
  height: 37px;
  ${IconUser} {
    padding: 11px;
  }
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 37px;
  height: 37px;
  position: relative;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
