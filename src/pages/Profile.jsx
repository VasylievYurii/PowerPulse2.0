import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import UserCard from '../components/UserCard/UserCard';
import UserForm from '../components/UserForm/UserForm';

const Profile = () => {
  return (
    <SectionTemplate>
      <p>Profile page</p>
      <UserCard />
      <UserForm />
    </SectionTemplate>
  );
};

export default Profile;
