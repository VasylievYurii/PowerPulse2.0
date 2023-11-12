import styled from 'styled-components';

ExercisesCategories_ExercisesPage = styled.div`
    display: flex;
    flex-direction: column;
`;

Header = styled.h1`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-text);
`;

Exercices_nav = styled.nav`
    display: flex;
    gap: 28px;
    margin-top: 20px;
`;

NavLink = styled.NavLink`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    transition: color 0.3s var(--timing-function);

    &:hover,
    &:focus {
        color: var(--color-text);
    }
`;


