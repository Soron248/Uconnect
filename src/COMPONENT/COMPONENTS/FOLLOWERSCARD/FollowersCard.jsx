import React from 'react';
import './FollowersCard.css'

import { Followers } from '../../../Data/FollowersData'
function FollowersCard(props) {
    return (
        <div className="FollowersCard">
            <h3>Who is following you</h3>

            {Followers.map((follower, id)=>{
                return(
                    <div className="follower">
                        <div>
                            <img src={follower.img} alt="follower-img" className='followerImg'/>
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                       <div className='button fc-button'>
                            Follow
                       </div>
                    </div>
                )
            })}
        </div>
    );
}

export default FollowersCard;