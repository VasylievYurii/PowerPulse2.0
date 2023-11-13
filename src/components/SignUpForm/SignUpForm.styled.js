import styled from 'styled-components';
import { Field } from 'formik';

export const InputStyled = styled(Field)`
font-size: 14px;
line-height: 18px;
max-width: 335px;
width: 100%;
height: 46px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.30);
padding-top: 14px;
padding-bottom: 14px;
padding-left: 14px;
align-items: center;
color: var(--color-text);
background-color: transparent;
transition: border 0.3s var(--timing-function);
/* border-color: ${props => props.$border_color}; */
&:invalid {
    border: 2px solid var(--color-wrong-one);
}
&:required {
    border: 1px solid var(--color-wrong-one);
}
/* &:valid{
    border: 1px solid var(--color-approved-one);
} */
&:hover, &:focus {
    border: 1px solid var(--color-main-one)
}

@media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 1.5;
    max-width: 364px;
    height: 52px;
}
`
export const ErrorDivStyled = styled.div`
color: var(--color-wrong-one);
margin-top: 4px;
/* margin-left: 4px; */
line-height: 1.5;
letter-spacing: 0.12px;
`

export const WrapFormStyled = styled.div`
display: flex;
flex-direction: column;
gap: 18px;

@media screen and (min-width: 768px){
    gap: 20px;
}
`
export const SvgIconEyeStyled = styled.svg`
width: 20px;
height: 20px;
stroke: var(--color-text);
 
`

export const SvgIconCheckBoxStyled = styled.svg`
width: 16px;
height: 16px;
margin-top: 4px;
fill: var(--color-wrong-one);
`

export const WrapErrorStyled = styled.div`
display: flex;
gap: 4px;
`

export const LabelWrapStyled = styled.label`
position: relative;
`

export const IconWrapdStyled = styled.div`
position: absolute;
 display: flex; 
 top: calc(50% - 20px / 2);
align-items: center;
right: 14px;
` 