import React from "react";
import PostSide from "../../COMPONENTS/POSTSIDE/PostSide";
import ProfileCard from "../../COMPONENTS/PROFILECARD/ProfileCard";
import ProfileLeft from "../../COMPONENTS/PROFILELEFT/ProfileLeft";
import RightSide from "../../COMPONENTS/RIGHTSIDE/RightSide";
import "./Profile.css";

const Profile = () => {
  return (
    <div className=" Profile">
      <ProfileLeft />

      <div className="Profile-center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
