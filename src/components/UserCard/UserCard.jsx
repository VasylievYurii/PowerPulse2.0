import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, updateAvatar } from '../../redux/auth/operations';
import { getTarget } from '../../redux/userProfile/userProfileOperations';
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
  LoaderAvatarStyled,
} from './UserCard.styled';

const UserCard = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { target, profile } = useSelector((state) => state.profile);
  const [imageURL, setImageURL] = useState(userData.avatarURL ?? null);
  const [user, setUser] = useState('Hello user!');
  const [bmr, setBmr] = useState('0');
  const [time, setTime] = useState('0');
  const [loading, setLoading] = useState(false);
  console.log('targ', target);

  useEffect(() => {
    if (userData) {
      setUser(userData.name);
      setImageURL(userData.avatarURL);
    }
  }, [userData]);

  useEffect(() => {
    dispatch(getTarget());
    if (target && profile) {
      setBmr(Math.round(target.targetBmr));
      setTime(target.targetTime);
    }
  }, [dispatch, profile]);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const uploadPhoto = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    fileReader.readAsDataURL(file);
    setLoading(true);

    try {
      await dispatch(updateAvatar(file));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setImageURL(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    dispatch(logOutUser());
  };

  return (
    <WrapperUseCard>
      <Input id="file-loader" type="file" onChange={uploadPhoto} />
      <WrapperUserDiv>
        <WrapperUser>
          {imageURL && !loading ? (
            <Img src={imageURL} sizes="90px" loading="lazy" />
          ) : null}
          {imageURL && loading ? (
            <IconWrapperUser>
              <use href={`${sprite}#icon-user`} />
            </IconWrapperUser>
          ) : null}
          {loading && <LoaderAvatarStyled></LoaderAvatarStyled>}
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
          <TextSpan>{bmr}</TextSpan>
        </WrapperIndicators>
        <WrapperIndicators>
          <WrapperText>
            <IconWrapper>
              <use href={`${sprite}#icon-dumbbell`} />
            </IconWrapper>
            <p>Daily physical activity</p>
          </WrapperText>
          <TextSpan>{time} min</TextSpan>
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

      <WrapperLogout to="/welcome" onClick={logout}>
        <TextLogout>Logout</TextLogout>
        <IconLogout>
          <use href={`${sprite}#icon-logout`} />
        </IconLogout>
      </WrapperLogout>
    </WrapperUseCard>
  );
};

export default UserCard;
