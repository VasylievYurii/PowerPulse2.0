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
/* margin-bottom: 18px; */
color: var(--color-text);
background-color: transparent;
transition: border 0.3s var(--timing-function);

&:hover {
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
margin-left: 4px;
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