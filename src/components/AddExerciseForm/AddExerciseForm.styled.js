
import styled from 'styled-components'

 export const Container = styled.div`
   /* position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
   padding: 10px; 
   min-width: 335px;
  min-height: 788px; 
   background-color: var(--color-back-one);
  border: 1px solid #efede833; 
   border-radius: 12px; 
   display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;   */
 
   @media screen and (min-width: 768px) {
    min-width: 694px;
  min-height: 550px;
   };
`; 


export const Gif = styled.img`
object-fit: cover;
margin-bottom: 14px;
margin-top: 30px;
margin-left: auto;
  margin-right: auto;
width: 270px;
height: 226px;
border-radius: 12px;
border: 1px solid var(--color-main-one);


`;
export const TimerWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

@media screen and (min-width: 768px) {
  align-items: start;
  width: 125px;
  height: 125px;
  margin-left: 105px;
  margin-right: none;
}
`;
export const Title = styled.h2`
color: rgba(239, 237, 232, 0.3);
font-size: 10px;
line-height: 1.4;
margin-bottom: 4px;
;`


//  export const CloseBtnWrapper = styled.svg`

//  @media screen and (min-width: 768px) {
// };
// `;


export const ButtonContainer = styled.div`
  @media screen and (min-width: 768px) {
    grid-area: button;
    display: flex;
    /* justify-content: flex-end; */
    
      margin-right: 32px;
      margin-top: auto;
      margin-bottom: 48px;
    
  
  margin-bottom: 48px;
  }
`;
export const Button = styled.button`

color: var(--color-text);
display: block;
padding: 12px 32px;
color: var(--color-text);
font-size: 16px;
font-weight: 500;
line-height: 1.12;
text-align: left;
margin-top: 24px;
margin-bottom: 16px;
margin-left: auto;
margin-right: auto;
background-color: var(--color-main-one);
border-radius: 12px;
border: 1px solid var(--color-main-one);
cursor: pointer;
transition: border 0.3s var(--timing-function);

&:hover, &:focus {
  background-color: var(--color-main-two);
  border: 1px solid var(--color-main-two);
}

@media screen and (min-width: 768px){
  font-size: 16px;
  line-height: 1.5;
  padding: 14px 32px;
  margin-top: 32px;
  justify-content: flex-end;
}
;`

