import styled from 'styled-components';

export const DayProductsStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
height: 824px;
padding: 16px 8px 16px 16px;
align-items: center;
gap: 22px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: rgba(239, 237, 232, 0.05);
color: var(--color-main-two);
`;

export const DiaryWrapTitle = styled.div`
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
gap: 8px;
color: var(--color-main-one);
font-weight: 500;
line-height: 1.29;
font-size: 14px;
`;

export const NextIconWrapper = styled.svg`
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
`;