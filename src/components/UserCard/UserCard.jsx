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
import { logOutUser, updateAvatar } from '../../redux/auth/operations';
import Loader from '../Loader';
import { Link } from 'react-router-dom';
import { getTarget } from '../../redux/userProfile/userProfileOperations';

const UserCard = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { target } = useSelector((state) => state.profile);
  const [imageURL, setImageURL] = useState();
  // const [colories, setColories] = useState(target.targetBmr ?? '0');
  // const [physical, setPhysical] = useState(target.targetTime ?? '0');
  const [user, setUser] = useState('Hello user!');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userData) {
      setUser(userData.name);
      // setColories(target.targetBmr);
      // setPhysical(target.targetTime);
    }
    if (userData.avatarURL) {
      setImageURL();
    }
  }, [userData]);

  useEffect(() => {
    dispatch(getTarget());
  }, [dispatch]);

  console.log('target', target);

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
      dispatch(updateAvatar(file));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setImageURL(null);
      }
    }
    setLoading(false);
  };

  const logout = () => {
    dispatch(logOutUser());
  };

  return (
    <WrapperUseCard>
      <Input id="file-loader" type="file" onChange={uploadPhoto} />

      <WrapperUserDiv>
        <WrapperUser>
          {imageURL || userData.avatarURL ? (
            <Img
              src={
                imageURL ||
                `https://powerpulse-t5-backend.onrender.com/${userData.avatarURL}`
              }
              sizes="90px"
              onError={() => {
                setImageURL(null);
                setLoading(false);
              }}
              loading="lazy"
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
          <TextSpan>{Math.round(target.targetBmr) ?? '0'}</TextSpan>
        </WrapperIndicators>
        <WrapperIndicators>
          <WrapperText>
            <IconWrapper>
              <use href={`${sprite}#icon-dumbbell`} />
            </IconWrapper>
            <p>Daily physical activity</p>
          </WrapperText>
          <TextSpan>{target.targetTime ?? '0'} min</TextSpan>
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

      <WrapperLogout onClick={logout}>
        <Link to="/welcome">
          <TextLogout>Logout</TextLogout>
        </Link>
        <IconLogout onClick={logout}>
          <use href={`${sprite}#icon-logout`} />
        </IconLogout>
      </WrapperLogout>

      {loading && <Loader />}
    </WrapperUseCard>
  );
};

export default UserCard;
