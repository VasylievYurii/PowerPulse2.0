import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WraperExercises = styled.div`
  width: 335px;
  height: 726px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 70px;
  padding: 32px;

  @media screen and (min-width: 768px) {
    width: 768px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 8px;
      height: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(239, 137, 100, 1);
      width: 8px;
      height: 114px;
      border-radius: 12px;
    }
  }
`;

export const NameExercises = styled.p`
  font-size: 32px;
  font-weight: 700;
  padding-left: 32px;
  padding-top: 14px;
`;
export const GeneralWraper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const ButtonGoBack = styled.button`
  display: flex;
  width: 65px;
  background: none;
  border: 0;
  margin-left: 32px;
  margin-top: 10px;
`;
export const LinkBtn = styled(Link)`
  color: rgba(239, 237, 232, 0.4);
  padding-left: 8px;
  font-size: 14px;
`;

export const IconWrapperBack = styled.svg`
  width: 36px;
  height: 24px;
  fill: rgba(239, 237, 232, 1);
  padding-top: 2px;
`;
