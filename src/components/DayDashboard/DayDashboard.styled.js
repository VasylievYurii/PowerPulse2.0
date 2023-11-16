import styled from 'styled-components';

export const DashSection = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const DashList = styled.ul`
  display: flex;
  column-gap: 13px;
  row-gap: 20px;
  flex-wrap: wrap;
  
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const DashIndicators = styled.li`
    width: 159px;
    height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 14px;
    color: var(--color-text);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.11;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.20);
    background: ${(props) => props.color || 'rgba(239, 237, 232, 0.05)' };

  @media screen and (min-width: 768px) {
    width: 214px;
    height: 108px;
  }
`;

export const DashTitle = styled.h3`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${(props) => props.color || 'rgba(239, 237, 232, 0.40)' };
font-weight: 400;
line-height: 1.33;
font-size: 12px;
font-style: normal;
margin: 0;
`;

export const WrapDashText = styled.div`
  display: flex;
  gap: 8px;
  color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;
  
  @media screen and (min-width: 768px) {
    width: 420px;
  }
  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`;

export const DashIconWrapper = styled.svg`
  width: ${(props) => props.size || '20px' };
  height: ${(props) => props.size || '20px' };
  fill: ${(props) => props.fill || 'none' };
  stroke: ${(props) => props.stroke || 'var(--color-text)' };
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;

