import { useSelector } from 'react-redux';
import { IconSettings, UserWrapper, IconUser, Img } from './UserBar.styled';
import sprite from '../../assets/sprite.svg';

const UserBar = () => {
  const { userData } = useSelector((state) => state.auth);

  if (!userData) {
    return (
      <>
        <IconSettings>
          <use href={`${sprite}#icon-settings`} />
        </IconSettings>
        <UserWrapper>
          <IconUser>
            <use href={`${sprite}#icon-user`} />
          </IconUser>
        </UserWrapper>
      </>
    );
  } else {
    return (
      <>
        <IconSettings>
          <use href={`${sprite}#icon-settings`} />
        </IconSettings>
        <UserWrapper>
          <Img
            src={`https://powerpulse-t5-backend.onrender.com/${userData.avatarURL}`}
            sizes="90px"
          />
        </UserWrapper>
      </>
    );
  }
};

export default UserBar;
