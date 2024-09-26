import { RootState } from "@/GlobalRedux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProfileSection = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  console.log(user, "hellooooo");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="johndoe@example.com"
          />
        </div>
      </div>
      <button className="mt-6 px-6 py-2 bg-primary text-dark rounded-lg hover:bg-yellow-500 transition duration-200">
        Save Changes
      </button>
    </div>
  );
};

export default ProfileSection;
