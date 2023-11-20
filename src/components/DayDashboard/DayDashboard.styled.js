import styled from 'styled-components';

export const DashSection = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`;

export const DashList = styled.ul`
  display: flex;
  column-gap: 13px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    width: 593px;
    height: 250px;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
    height: 100%;
    flex-direction: row;
    gap: 16px;
  }
`;

export const DashIndicators = styled.li`
position: relative;
  width: 159px;
  flex-basis: calc((100% - 1*13px) / 2);
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
  border: ${(props) =>
    props.$border
      ? `1px solid ${props.$border}`
      : '1px solid rgba(239, 237, 232, 0.20)'};
  background: ${(props) => props.color || 'rgba(239, 237, 232, 0.05)'};

  @media screen and (min-width: 768px) {
    flex-basis: auto;
    width: 187px;
    height: 116px;
    padding: 18px;
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const DashTitle = styled.h3`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${(props) => props.color || 'rgba(239, 237, 232, 0.40)'};
  font-weight: 400;
  line-height: 1.33;
  font-size: 12px;
  font-style: normal;
  margin: 0;

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`;

export const Message = styled.p`
    font-size: 12px;
    font-weight: 400;
`;

export const WrapDashText = styled.div`
  display: flex;
  gap: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 593px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;

export const DashIconWrapper = styled.svg`
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  fill: ${(props) => props.fill || 'none'};
  stroke: ${(props) => props.stroke || 'var(--color-text)'};
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;

export const DashIconExclamationWrapper = styled.svg`
  fill: var(--color-main-two);
  stroke: var(--color-text);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-main-two);
`;

export const IconWrapper = styled.div`
  display: block;
  width: 24px;
  height: 24px;
`;
