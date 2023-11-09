import React, { Children } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  ModalContainer,
  CloseBtnWrapper,
  ModalChildrenWrapper,
} from './BasicModalWindow.styled';

const BasicModalWindow = () => {
  return (
    <ModalContainer>
      <CloseBtnWrapper>
        <use href={`${sprite}#icon-checkbox`} />
      </CloseBtnWrapper>

      <ModalChildrenWrapper>{Children}</ModalChildrenWrapper>
    </ModalContainer>
  );
};

export default BasicModalWindow;
