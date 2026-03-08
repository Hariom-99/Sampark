
import { useState  } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {Camera,Mail,User} from "lucide-react";

const ProfilePage = () => {
  
  const [selectedImg, setSelectedImg] = useState(null);
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };

  };


  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-base-200 to-base-300">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-base-100/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 space-y-10 border border-base-300">

          {/* header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-zinc-400 text-sm">Your profile information</p>
          </div>

          {/* avatar upload */}
          <div className="flex flex-col items-center gap-4">

            <div className="relative group">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-36 rounded-full object-cover border-4 border-base-300 shadow-lg transition-transform duration-300 group-hover:scale-105"
              />

              <label
                htmlFor="avatar-upload"
                className={`
              absolute bottom-1 right-1 
              bg-base-content text-base-200
              p-3 rounded-full shadow-md
              cursor-pointer hover:scale-110
              transition-all duration-200
              ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
            `}
              >
                <Camera className="w-5 h-5" />

                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>

            <p className="text-sm text-zinc-400">
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* user info */}
          <div className="space-y-6">

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>

              <p className="px-4 py-3 bg-base-200 rounded-lg border border-base-300 hover:border-primary transition">
                {authUser?.fullName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>

              <p className="px-4 py-3 bg-base-200 rounded-lg border border-base-300 hover:border-primary transition">
                {authUser?.email}
              </p>
            </div>
          </div>

          {/* account info */}
          <div className="bg-base-200 rounded-xl p-6 border border-base-300 shadow-inner">
            <h2 className="text-lg font-semibold mb-4">Account Information</h2>

            <div className="space-y-3 text-sm">

              <div className="flex items-center justify-between py-2 border-b border-base-300">
                <span className="text-zinc-400">Member Since</span>
                <span className="font-medium">
                  {authUser.createdAt?.split("T")[0]}
                </span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-zinc-400">Account Status</span>
                <span className="text-green-500 font-medium">Active</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default ProfilePage
