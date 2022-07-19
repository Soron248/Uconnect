import React from 'react';
import PostSide from '../../COMPONENTS/POSTSIDE/PostSide';
import ProfileCard from '../../COMPONENTS/PROFILECARD/ProfileCard';
import ProfileLeft from '../../COMPONENTS/PROFILELEFT/ProfileLeft';
import RightSide from '../../COMPONENTS/RIGHTSIDE/RightSide';
import './Profile.css'

const Profile = () => {
    return (
        <div className="Profile">
            {/* <div className="blur" style={{ top: '-18%', right: '0' }}></div>
            <div className="blur" style={{ top: '36%', left: '-8rem' }}></div> */}
            <ProfileLeft/>
            <div className="Profile-center">
                <ProfileCard/>
                <PostSide/>
            </div>
            <RightSide/>
        </div>
    );
};

export default Profile;