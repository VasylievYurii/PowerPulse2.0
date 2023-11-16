import { useSelector } from 'react-redux';
import { IconSettings, UserWrapper, IconUser, Img } from './UserBar.styled';
import sprite from '../../assets/sprite.svg';

const UserBar = () => {
  const { userData } = useSelector((state) => state.auth);

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
