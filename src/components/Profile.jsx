import React from 'react';
import profile from "../assets/AIProfile.jpg"

const Profile = () => {
    return (
        <div className="relative w-full h-[600px] bg-black">
          {/* Container for the image and gradient */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/100 to-transparent z-10" />
            
            {/* Image container with right alignment */}
            <div className="absolute inset-y-0 right-0 w-4/6 h-full">
              <img
                src={profile}
                alt="Profile"
                className="h-full w-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      );
};

export default Profile;