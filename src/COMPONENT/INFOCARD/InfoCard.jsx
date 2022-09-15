import React, { useState, useEffect } from "react";
import ProfileModal from "../COMPONENTS/ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequest.js";
import "./InfoCard.css";
import { logout } from "../../actions/AuthAction";
import { FaPencilAlt } from "react-icons/fa";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching");
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h3>Profile Information</h3>
        {user._id === profileUserId ? (
          <div>
            <FaPencilAlt
              class="fa-solid fa-pen"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="Info">
        <span>
          <b>Student Id: </b>
        </span>
        <span>{profileUser.campusid}</span>
      </div>
      <div className="Info">
        <span>
          <b>lives In </b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>
      <div className="Info">
        <span>
          <b>Works At </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <div className="button logout-button" onClick={handleLogOut}>
        Logout
      </div>
    </div>
  );
};

export default InfoCard;
