import styled from 'styled-components';

export const Circle = styled.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${(props) =>
  props.color === 'false' ? 'var(--color-approved-two)': 'var(--color-wrong-two)'|| 'var(--color-back-two)'};
`;