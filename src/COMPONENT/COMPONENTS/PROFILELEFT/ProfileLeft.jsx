import React from "react";
import InfoCard from "../../INFOCARD/InfoCard";
import FollowersCard from "../FOLLOWERSCARD/FollowersCard";
import LogoSearch from "../LOGOSEARCH/LogoSearch";
// import './ProfileLeft.css'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
