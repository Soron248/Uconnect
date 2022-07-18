import React from 'react';


import './InfoCard.css'

const InfoCard = () => {


    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h3>Personal Information</h3>
                <div>
                    <i class="fa-solid fa-pen"></i>
                    
                </div>
            </div>

            <div className="Info">
                <span>
                    <b>Student Id: </b>
                </span>
                <span>183-15-2321</span>
            </div>
            <div className="Info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Manikganj Sador, Manikganj</span>
            </div>
            <div className="Info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Brain Station 23</span>
            </div>
            <div className="button logout-button">
                Logout
            </div>
        </div>
    );
};

export default InfoCard;