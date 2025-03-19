import EditProfileForm from "@/components/EditProfileForm";
import ProfilePictureUpload from "@/components/ProfilePictureUpload";
import useUser from "@/hooks/useUser";
import { useState, useEffect } from "react";

interface User {
  firstName: string;
  [key: string]: any;
}

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await useUser();
      setUser(userData);
    };

    fetchUser();
  }, []);
  return (
    <div className="md:ms-12">
      {/* profile picture */}
      <div className="flex gap-4 items-center">
        <ProfilePictureUpload />
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
