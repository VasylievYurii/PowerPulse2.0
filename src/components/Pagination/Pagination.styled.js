import styled from 'styled-components';

export const WrapperPaginate = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 6em;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 40px;
  }
`;

export const SpanPagination = styled.a`
  cursor: pointer;
  width: 12px;
  height: 12px;

  background: rgba(239, 237, 232, 0.1);
  border: ${(props) =>
    props.isactive ? '1px solid rgba(230, 83, 60, 1)' : ''};

  border-radius: 50%;
  display: flex;
  position: relative;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: ${(props) =>
      props.isactive ? '#E6533C' : '1px solid rgba(230, 83, 60, 1)'};

    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity 0.2s;
  }

  &:hover {
    border: 1px solid rgba(230, 83, 60, 1);
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: rgba(230, 83, 60, 1);
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
      transition: opacity 0.2s;
    }
  }
`;
