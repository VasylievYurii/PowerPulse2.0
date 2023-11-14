import styled from 'styled-components';

export const DayProductsStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 826px;
  padding: 16px 8px 16px 16px;
  gap: 22px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.20);
  background: rgba(239, 237, 232, 0.05);
  color: var(--color-text);

  @media screen and (min-width: 768px) {
    height: 236px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 236px;
  }
`;

export const DayProductsWrapTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DiaryTitle = styled.h3`
  color: rgba(239, 237, 232, 0.50);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
`;

export const DiaryLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-main-one);
  font-weight: 500;
  line-height: 1.29;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const NextIconWrapper = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--color-main-one);
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;

export const WrapTitlesTablet = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    line-height: 1.5;
    margin-bottom: -8px;
    color: var(--color-main-two);
  }
    @media screen and (min-width: 1440px) {
      margin-right: 16px;
      margin-left: 16px;
    }
`;

export const DiarySupTitleTablet = styled.li`
  width: ${(props) => props.width || '100%' };
`;

export const DiaryProductsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-right: 8px;
  overflow-y: auto;
  &::-webkit-scrollbar {
      width: 6px;
    };
  &::-webkit-scrollbar-track {
    background-color: none;
  };
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.10);
        border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    padding-right: 18px;
  }

  @media screen and (min-width: 1440px) {
    width:
      margin-left: 16px;
      padding-right: 16px;
    } 
`;