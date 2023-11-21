import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperExercises = styled.ul`
  width: 335px;
  max-height: 726px;

  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 710px;
    overflow-y: scroll;
    max-height: 487px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 2px;
      background: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
      width: 8px;
      height: 114px;
      background: rgba(239, 137, 100, 1);
      border-radius: 12px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 850px;
    margin-bottom: 10px;
  }
`;

export const NameExercises = styled.p`
  font-size: 32px;
  font-weight: 700;
  padding-top: 14px;
`;

export const ButtonGoBack = styled.button`
  width: 65px;
  display: flex;
  align-items: center;
  background: none;
  border: 0;
`;

export const LinkBtn = styled(Link)`
  color: rgba(239, 237, 232, 0.4);
  padding-left: 8px;
  font-size: 14px;
`;

export const IconWrapperBack = styled.svg`
  stroke: rgba(239, 237, 232, 0.4);
  width: 13px;
  height: 13px;
  transform: rotate(180deg);
  @media screen and (min-width: 1440px) {
    width: 16px;
    height: 16px;
  }
`;

export const WrapperNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;
