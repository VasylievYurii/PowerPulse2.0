
import styled from 'styled-components'

/* export const RemainingTime {
  color: index.$white-color;
  font-size: 16px;
  line-height: 1.5;
  transform: rotate(180deg);
}
export const TimerButtonIcon {
  fill: currentColor;
  stroke: currentColor;
  width: 32px;
  height: 32px;
} */

 export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
  padding: 10px;
  min-width: 335px;
  min-height: 788px;
  background-color: var(--color-back-one);
  border: 1px solid #efede833;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    min-width: 694px;
  min-height: 550px;
  }
`; 

export const GifWrapper = styled.div`
width: 270px;
  height: 226px;
 border-radius: 12px;
  border: 1px solid var(--color-text);
  margin-bottom: 14px;
  
   
`;

export const Gif = styled.img`
object-fit: cover; 
`;

export const Timer = styled.div`
 /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const TimerTitle = styled.p`
   color: var(--color-back-two);
  font-size: 10px;
  line-height: 1.4;
  margin-bottom: 4px; 
 
`;

export const TimerWrapper = styled.div`
 width: 125px;
height: 124px;
border-radius: 12px;
  border: 1px solid var(--color-text);
  margin-bottom: 14px; 
  
`;
export const CountdownCircleTimer = styled.div`

`;

export const TimerButton = styled.button`
  color: var(--color-text);
  background-color: var( --color-main-one);
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 5px;
  padding: 0;
  margin-top: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color var( --color-main-one);/*&&*/ 
  /* svg {
    width: 24px;
    height: 24px;
  } */
  &:hover {
    background: var( --color-main-one);
    color: var(--color-text);
  }
  @media screen and (min-width: 768px) {
    /* align-self: flex-end; */
  }
`;

export const Calories = styled.p`
  color: var(--color-back-two);
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 40px;

  /* .caloriesSpan {
    color: var( --color-main-one)
    font-weight: bold;
    margin-left: 4px;
  } */

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const RightContainer = styled.div`
  max-width: 302px;

  @media screen and (min-width: 768px) {
    max-width: 344px;
    /* display: flex;
    flex-direction: column; */
  }
`;

export const List = styled.ul`
  /* display: flex;  */
/*   flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px; 
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
  } */
margin-bottom: 24px;
`;

export const ListItem = styled.li`
  padding: 12px 18px;
  width: 147px;
 /*  justify-content: center; */

  gap: 4px; 
  border-radius: 12px;
  border: 1px solid var(--color-back-two);
  margin-bottom: 8px;
 
  

  @media screen and (min-width: 768px) {
    width: 168px;
  }
`;

export const ItemTitle = styled.p`
  color: var(--color-back-two);
  font-size: 12px;
  line-height: 1.33;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`;

export const ItemValue = styled.p`
  color: var(--color-text);;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.285;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
  font-size: 16px;
    line-height: 1.5;
  }
`;

export const ButtonContainer = styled.div`
/* @media screen and (min-width: 768px) {
    grid-area: button;
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 768px) {
      margin-right: 32px;
      margin-top: auto;
      margin-bottom: 48px;
    }
  } */
  margin-bottom: 48px;
`;
export const Button = styled.button`

color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 12px 32px;
  border-radius: 12px;
  background: var(--color-main-one);
   align-self: flex-start; 
  &:hover {
    background: var( --color-main-one);
    color: var(--color-text);
  }
  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
;`

