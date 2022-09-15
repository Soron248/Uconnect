import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../../actions/UploadAction";
import { updateUser } from "../../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profilePicture"
        ? setProfilePicture(img)
        : setCoverPicture(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profilePicture) {
      const data = new FormData();
      const fileName = Date.now() + profilePicture.name;
      data.append("name", fileName);
      data.append("file", profilePicture);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverPicture) {
      const data = new FormData();
      const fileName = Date.now() + coverPicture.name;
      data.append("name", fileName);
      data.append("file", coverPicture);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="30%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.livesin}
            onChange={handleChange}
            className="infoInput"
            name="livesin"
            placeholder="Lives in"
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.campusid}
            onChange={handleChange}
            className="infoInput"
            name="campusid"
            placeholder="Campus ID"
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.department}
            onChange={handleChange}
            className="infoInput"
            name="department"
            placeholder="Department"
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.worksAt}
            onChange={handleChange}
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
          />
        </div>
        <div className="imgUpload">
          Profile Image
          <input type="file" name="profilePicture" onChange={onImageChange} />
          <br />
          Cover Image
          <input type="file" name="coverPicture" onChange={onImageChange} />
        </div>

        <button className="btn button fc-button" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
