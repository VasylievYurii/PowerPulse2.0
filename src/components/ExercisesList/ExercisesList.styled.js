import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperExercises = styled.div`
  width: 335px;
  height: 726px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 32px;
  margin-top: 70px;
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

export const NameExersises = styled.p`
  font-size: 32px;
  font-weight: 700;
  padding-left: 32px;
  padding-top: 14px;
`;

export const GeneralWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ButtonGoBack = styled.button`
  width: 65px;
  display: flex;
  background: none;
  border: 0;
  margin-top: 10px;
  margin-left: 32px;
`;

export const LinkBtn = styled(Link)`
  color: rgba(239, 237, 232, 0.4);
  padding-left: 8px;
  font-size: 14px;
`;

export const IconWraperBack = styled.svg`
  fill: rgba(239, 237, 232, 1);
  padding-top: 2px;
  width: 36px;
  height: 24px;
`;
