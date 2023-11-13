import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  min-width: 280px;
  padding: 15px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 1440px) {
    width: 405px;
  }
`;
export const TopLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftTopLabelWrapper = styled.div`
  padding: 5px 7.5px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  > p {
    margin: 0;
    font-weight: 700;
  }
`;

export const RightTopBlockWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > span {
    display: block;
    width: 14px;
    height: 14px;
    background-color: var(--color-approved-two);
    border-radius: 50%;
  }

  > p {
    padding-right: 8px;
    margin: 0;
    line-height: 1.5;
  }
`;

export const AddButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;

  > span {
    font-size: 14px;
    line-height: 1.3;
    color: var(--color-main-one);

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    stroke: var(--color-main-one);
  }
`;

export const MiddleLineWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-top: 27px;
  }

  > p {
    margin: 0;
    font-size: 20px;
    line-height: 1.2;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.3;
    }
  }
`;

export const RunIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: var(--color-main-three);
  border-radius: 50%;

  > svg {
    width: 14px;
    height: 16px;
    fill: var(--color-text);
  }
`;

export const InfoLineWrapper = styled.ul`
  display: flex;
  gap: 16px;

  p {
    margin: 0;
    line-height: 1.5;
    color: rgba(239, 237, 232, 0.4);

    > span {
      margin-left: 4px;
      color: var(--color-text);
    }
  }
`;
