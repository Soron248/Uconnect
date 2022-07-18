import React from 'react';
import './ProfileCard.css';
import Cover from '../../../img/cover.jpg';
import Profile from '../../../img/profile_n.jpg';

function ProfileCard() {

    const ProfilePage = true;

    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="cover-img" />
                <img src={Profile} alt="cover-img" />
            </div>

            <div className="ProfileName">
                <span>Nishat Sarker</span>
                <span>Full-Stack Web Developer</span>
                <span className='DepartmentName'>Department Of Computer Science & Engineering</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>1,356</span>
                        <span>Followers</span>
                    </div>
                    <div className="vl">

                    </div>
                    <div className="follow">
                        <span>621</span>
                        <span>Following</span>
                    </div>

                    {ProfilePage && (
                        <>
                        <div className="vl">

                        </div>
                        <div className="follow">
                            <span>13</span>
                            <span>Posts</span>
                        </div>
                        </>
                    )}

                </div>
                <hr />
            </div>
            
            {/* {ProfilePage ? " " : <span>My Profile</span>} */}

            <span>My Profile</span>
        </div>
    );
}

export default ProfileCard;