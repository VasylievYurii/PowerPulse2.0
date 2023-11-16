import styled from 'styled-components';

export const Indexes = styled.div`
  display: flex;
  gap: 4px;
  height: 18px;
`;
export const IndexesText = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  width: 86px;
`;
export const IndexesTextBody = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  width: 55px;
`;

export const IndexesTextTarget = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  width: 37px;
`;
export const IndexesValue = styled.p`
  color: rgba(239, 237, 232, 1);
  font-size: 12px;
  font-weight: 400;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const IndexesValueBody = styled.p`
  color: rgba(239, 237, 232, 1);
  font-size: 12px;
  font-weight: 400;
  display: ${(props) => props.display || 'inline-block'};
  width: ${(props) => props.width || '32px'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const WraperIndexes = styled.div`
  display: flex;
  gap: 16px;

  width: 295px;
  height: 40px;
`;
export const HeaderIndexes = styled.div`
  display: flex;
  gap: 175px;
  margin-bottom: 36px;
`;

export const TextStart = styled.p`
  color: rgba(230, 83, 60, 1);
  font-size: 14px;
  font-weight: 400;
`;
export const NameExes = styled.p`
  color: rgba(239, 237, 232, 1);
  font-size: 20px;
  font-weight: 400;
  display: ${(props) => props.display || 'inline-block'};
  width: ${(props) => props.width || '263px'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const WraperExercisesItem = styled.div`
  padding: 16px;
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
`;

export const IconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  fill: rgba(239, 237, 232, 1);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 50%;
  background: rgba(239, 160, 130, 1);
  padding-top: 3px;
  padding-left: 2px;
`;
export const WraperNameExes = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;
export const WraperStart = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconWrapperStart = styled.svg`
  padding-top: 3px;
  width: 20px;
  height: 20px;
`;
