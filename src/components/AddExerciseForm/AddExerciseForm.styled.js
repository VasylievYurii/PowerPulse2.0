
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
  padding: 48px 24px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
    display: flex;
    gap: 16px;
  }
`;

export const GifWrapper = styled.div`
  width: 270px;
  height: 226px;
  margin: 0 auto 14px;
`;

export const Gif = styled.img`
 width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(index.$white-color, 0.2);
  object-fit: cover;
`;

export const Timer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerTitle = styled.p`
   color: var(--white-color);
  font-size: 10px;
  line-height: 1.4;
  margin-bottom: 4px;
`;

export const TimerWrapper = styled.div`
  transform: rotate(-180deg);
`;

export const TimerButton = styled.button`
  color: var(--white-color);
  background-color: var(--orange-light-color);
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 5px;
  padding: 0;
  margin-top: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color var(--orange-light-color);/*&&*/ 
  /* svg {
    width: 24px;
    height: 24px;
  } */
  &:hover {
    background: var(--orange-light-color);
    color: var(--white-color);
  }
  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
`;

export const Calories = styled.p`
  color: var(--white-color);
  font-size: 12px;
  line-height: 1.5;

  /* .caloriesSpan {
    color: var(--orange-light-color)
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
    display: flex;
    flex-direction: column;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
  }

`;

export const ListItem = styled.li`
  padding: 12px 18px;
  width: 147px;
  justify-content: center;

  gap: 4px;
  border-radius: 12px;
  border: 1px solid var(--white-color);
  background: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 168px;
  }
`;

export const ItemTitle = styled.p`
  color: var(--white-color);
  font-size: 12px;
  line-height: 1.33;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`;

export const ItemValue = styled.p`
  color: var(--white-color);;
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

@media screen and (min-width: 768px) {
  margin-top: auto;
    align-self: flex-end;
}
`;
export const Button = styled.button`
padding: 12px 32px;

@media screen and (min-width: 768px) {
  padding: 14px 32px;
      font-size: 16px;
      line-height: 1.5;
      height: 52px;
      margin-top: auto;
}
;`

