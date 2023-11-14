import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const LeftContainer = styled.div`
max-width: 344px;
    display: flex;
    flex-direction: column;

;` 
 export const GifWrapper = styled.div`
  width: 270px;
  height: 226px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-main-one);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-right: 0;
    margin-top: 40px;
  }
`;


/*export const Gif = styled.img`
width: 270px;
height: 226px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.2);
object-fit: cover;
padding: 105px, 45px;

@media screen and (min-width: 768px) {
    margin-right: 16px;
  }
;`
 */
export const TitleWrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
;`
export const TimerTitle = styled.p`
font-size: 10px;
height: 1.4;
margin-bottom: 4px;
color: var(--color-text);
;`

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
margin-bottom: 14px;
;`

export const CountdownCircleTimer = styled.p`
width: 125px;
height: 124px;
background-color: var(--color-main-one);
border-radius:100px;
` ;

export const TimerButtonWrapper = styled.div`
 @media screen and (min-width: 768px) {
    grid-area: button;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) {
      margin-right: 32px;
      margin-top: auto;
    }
  }
;`

export const TimerButton = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 10px;
    padding: 0px;
  margin-bottom: 8px;
  cursor: pointer;
    background: var(--color-main-one);
    color: var(--color-text);
`; 
/* export const IconPause = styled.svg`
width: 6px;
height: 8px;
fill: var(--color-text);

;` */

export const CaloriesWrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
;` 

export const Calories = styled.h2`
font-size: 14px;
line-height: 1.3;
color: var(--color-text);

;`

export const RightContainer = styled.div`
    max-width: 344px;
    display: flex;
    flex-direction: column;
;`

export const ItemTitle = styled.h3`
font-size: 12px;
line-height: 1.5;
color: var(--color-text);
;`

export const ButtonContainer = styled.div`
@media screen and (min-width: 768px) {
    grid-area: button;
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 768px) {
      margin-right: 32px;
      margin-top: auto;
      margin-bottom: 48px;
    }
  }
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
    background: var(--color-main-one);
    color: var(--color-text);
  }
  `;
