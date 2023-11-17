import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { SectionNoAuth } from '../../components/SectionTemplateNoAuth/SectionTemplateNoAuth.styled';
// import { WelcomePrimaryBtn } from '../Welcome/Welcome.styled';
import {
  IconWrapper,
  SecondaryIconWrapper,
} from '../../components/Logo/Logo.styled';

export const Section404 = styled(SectionNoAuth)``;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 57vw;
  /* max-width: calc(64%); */
  height: 100vh;
  padding: 24px 20px;
  color: var(--color-text);
  background-color: var(--color-main-one);
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    padding: 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 96px;
    width: 46%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(20vh);
`;

export const Title = styled.h1`
  /* margin-top: 260px; */
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: calc(150 / 160);
    letter-spacing: 1.6px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin-top: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 28px;
    line-height: calc(24 / 16);
  }
`;

export const StyledLink = styled(Link)`
  height: 13px;

  @media screen and (min-width: 768px) {
    height: 15.26px;
  }

  @media screen and (min-width: 1440px) {
    height: 17px;
  }
`;

export const Svg = styled(IconWrapper)`
  fill: var(--color-text);
`;

export const LogoText = styled(SecondaryIconWrapper)``;

export const ButtonWrapper = styled.button`
  cursor: pointer;
  margin-top: 28px;
  width: 147px;
  height: 42px;
  padding: 12px, 40px;
  border: 1px solid #efede84d;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border 0.3s var(--timing-function);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500px;
    padding: 16px 60px;
    min-width: 256px;
  }
`;

export const LinkStyled = styled(Link)`
  display: inline;
`;
