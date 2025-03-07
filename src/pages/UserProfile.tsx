import ProfilePictureUpload from "@/components/ProfilePictureUpload";

const UserProfile = () => {
  return (
    <div className="ms-12">
      {/* profile picture */}
      <div className="flex gap-4 items-center">
        <ProfilePictureUpload />
        <div>
          <h3 className="md:text-2xl text-xl font-bold font-palanquin">
            John Smith
          </h3>
          <p className="text-primary">@johnas</p>
        </div>
      </div>

      {/* profile update field */}
    </div>
  );
};

export default UserProfile;
