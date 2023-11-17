import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperExercises = styled.div`
  width: 335px;
  height: 726px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    width: 768px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 8px;
      height: 2px;
    }
    &::-webkit-scrollbar-thumb {
      width: 8px;
      height: 114px;
      background: rgba(239, 137, 100, 1);
      border-radius: 12px;
    }
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
