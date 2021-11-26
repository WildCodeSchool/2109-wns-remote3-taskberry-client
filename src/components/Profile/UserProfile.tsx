import ProfileForm from "./ProfileForm";

const UserProfile: React.FC = () => {
  return (
    <section className="text-center m-20 m-auto">
      <h1 className="text-4xl">Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
