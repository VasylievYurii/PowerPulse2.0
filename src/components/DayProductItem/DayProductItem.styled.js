import styled from 'styled-components';

export const DiaryProductCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DiarySupTitle = styled.h4`
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  color: var(--color-main-two);

  @media screen and (min-width: 768px) {
    display: none; 
  }
`;

export const ValueBox = styled.div`
  display: ${(props) => props.display || 'inline-block' };
  gap: 8px;
  width: ${(props) => props.width || '100%' };
  min-width: 59px;
  height: 38px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.30);
  font-size: 14px;
  line-height: 1.29;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    height: 40px;
    padding: 8px 14px;
    line-height: 1.5;
    font-size: 16px;
  }
`;

export const WrapLastDescrBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-right: 28px;
  /* gap: 16px; */
  align-items: center;

  @media screen and (min-width: 375px) {
    justify-content: start;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    gap: 8px;
  }
`;

export const Circle = styled.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${(props) => props.color || 'var(--color-back-two)'};
`;

export const DiaryTrashButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 9px;
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    bottom: 10px;
  }
`;

export const TrashIconWrapper = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--color-main-two);
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;