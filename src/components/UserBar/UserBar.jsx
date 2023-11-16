import { useSelector } from 'react-redux';
import { useState } from 'react';
import { IconSettings, UserWrapper, IconUser, Img } from './UserBar.styled';
import sprite from '../../assets/sprite.svg';

const UserBar = () => {
  const [imageError, setImageError] = useState(false);
  const { userData } = useSelector((state) => state.auth);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <IconSettings>
        <use href={`${sprite}#icon-settings`} />
      </IconSettings>
      <UserWrapper>
        {userData ? (
          <Img
            src={`https://powerpulse-t5-backend.onrender.com/${userData.avatarURL}`}
            sizes="90px"
            onError={handleImageError}
            hidden={imageError}
          />
        ) : (
          <IconUser>
            <use href={`${sprite}#icon-user`} />
          </IconUser>
        )}
      </UserWrapper>
    </>
  );
};

export default UserBar;
