import styled from 'styled-components';

export const ButtonSubmitStyled = styled.button`
  display: block;
  padding: 12px 40px;
  margin-top: 28px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  background-color: var(--color-main-one);
  border-radius: 12px;
  border: 1px solid var(--color-main-one);
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    padding: 16px 60px;
    margin-top: 64px;
  }
`;
