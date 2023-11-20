import styled from 'styled-components';

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  > div {
    width: auto;
    height: auto;
  }
`;

export const TimerTitle = styled.h1`
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
  margin-bottom: 4px;
`;

export const Clock = styled.div`
  display: flex;
  color: var(--color-text);
  font-size: 16px;
  line-height: 24px;
`;

export const StartBtn = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--color-text);
  fill: var(--color-text);
`;

export const PauseBtn = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--color-text);
  fill: var(--color-text);
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-main-one);
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-top: 14px;
  padding: 5px;
  border-radius: 4px;
`;

export const BurnedCalories = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
  > span {
    color: var(--color-main-one);
  }
`;
