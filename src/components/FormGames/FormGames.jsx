import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenres } from "../../Redux/actions/actions";
import NavBar from "../NavBar/NavBar";
import { Image } from "cloudinary-react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    if (
      !input.name ||
      !input.released ||
      !input.platforms ||
      !input.description ||
      !input.genres ||
      !input.imageFile
      //   !input.insertGame
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
      //   insertGame: "",
    });
  };

  return (
    <div>
      <NavBar />

      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>INSERT GAME</h1>
        <hr />

        <label>Image</label>
        <input
          type="file"
          name="imageFile"
          onChange={(e) => handleImageChange(e)}
        />
        {errors.imageFile && <p>{errors.imageFile}</p>}
        <hr />

        <label>Game Name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        {errors.name && <p>{errors.name}</p>}
        <hr />

        <label>Released</label>
        <input
          type="date"
          name="released"
          value={input.released}
          onChange={(e) => handleChange(e)}
        />
        {errors.released && <p>{errors.released}</p>}
        <hr />

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
        <hr />

        <label htmlFor="">Description</label>
        <input
          type="text"
          name="description"
          value={input.description}
          onChange={(e) => handleChange(e)}
        />
        {errors.description && <p>{errors.description}</p>}
        <hr />

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
        <hr />

        {/* <label htmlFor="">insert Game</label>
        <input
          type="file"
          name="insertGame"
          value={input.insertGame}
          onChange={(e) => handleChange(e)}
        /> */}
        {/* {errors.insertGame && <p>{errors.insertGame}</p>} */}
        <hr />

        <button type="submit">Leave your game</button>
      </form>
    </div>
  );
};

export default FormGames;
