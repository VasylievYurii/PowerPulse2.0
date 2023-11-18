import styled from '@emotion/styled';

export const ProductWrapTitle = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const ProductWrapper = styled.div`
  position: relative;
`;

export const Span = styled.span`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: -32px;
    right: 0px;
    margin-bottom: 8px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28;
  }
`;
