import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenres, getPlatforms } from "../../Redux/actions/actions";
import NavBar from "../NavBar/NavBar";
import style from "../FormGames/FormGames.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const validation = (input) => {
  let errors = {};

  if (!input.imageFile) errors.imageFile = "required space";
  else if (!/\.(jpg|png)$/i.test(input.imageFile.name.trim()))
    errors.imageFile = "Only PNG or JPG format images are allowed.";

  if (!input.name) errors.name = "required space";
  else if (input.name.length > 39)
    errors.name = "Can not be longer than 40 characters ";

  if (!input.released) errors.released = "required space";
  else if (new Date(input.released) > new Date())
    errors.released =
      "The date entered can not be greater than the current date.";

  if (!input.platforms || input.platforms.length === 0)
    errors.platforms = "required space";

  if (!input.description) errors.description = "required space";
  else if (input.description.length > 500)
    errors.description = "can not have more than 500 characters";

  if (!input.genres || input.genres.length === 0)
    errors.genres = "required space";

  if (!input.price) errors.price = "required space";
  else if (Number(input.price) < 0)
    errors.price = "Price can not be lower than 0";

  if (!input.gameLink || input.gameLink.length === 0)
    errors.gameLink = "required space";

  return errors;
};

const FormGames = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const allPlatforms = useSelector((state) => state.allPlatforms);

  const [button, setButton] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    released: "",
    description: "",
    price: "",
    gameLink: "",
  });

  const [input, setInput] = useState({
    name: "",
    released: "",
    description: "",
    price: "",
    gameLink: "",
    imageFile: null,
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  const games = useSelector((state) => state.allVideogames);
  useEffect(() => {
    const existingGame = games.filter((e) => e.name == input.name);

    const today = new Date();
    const releaseDate = new Date(input.released);

    if (existingGame.length)
      return alert("Name already exist, please choose a different one");
    else if (
      releaseDate <= today &&
      input.price >= 1 &&
      input.name &&
      input.released &&
      input.platforms &&
      input.description &&
      input.genres &&
      input.imageFile &&
      input.price &&
      input.gameLink
    )
      setButton(false);
    else setButton(true);
  }, [input, setButton]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", input.imageFile);
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

    dispatch(
      postGame({
        name: input.name,
        released: input.released,
        platforms: input.platforms,
        description: input.description,
        genres: input.genres,
        image: imageUrl,
        price: input.price,
        gameLink: input.gameLink,
        sub: user.sub,
      })
    );

    alert("The game has been created");
    setInput({
      name: "",
      released: "",
      platforms: [],
      description: "",
      genres: [],
      image: "",
      imageFile: null,
      price: "",
      gameLink: "",
      //   insertGame: "",
    });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelectGenres = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };

  const handleDeleteGenres = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter((con) => con !== e),
    });
  };

  const handleSelectPlatform = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  };

  const handleDeletePlatforms = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((cont) => cont !== e),
    });
  };

  const handleImageChange = (e) => {
    setInput((input) => ({
      ...input,
      imageFile: e.target.files[0],
    }));
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.files[0],
      })
    );
  };

  return (
    <div className={style.fondo2}>
      <NavBar />
      <div className={style.Box}>
        <form onSubmit={handleSubmit}>
          <img
            src="https://cdn.discordapp.com/attachments/509143549787504665/1097210824713580644/gamee.png "
            width="100px"
            height="70px"
            alt="insert"
            className="container"
          />

          <div className={style.minibox}>
            <label>Image</label>
            <input
              type="file"
              name="imageFile"
              onChange={(e) => handleImageChange(e)}
            />
            {errors.imageFile && <p>{errors.imageFile}</p>}
          </div>

          <div className={style.minibox}>
            <label>Game Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className={style.minibox}>
            <label>Released</label>
            <input
              type="date"
              name="released"
              value={input.released}
              onChange={(e) => handleChange(e)}
            />
            {errors.released && <p>{errors.released}</p>}
          </div>

          <div className={style.minibox3}>
            <label className="mb-2">Platforms</label>
            <select
              className={`form-control mb-2 ${
                errors.platforms ? "is-invalid" : ""
              }`}
              name="platforms"
              id="platform"
              onChange={handleSelectPlatform}
            >
              <option disabled selected></option>
              {allPlatforms?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
            {errors.platforms && (
              <div className="invalid-feedback mb-2">{errors.platforms}</div>
            )}
            <div className="d-flex flex-wrap">
              {input.platforms?.map((e) => (
                <div key={e} className="mr-2 mb-2">
                  <span className="badge bg-danger">{e}</span>
                  <button
                    className="btn btn-link text-white"
                    onClick={() => handleDeletePlatforms(e)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={style.minibox}>
            <label htmlFor="">Description</label>
            <input
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
            />
            {errors.description && <p>{errors.description}</p>}
          </div>

          <div className={style.minibox3}>
            <label className="mb-2">Genres</label>
            <select
              className={`form-control mb-2 ${
                errors.genres ? "is-invalid" : ""
              }`}
              name="genres"
              id="genres"
              onChange={handleSelectGenres}
            >
              <option disabled selected></option>
              {allGenres?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
            {errors.genres && (
              <div className="invalid-feedback mb-2">{errors.genres}</div>
            )}
            <div className="d-flex flex-wrap">
              {input.genres?.map((e) => (
                <div key={e} className="mr-2 mb-2">
                  <span className="badge bg-danger">{e}</span>
                  <button
                    className="btn btn-link text-white"
                    onClick={() => handleDeleteGenres(e)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={style.minibox}>
            <label>Price</label>
            <input
              type="number"
              value={input.price}
              name="price"
              onChange={(e) => handleChange(e)}
            />
            {errors.price && <p>{errors.price}</p>}
          </div>

          <div className={style.minibox}>
            <label>Insert Game</label>
            <input
              type="text"
              value={input.gameLink}
              name="gameLink"
              onChange={(e) => handleChange(e)}
            />
            {errors.gameLink && <p>{errors.gameLink}</p>}
          </div>

          {/* <label htmlFor="">insert Game</label>
        <input
          type="file"
          name="insertGame"
          value={input.insertGame}
          onChange={(e) => handleChange(e)}
        /> */}
          {/* {errors.insertGame && <p>{errors.insertGame}</p>} */}
          <hr />

          <div>
            <button
              className="btn btn-danger mx-auto d-block"
              disabled={button}
              type="submit"
              input="input"
            >
              Add Game
            </button>
          </div>

          {/* <button className="btn btn-danger mx-auto d-block" type="submit">
            Add Game
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default FormGames;
