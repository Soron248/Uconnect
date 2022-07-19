import React from 'react';
import './RightSide.css'
import Home from '../../../img/home.png'
import Noti from '../../../img/noti.png'
import Comment from '../../../img/comment.png'
import TrendCard from '../TRENDCARD/TrendCard';

const RightSide = () => {
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <i class="fa-solid fa-gear"></i>
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>

            <TrendCard/>
            <div className="button r-button">
                Share
            </div>
        </div>
    );
};

export default RightSide;