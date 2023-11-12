import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const ExercisesCategories_ExercisesPage = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        gap: 287px;
    }

    @media screen and (min-width: 1440px) {
        gap: 831px;
    }
`;

export const Header = styled.h1`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-text);
    margin: 0;
`;

export const Exercices_nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    
    @media screen and (min-width: 375px) {
        gap: 28px;
    }

    @media screen and (min-width: 768px) {
        margin-top: 0;
        gap: 32px;
    }
`;

export const StyledLink = styled(NavLink)`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    transition: color 0.3s var(--timing-function);
    color: #EFEDE866;

    &:hover,
    &:focus {
        color: #EFEDE8;
    }
`;

