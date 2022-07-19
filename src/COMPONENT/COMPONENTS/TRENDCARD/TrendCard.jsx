import React from 'react';
// connect css
import './TrendCard.css'


// import API
import { TrendData } from '../../../Data/TrendData.js';


const TrendCard = () => {
    return (
        <div className="TrendCard">
            <h3>Trends Group For You</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    );
};

export default TrendCard;