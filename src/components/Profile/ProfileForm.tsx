const ProfileForm: React.FC = () => {
  return (
    <form className="w-11/12 max-w-sm my-8 m-auto">
      <div className="mb-8">
        <label
          className="mb-8 font-bold text-gray-900 block "
          htmlFor="new-password"
        >
          New Password
        </label>
        <input
          className="block w-full rounded-lg p-1 border-2 border-purple-900 border-solid bg-white text-white"
          type="password"
          id="new-password"
        />
      </div>
      <div className="mt-6">
        <button className="cursor-pointer rounded-lg border-purple-900 bg-purple-medium text-white py-2 px-6 hover:text-pink-300 hover:border-pink-900 ">
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
