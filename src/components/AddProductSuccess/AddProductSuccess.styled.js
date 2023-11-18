import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgProduct = styled.img`
  width: 123px;
  height: 84px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-text);

  margin-top: 16px;

  @media screen and (min-width: 768px) {
    text-align: center;
    margin-top: 32px;
  }
`;

export const Calories = styled.p`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #efede84d;

  margin-top: 16px;

  > span {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--color-main-one);
  }
`;

export const Next = styled.button`
  width: 157px;
  height: 42px;
  padding: 12px 32px 12px 32px;
  border-radius: 12px;
  border: none;
  gap: 10px;

  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-text);
  background-color: var(--color-main-one);

  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    line-height: 24px;
    height: 52px;
    padding: 14px 32px 14px 32px;
  }
`;

export const ToTheDairy = styled(Link)`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 8px;
  padding: 0;
  margin-top: 16px;

  > span {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #efede84d;
  }

  > svg {
    width: 16px;
    height: 16px;
    stroke: #efede84d;
  }
`;
