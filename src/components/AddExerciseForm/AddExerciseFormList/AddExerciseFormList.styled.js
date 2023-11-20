import styled from 'styled-components';

export const ExerciseList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 8px;
  column-gap: 8px;
  padding-left: 2px;
  padding-right: 2px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 345px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ExerciseFormItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 147px;
  height: 62px;
  padding: 12px 18px;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 168px;
  }
`;

export const ExerciseFormSub = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 16px;
`;

export const ExerciseFormTitle = styled.p`
  color: var(--white-color);
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: left;

  &:hover {
    overflow: visible;
  }
`;
