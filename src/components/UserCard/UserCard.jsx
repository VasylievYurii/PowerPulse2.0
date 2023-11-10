// import React from 'react';
import {
  IconWrapper,
  WrapperIndicators,
  WrapperText,
  Span,
  WrapperTwoIndicators,
  IconWrapperUser,
  WrapperUser,
  ButtonUser,
  WrapperUserDiv,
  IconPluse,
  TextUser,
  TextNameUser,
  WrapperName,
  IconExclamation,
} from './UserCard.styled';
import sprite from '../../assets/sprite.svg';
const UserCard = () => {
  const addPhoto = () => {
    console.log('add photo');
  };
  return (
    <>
      <WrapperUserDiv>
        <WrapperUser>
          <IconWrapperUser>
            <use href={`${sprite}#icon-user`} />
          </IconWrapperUser>
        </WrapperUser>
        <ButtonUser onClick={addPhoto}>
          <IconPluse>
            <use href={`${sprite}#icon-plus`} />
          </IconPluse>
        </ButtonUser>
      </WrapperUserDiv>
      <WrapperName>
        <TextNameUser>Anna Rybachok</TextNameUser>
        <TextUser>User</TextUser>
      </WrapperName>
      <WrapperTwoIndicators>
        <WrapperIndicators>
          <WrapperText>
            <IconWrapper>
              <use href={`${sprite}#icon-food`} />
            </IconWrapper>
            <p>Daily calorie intake</p>
          </WrapperText>
          <Span>0</Span>
        </WrapperIndicators>
        <WrapperIndicators>
          <WrapperText>
            <IconWrapper>
              <use href={`${sprite}#icon-dumbbell`} />
            </IconWrapper>
            <p>Daily physical activity</p>
          </WrapperText>
          <Span>0 min</Span>
        </WrapperIndicators>
      </WrapperTwoIndicators>
      <div>
        <IconExclamation>
          <use href={`${sprite}#icon-exclamation`} />
        </IconExclamation>
        <p>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </div>
    </>
  );
};

export default UserCard;
