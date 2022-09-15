import React from "react";
import ProfileImage from "../../../img/profile_n.jpg";

import "./PostShare.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../../actions/UploadAction";

const PostShare = () => {
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const desc = useRef();
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };
  return (
    <div className="PostShare">
      <img
        src={
          user.coverPicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultp.jpg"
        }
        alt=""
      />
      <div>
        <input
          ref={desc}
          required
          type="text"
          name=""
          id=""
          placeholder="What's happening"
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <i class="fa-solid fa-images"></i> Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <i class="fa-solid fa-circle-play"></i> Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <i class="fa-solid fa-location-dot"></i> Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <i class="fa-solid fa-calendar-days"></i> Shedule
          </div>
          <button
            className="button ps-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "uploading" : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <i class="fa-solid fa-xmark" onClick={() => setImage(null)}></i>
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
