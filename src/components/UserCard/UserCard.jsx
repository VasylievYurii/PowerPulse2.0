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
  WrapperExclamation,
  TextExclamation,
  IconLogout,
  WrapperLogout,
  TextLogout,
  WrapperUseCard,
} from './UserCard.styled';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';

const UserCard = () => {
  const [colories, setColories] = useState('0');
  const [physical, setPhysical] = useState('0');

  const logout = () => {
    console.log('logout');
    setColories(105);
    setPhysical(200);
  };
  const addPhoto = () => {
    console.log('add photo');
  };
  return (
    <WrapperUseCard>
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
          <Span>{colories}</Span>
        </WrapperIndicators>
        <WrapperIndicators>
          <WrapperText>
            <IconWrapper>
              <use href={`${sprite}#icon-dumbbell`} />
            </IconWrapper>
            <p>Daily physical activity</p>
          </WrapperText>
          <Span>{physical} min</Span>
        </WrapperIndicators>
      </WrapperTwoIndicators>
      <WrapperExclamation>
        <IconExclamation>
          <use href={`${sprite}#icon-exclamation`} />
        </IconExclamation>
        <TextExclamation>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </TextExclamation>
      </WrapperExclamation>
      <WrapperLogout>
        <TextLogout>Logout</TextLogout>
        <IconLogout onClick={logout}>
          <use href={`${sprite}#icon-logout`} />
        </IconLogout>
      </WrapperLogout>
    </WrapperUseCard>
  );
};

export default UserCard;
