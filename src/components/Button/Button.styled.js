import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  display: block;
  padding: 15px 45px;
  text-align: center;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  &:hover {
    background-color: var(--color-main-one);
    border: 1px solid var(--color-main-one);
  }
`;
