import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 375px) {
    display: inline-block;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 92px;
  }
`;

export const Text = styled.p`
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 375px) {
    display: inline-block;
    width: 335px;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const OrangeTextSpan = styled.span`
  color: var(--color-main-one);

  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const OrangeTextBlock = styled.p`
  color: var(--color-main-one);

  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 16px;
    line-height: 1.5;
  }
`;
