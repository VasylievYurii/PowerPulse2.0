import SectionTemplate from '../components/SectionTemplate';
import UserCard from '../components/UserCard/UserCard';
import UserForm from '../components/UserForm/UserForm';
import { WrapperProfile } from '../components/UserCard/UserCard.styled';
import TitlePage from '../components/TitlePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIndicatorsThunk } from '../redux/userIndicators/userIndicOperations';
import { selectUserProfile } from '../redux/selectors';

const Profile = () => {
  const dispatch = useDispatch();
  // const userProfile = useSelector(selectUserProfile);
  // console.log('userProfile', userProfile);

  useEffect(() => {
    dispatch(getIndicatorsThunk());
  }, []);
  // Тут треба залежність від зміни профайлу встановити, але селектор повертає undefined наразі.
  
  return (
    <SectionTemplate>
      <TitlePage>Profile Settings</TitlePage>
      <WrapperProfile>
        <UserCard />
        <UserForm />
      </WrapperProfile>
    </SectionTemplate>
  );
};

export default Profile;
