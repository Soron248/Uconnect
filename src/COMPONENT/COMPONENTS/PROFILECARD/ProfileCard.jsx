import React from "react";
import "./ProfileCard.css";
import Cover from "../../../img/cover.jpg";
import Profile from "../../../img/profile_n.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProfileCard({ location }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultc.png"
          }
          alt="cover-img"
        />
        <img
          src={
            user.coverPicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultp.jpg"
          }
          alt="cover-img"
        />
      </div>

      <div className="ProfileName">
        <span>{user.username}</span>
        <span>{user.worksAt ? user.worksAt : "write about yourself"}</span>
        <span className="DepartmentName">
          {user.department ? user.department : "write your department name"}
        </span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Follower</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "profilePage" ? (
        " "
      ) : (
        <span>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
}

export default ProfileCard;
