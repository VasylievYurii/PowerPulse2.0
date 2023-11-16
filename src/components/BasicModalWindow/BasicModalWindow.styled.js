import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 14px;
  min-width: 335px;
  min-height: 384px;
  background-color: var(--color-back-one);
  border: 1px solid #efede833;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;
export const CloseBtnWrapper = styled.svg`
  position: absolute;
  cursor: pointer;
  width: 22px;
  height: 22px;
  stroke: var(--color-text);
  top: 14px;
  right: 14px;
`;
export const ModalChildrenWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #04040466;
`;
