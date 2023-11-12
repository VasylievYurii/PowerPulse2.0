import styled from 'styled-components';

export const DiaryProductCard = styled.li`
display: flex;
flex-direction: column;
gap: 16px;
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
`;

export const ValueBox = styled.div`
display: flex;
gap: 8px;
width: 100%;
min-width: 59px;
height: 38px;
padding: 10px 14px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1,29;

@media screen and (min-width: 375px) {
min-width: 80px;
  }
`;

export const WrapLastDescrBox = styled.div`
position: relative;
display: flex;
/* width: 223px; */
padding-right: 28px;
justify-content: space-between;
gap: 16px;
align-items: center;
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
  background-color: transparent;
  border: none;
`;

export const TrashIconWrapper = styled.svg`
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  fill: ${(props) => props.color || 'none'};
  stroke: ${(props) => props.stroke || 'var(--color-back-two)'};
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;