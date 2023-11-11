import styled from 'styled-components';

export const Heading = styled.h1`
  width: 335px;
  margin-bottom: 40px;
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05; /* 105.263% */
  letter-spacing: 0.38px;

  @media screen and (min-width: 768px) {
    width: 598px;
    font-size: 70px;
    line-height: 1.11; /* 111.429% */
    letter-spacing: 0.7px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 231px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const WelcomeButton = styled.button`
  display: block;
  min-width: 136px;
  padding: 12px 40px;
  text-align: center;
  font-size: 16px;
  color: var(--color-text);
  border-radius: 12px;
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  @media screen and (min-width: 768px) {
    min-width: 190px;
    padding: 16px 60px;
    font-size: 20px;
  }
`;

export const WelcomePrimaryBtn = styled(WelcomeButton)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`;

export const WelcomeOutlinedBtn = styled(WelcomeButton)`
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  &:hover,
  &:focus {
    border: 1px solid var(--color-main-one);
  }
`;
