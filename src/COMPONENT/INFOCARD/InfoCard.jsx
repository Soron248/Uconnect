import React, { useState } from 'react';
import ProfileModal from '../COMPONENTS/ProfileModal/ProfileModal';


import './InfoCard.css'

const InfoCard = () => {

   const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h3>Personal Information</h3>
                <div>
                    <i class="fa-solid fa-pen" onClick={()=>setModalOpened(true)}></i>
                    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
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