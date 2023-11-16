import React, { Children, useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import BasicModalPortal from './BasicModalPortal';
import {
  ModalContainer,
  CloseBtnWrapper,
  ModalChildrenWrapper,
  BackdropModal,
} from './BasicModalWindow.styled';
import AddExerciseForm from '../../components/AddExerciseForm'

const BasicModalWindow = ({ onClick, children }) => {
  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    
    <BasicModalPortal>
      <BackdropModal onClick={handleBackDropClick}>
        <ModalContainer>
          <CloseBtnWrapper onClick={handleCloseClick}>
            <use href={`${sprite}#icon-cross`} />
          </CloseBtnWrapper>
          <ModalChildrenWrapper>{children}</ModalChildrenWrapper>
        </ModalContainer>
      </BackdropModal>
    </BasicModalPortal>
  );
};
export default BasicModalWindow;
