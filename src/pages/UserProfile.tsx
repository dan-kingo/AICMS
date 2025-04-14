import EditProfileForm from "@/components/EditProfileForm";
import useUserStore from "@/store/userStore";

const UserProfile = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="md:ms-12">
      {/* profile picture */}
      <div className="flex gap-4 items-center">
        <div>
          <h3 className="md:text-2xl text-xl font-bold font-palanquin">
            {user?.firstName + " " + user?.lastName}
          </h3>
          <p className="text-primary">{user?.userName}</p>
        </div>
      </div>

      {/* profile update field */}

      <div className="mt-2 md:mr-12">
        <EditProfileForm />
      </div>
    </div>
  );
};

export default UserProfile;
