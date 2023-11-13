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
  Img,
  Input,
} from './UserCard.styled';
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from '../../redux/user/userOperations';

const HOST_URL = 'https://powerpulse-t5-backend.onrender.com/api/users/avatars';
const UserCard = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [colories, setColories] = useState('0');
  const [physical, setPhysical] = useState('0');
  const [user, setUser] = useState('Anna Rybachok');
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  // const { avatarURL } = useSelector((state) => state.users);
  console.log('userData', userData);

  useEffect(() => {
    if (userData) {
      setUser(userData.name);
      setImageURL(userData.avatarURL);
    }

    if (imageURL) {
      setImageURL(imageURL);
    }
  }, [userData, imageURL]);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  const uploadPhoto = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
    fileReader.readAsDataURL(file);

    dispatch(updateAvatar(file));
    const formData = new FormData();
    formData.append('avatarURL', file);
    const res = await fetch(HOST_URL, {
      method: 'PATCH',
      body: formData,
    });
    console.log('res', res);
    const data = await res.json();
    // dispatch(updateAvatar(data));
    console.log('data', data);
  };
  const logout = () => {
    console.log('logout');
    setColories(105);
    setPhysical(200);
  };

  return (
    <WrapperUseCard>
      <Input id="file-loader" type="file" onChange={uploadPhoto} />

      <WrapperUserDiv>
        <WrapperUser>
          {image || imageURL ? (
            <Img src={imageURL} sizes="90px" />
          ) : (
            <IconWrapperUser>
              <use href={`${sprite}#icon-user`} />
            </IconWrapperUser>
          )}
        </WrapperUser>
        <ButtonUser htmlFor="file-loader">
          <IconPluse>
            <use href={`${sprite}#icon-plus`} />
          </IconPluse>
        </ButtonUser>
      </WrapperUserDiv>
      <WrapperName>
        <TextNameUser>{user}</TextNameUser>
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
