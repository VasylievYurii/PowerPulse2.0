import SectionTemplate from '../components/SectionTemplate';
import UserCard from '../components/UserCard/UserCard';
import UserForm from '../components/UserForm/UserForm';
import { WrapperProfile } from '../components/UserCard/UserCard.styled';
import TitlePage from '../components/TitlePage';

const Profile = () => {
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
