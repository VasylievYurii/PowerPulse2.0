import styled from 'styled-components';

export const VideoStats = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 15px;
  gap: 8px;
  width: 146px;
  height: 66px;
  padding: 14px 18px;
  border-radius: 12px;
  background: var(--color-back-two);

  @media screen and (min-width: 768px) {
    gap: 12px;
    width: 206px;
    height: 96px;
  }
  @media screen and (min-width: 1440px) {
    width: 206px;
    height: 96px;
  }
`;

export const CalStats = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 119px;
  height: 76px;
  padding: 14px 18px;
  border-radius: 12px;
  background: var(--color-main-two);

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
  }
  @media screen and (min-width: 1440px) {
    width: 180px;
    height: 110px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 9px;
  background-color: var(--color-main-two);
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const IconRunWrapper = styled(Wrapper)`
  margin-bottom: 4px;
  width: 20px;
  height: 20px;
  padding: 4px;
  background-color: var(--color-main-three);
`;

export const IconWrapper = styled.svg`
  width: 12px;
  height: 12px;
  fill: #efede8;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StatThumb = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

export const VideoCount = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const CalCount = styled.p`
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Descr = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.65);
`;

export const StatsWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 230px;
  height: 230px;
  @media screen and (orientation: portrait) {
    /* position: relative; */
  }
  @media screen and (min-width: 768px) {
    width: 405px;
    height: 262px;
  }

  @media screen and (min-width: 1440px) {
    width: 638px;
    height: 245px;
    right: 2%;
    bottom: 20%;
  }
`;
