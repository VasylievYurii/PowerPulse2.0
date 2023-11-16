import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerExerStyled = styled.div`
padding-top: 48px;
padding-bottom: 48px;
`

export const TitleModalStyled = styled.h1`
color: var(--color-text);
font-size: 24px;
margin-bottom: 16px;
margin-top: 27px;
`

export const NavLinkExStyled = styled(NavLink)`
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;
display: flex;
justify-content: center;
`

export const ButtonExerStyled = styled.button`
 display: block;
  padding: 12px 32px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 16px;
  margin-left: ${props => props.$nomarginleft ? "0" : "auto"};
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
  }
`

export const TextExerStyled = styled.p`
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;

>span{
    color: var(--color-main-one);
}

`

export const WrapTextExerStyled = styled.div`
display: flex;
gap: 4px;
flex-direction: column;
`

export const SvgExerArrow = styled.svg`
stroke: rgba(239, 237, 232, 0.30);
width: 16px;
height: 16px;
margin-left: 6px;
`

export const ImgThumbUp = styled.img`
width: 118px;
margin: auto;
`