import React from 'react'
import FollowersCard from '../FOLLOWERSCARD/FollowersCard'
import LogoSearch from '../LOGOSEARCH/LogoSearch'
import ProfileCard from '../PROFILECARD/ProfileCard'
import "./Profileside.css"

const profileSide = () =>{
    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    )
}

export default profileSide