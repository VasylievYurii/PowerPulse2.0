import styled from 'styled-components';

export const ErrorMess = styled.div`
  font-size: 10px;
  color: #e6533c;
  margin-top: 4px;
  max-width: 146px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  margin-top: 40px;
  width: 115px;
  height: 42px;
  justify-content: center;
  background-color: #e6533c;
  border-radius: 12px;
  color: #efede8;
  border-width: 0;

  &:hover {
    background-color: var(--color-main-two);
  }
`;

export const SuccessText = styled.div`
  margin-top: 15px;
`;
