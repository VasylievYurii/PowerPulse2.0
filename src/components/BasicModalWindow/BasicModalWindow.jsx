import React, { Children } from 'react';
import sprite from '../../assets/sprite.svg';
import BasicModalPortal from './BasicModalPortal';
import {
  ModalContainer,
  CloseBtnWrapper,
  ModalChildrenWrapper,
} from './BasicModalWindow.styled';

const BasicModalWindow = ({ children }) => {
  return (
    <BasicModalPortal>
      <ModalContainer>
        <CloseBtnWrapper>
          <use href={`${sprite}#icon-checkbox`} />
        </CloseBtnWrapper>
        <ModalChildrenWrapper>{children}</ModalChildrenWrapper>
      </ModalContainer>
    </BasicModalPortal>
  );
};
export default BasicModalWindow;
