import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenres } from "../../Redux/actions/actions";
import NavBar from "../NavBar/NavBar";
import style from "../FormGames/FormGames.module.css";

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
  else if (input.description.length > 100)
    errors.description = "can not have more than 100 characters";

  if (!input.genres || input.genres.length === 0)
    errors.genres = "required space";

  if (!input.price) errors.price = "required space";
  else if (Number(input.price) < 0)
    errors.price = "Price can not be lower than 0";
  else if (Number(input.price) > 100)
    errors.price = "Price can not be higher than 0";

  if (!input.gameLink || input.gameLink.length === 0)
    errors.gameLink = "required space";

  return errors;
};

const FormGames = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    released: "",
    platforms: [],
    description: "",
    genres: [],
    imageFile: null,
    price: "",
    gameLink: "",
    // insertGame: "",
  });
  console.log(input, "holaaa");

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSelectGenres = (e) => {
    setInput((input) => {
      if (e.target.name === "genres") {
        return {
          ...input,
          genres: [...input.genres, e.target.value],
        };
      } else {
        return {
          ...input,
          [e.target.name]: e.target.value,
        };
      }
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelectPlatform = (e) => {
    setInput((input) => {
      if (e.target.name === "platforms") {
        return {
          ...input,
          platforms: [...input.platforms, e.target.value],
        };
      } else {
        return {
          ...input,
          [e.target.name]: e.target.value,
        };
      }
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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

  const handleDeleteGenres = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter((con) => con !== e),
    });
  };

  const handleDeletePlatforms = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((cont) => cont !== e),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    if (
      !input.name ||
      !input.released ||
      !input.platforms ||
      !input.description ||
      !input.genres ||
      !input.imageFile ||
      !input.price ||
      !input.gameLink
    ) {
      return alert("Complete the form correctly before submitting it");
    }

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

  return (
    <div className={style.fondo2}>
      <NavBar />
      <div className={style.Box}>
        <form onSubmit={(e) => handleSubmit(e)}>
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

          <div className={style.minibox}>
            <label>Platforms</label>
            <select
              name="platforms"
              id="platform"
              onChange={(e) => handleSelectPlatform(e)}
            >
              <option value="select"></option>
              <option value="PlayStation5">PlayStation 5</option>
              <option value="Xbox Series S/X">Xbox Series S/X</option>
              <option value="PlayStation 4">PlayStation 4</option>
              <option value="PC">PC</option>
              <option value="Xbox One">Xbox One</option>
              <option value="Xbox 360">Xbox 360</option>
              <option value="PlayStation 3">PlayStation 3</option>
            </select>
            {errors.platforms && <p>{errors.platforms}</p>}
          </div>
          <div>
            {input.platforms?.map((e) => (
              <div>
                <p> {e} </p>
                <button onClick={() => handleDeletePlatforms(e)}>X </button>
              </div>
            ))}
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

          <div className={style.minibox}>
            <label>Genres</label>
            <select
              name="genres"
              id="genres"
              onChange={(e) => handleSelectGenres(e)}
            >
              <option value="empty"></option>
              {allGenres?.map((el) => (
                <option value={el.name}>{el.name}</option>
              ))}
            </select>
            {errors.genres && <p>{errors.genres}</p>}
          </div>
          <div>
            {input.genres?.map((e) => (
              <div>
                <p> {e} </p>
                <button onClick={() => handleDeleteGenres(e)}>X </button>
              </div>
            ))}
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

          <button className="btn btn-danger mx-auto d-block" type="submit">
            Add Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormGames;
