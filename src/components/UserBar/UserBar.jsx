import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { IconSettings, UserWrapper, IconUser, Img } from './UserBar.styled';
import sprite from '../../assets/sprite.svg';

const UserBar = () => {
  const { userData } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    if (userData) {
      setLoading(true);
      setImageURL(userData.avatarURL);
    }
    setLoading(false);
  }, [userData]);

  return (
    <>
      <IconSettings>
        <use href={`${sprite}#icon-settings`} />
      </IconSettings>
      <UserWrapper>
        {userData?.avatarURL ? (
          <>
            {loading ?? (
              <IconUser>
                <use href={`${sprite}#icon-user`} />
              </IconUser>
            )}
            <Img
              src={userData.avatarURL}
              sizes="90px"
              onError={() => {
                setImageURL(null);
                setLoading(false);
              }}
              loading="lazy"
            />
          </>
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
