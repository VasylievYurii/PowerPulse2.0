import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 34px;
  padding-bottom: 34px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-width: 694px;
    padding-left: 16px;
    padding-right: 16px;
    gap: 16px;
    justify-content: space-around;
  }
`;

export const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const Gif = styled.img`
  object-fit: cover;
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid var(--color-main-one);
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    min-height: 422px;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 12px 32px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  text-align: left;
  background-color: ${(props) => props.color || 'var(--color-main-one)'};
  border-radius: 12px;
  border: 1px solid var(--color-main-one);
  cursor: pointer;
  align-self: flex-start;
  transition: border 0.3s var(--timing-function);

  &:hover,
  &:focus {
    background-color: ${(props) => props.$hoverColor ||'var(--color-main-two)'};
    border: 1px solid var(--color-main-two);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    align-self: flex-end;
  }
`;
