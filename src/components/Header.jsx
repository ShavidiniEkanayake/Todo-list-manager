import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import ProfilePic from "../assets/images/profile.png";
import { useRouter } from "next/router";
import { logout } from "../redux/actions/auth";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //open the log out modal
  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //log out
  const handleLogout = () => {
    dispatch({ type: logout });
    router.push("/");
  };

  return (
    <div className="px-8">
      <div className="bg-white pl-6 shadow-sm max-w-full">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="ml-2 font-TTHovesProTrialDemiBold text-lg">
              My Todos
            </span>
          </div>
          <div className="flex items-center ml-auto mr-6 py-2 relative">
            <div className="cursor-pointer" onClick={handleProfileClick}>
              <Image
                src={ProfilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-40 bg-white border rounded-md shadow-md w-40">
                <div className="p-4">
                  <p className="font-TTHovesProTrialDemiBold text-sm">
                    Shavidini
                  </p>
                  <p className="text-gray-500 text-xs">Developer</p>
                </div>
                <button
                  className="block w-full text-left p-4 hover:bg-gray-200 text-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
