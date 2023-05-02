import { useAuth0 } from "@auth0/auth0-react";
import { Card, Metric, Text, TextInput } from "@tremor/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Perfil.module.css";
import pencil from "./edit.svg";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../../LoginLogout/Logout";

export default () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState({
    image: null,
    linkYoutube: "",
    description: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const editHandler = (e) => {
    e.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", input.image);
    formData.append("upload_preset", "mrit7ruy");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dng2w6k2p/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    const imageUrl = data.secure_url;

    const sub = user.sub;
    const update = {
      sub: sub,
      // image: imageUrl,
      image:  imageUrl ? imageUrl : userInfo.profile.image,
      linkYoutube:
        input.linkYoutube.length > 0
          ? input.linkYoutube
          : userInfo.profile.linkYoutube,
      description:
        input.description.length > 0
          ? input.description
          : userInfo.profile.description,
    };
    console.log(update, sub);
    await axios.put(`http://localhost:3001/user/profile`, update);
    setInput({
      image: null,
      linkYoutube: "",
      description: "",
    });
    alert("Your change is done bro!!");
  };

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios(
        `http://localhost:3001/user/profile/bybalance/${user.sub}`
      );
      setUserInfo(data);
    };
    loadData();
  }, []);
  console.log(userInfo)
  console.log(user)
  const handleImageChange = (e) => {
    setInput((input) => ({
      ...input,
      image: e.target.files[0],
    }));
  };

  return (
    <div className={style.container}>
      <div className="text-center">
        <img className={style.profileImg} src={userInfo?.profile.image || user?.picture} alt="F" />
        <button onClick={editHandler}>
          <img className={style.pencil} src={pencil} alt="" />
        </button>

        {isActive && (
          <form onSubmit={submitHandle}>
            <label> Img:</label>
            <TextInput
              name="image"
              type="file"
              onChange={(e) => handleImageChange(e)}
              placeholder="insert img link here!!"
            />
            <label> Youtube Link:</label>
            <TextInput
              name="linkYoutube"
              value={input.linkYoutube}
              onChange={handleChange}
              placeholder="Text Here!!"
            />
            <label> Descripcion:</label>
            <TextInput
              name="description"
              value={input.description}
              onChange={handleChange}
              placeholder="Text Here!!"
            />
            <label> Cover Image:</label>
            <TextInput
              name="coverImage"
              value={input.coverImage}
              onChange={handleChange}
              placeholder="Text Here!!"
            />
            <button>Confirm</button>
          </form>
        )}
        <h2>
          {user?.given_name}
        </h2>
        <h4>{user?.email}</h4>
        <p>Coins Balance:</p>
        <Metric>{userInfo?.balance.balance} coins.</Metric>
        <Link className="btn btn-outline-danger" to={"/payment"}>
          Buy Coins
        </Link>
        <p>Youtube link: </p>
        <Text>{userInfo?.profile.linkYoutube}</Text>
        <p>Description: </p>
        <Text>{userInfo?.profile.description}</Text>
        <Logout />
      </div>
    </div>
  );
};
