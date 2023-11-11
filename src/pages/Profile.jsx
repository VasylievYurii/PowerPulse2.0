import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import UserCard from '../components/UserCard/UserCard';
import UserForm from '../components/UserForm/UserForm';
import { Title, WrapperProfile } from '../components/UserCard/UserCard.styled';

const Profile = () => {
  return (
    <SectionTemplate>
      <Title>Profile Settings</Title>
      <WrapperProfile>
        <UserCard />
        <UserForm />
      </WrapperProfile>
    </SectionTemplate>
  );
};

export default Profile;
