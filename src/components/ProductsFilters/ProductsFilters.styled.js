import styled from 'styled-components';

export const LabelEl = styled.label`
  position: relative;
`;

export const InputEl = styled.input`
  width: 100%;

  padding: 14px;
  border-radius: 12px;
  width: 270px;
  background-color: transparent;
  color: var(--color-text);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;

  @media screen and (min-width: 375px) {
    box-sizing: border-box;
    width: 335px;
    height: 46px;
    padding: 14px;

    background-color: transparent;
    color: var(--color-text);
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-main-one);
  }

  &::placeholder {
    color: var(--color-text);
  }
`;

export const SearchBtnSearch = styled.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`;

export const SearchSvgSearch = styled.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`;

export const SearchBtnClose = styled.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`;

export const SearchSvgClose = styled.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`;
