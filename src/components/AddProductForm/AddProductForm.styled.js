import { Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 38px 22px;
`;

export const InputsContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InputEl = styled(Field)`
  box-sizing: border-box;

  width: 100%;
  padding: 8px 14px;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.28; /* 128.571% */
  color: var(--color-text);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: border-color 0.3s var(--timing-function);

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-main-one);
  }

  &::placeholder {
    color: var(--color-text);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5; /* 150% */
  }
`;

export const ProductInput = styled(InputEl)`
  color: rgba(239, 237, 232, 0.3);
  border: 1px solid var(--color-main-one);

  @media screen and (min-width: 768px) {
    width: 244px;
  }
`;

export const WeightInputLabel = styled.label`
  display: block;
  position: relative;
`;

export const WeightInput = styled(InputEl)`
  @media screen and (min-width: 768px) {
    width: 155px;
  }
`;

export const FieldLabel = styled.span`
  position: absolute;
  top: 50%;
  right: 14px;
  color: rgba(239, 237, 232, 0.4);
  transform: translate(0, -50%);
  /* color:; */
`;

export const Calories = styled.p`
  margin-bottom: 24px;
  text-align: left;
  line-height: 1.5; /* 150% */
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const CaloriesValue = styled.span`
  color: var(--color-text);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const PFButton = styled.button`
  display: block;

  padding: 12px 32px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  color: var(--color-text);
  border-radius: 12px;
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
  }
`;

export const PFPrimaryBtn = styled(PFButton)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`;

export const PFOutlinedBtn = styled(PFButton)`
  width: 121px;
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  &:hover,
  &:focus {
    border: 1px solid var(--color-main-one);
  }

  @media screen and (min-width: 768px) {
    width: 142px;
  }
`;
