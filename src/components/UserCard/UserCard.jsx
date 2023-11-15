import {
  IconWrapper,
  WrapperIndicators,
  WrapperText,
  TextSpan,
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
import { updateAvatar } from '../../redux/auth/operations';
import Loader from '../Loader';

const UserCard = () => {
  const [imageURL, setImageURL] = useState();
  const [colories, setColories] = useState('0');
  const [physical, setPhysical] = useState('0');
  const [user, setUser] = useState('Anna Rybachok');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userData) {
      setUser(userData.name);
      setImageURL(userData.avatarURL);
    }
  }, [userData]);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const uploadPhoto = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    fileReader.readAsDataURL(file);

    setLoading(true);

    await dispatch(updateAvatar(file));

    setLoading(false);
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
          {imageURL ? (
            <Img
              src={`https://powerpulse-t5-backend.onrender.com/${imageURL}`}
              sizes="90px"
            />
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
          <TextSpan>{colories}</TextSpan>
        </WrapperIndicators>
        <WrapperIndicators>
          <WrapperText>
            <IconWrapper>
              <use href={`${sprite}#icon-dumbbell`} />
            </IconWrapper>
            <p>Daily physical activity</p>
          </WrapperText>
          <TextSpan>{physical} min</TextSpan>
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
      {loading && <Loader />}
    </WrapperUseCard>
  );
};

export default UserCard;
