import { Upload } from "lucide-react";
import { useState } from "react";

const ProfilePictureUpload = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <label htmlFor="upload" className="cursor-pointer">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-18 h-18 rounded-full object-cover border-2 border-gray-300"
          />
        ) : (
          <div className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm border-2 border-gray-400">
            <Upload />
          </div>
        )}
      </label>
      <input
        type="file"
        accept="image/*"
        id="upload"
        className="hidden"
        onChange={handleImageChange}
      />
    </>
  );
};

export default ProfilePictureUpload;
