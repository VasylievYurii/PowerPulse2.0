import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionTemplate from '../components/SectionTemplate';
import UserCard from '../components/UserCard/UserCard';
import UserForm from '../components/UserForm/UserForm';
import { WrapperProfile } from '../components/UserCard/UserCard.styled';
import TitlePage from '../components/TitlePage';
import { getTarget } from '../redux/userProfile/userProfileOperations';

const Profile = () => {
  const dispatch = useDispatch();
  const { targetBmr, targetTime } = useSelector(
    (state) => state.profile.target,
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getTarget());
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch, isLoading]);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <SectionTemplate>
      <TitlePage>Profile Settings</TitlePage>
      <WrapperProfile>
        <UserCard bmr={targetBmr} time={targetTime} />
        <UserForm onClick={handleClick} />
      </WrapperProfile>
    </SectionTemplate>
  );
};

export default Profile;
