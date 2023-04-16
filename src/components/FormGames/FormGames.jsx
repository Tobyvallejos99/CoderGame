import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenres } from "../../Redux/actions/actions";
import NavBar from "../NavBar/NavBar";
import { Image } from "cloudinary-react";
import style from '../FormGames/FormGames.module.css'

const FormGames = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  // const [errors, setErrors] = useState({});
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
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    // setErrors(
    //   validation({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInput((input) => ({
      ...input,
      imageFile: file,
    }));
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
    <div className={style.fondo2}>
      <NavBar />
      <div className={style.Box}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <img src="https://cdn.discordapp.com/attachments/509143549787504665/1097210824713580644/gamee.png "   width="100px"
                height="70px" alt="insert" className="container" />
   
        <div className={style.minibox}>
        <label>Image</label>
        <input
          type="file"
          name="imageFile"
          onChange={(e) => handleImageChange(e)}
        />
        {/* {errors.insertGame && <p>{errors.insertGame}</p>} */}
        </div>

        <div className={style.minibox}>
        <label>Game Name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        {/* {errors.name && <p>{errors.name}</p>} */}
        </div>
        
        
        <div className={style.minibox}>
        <label>Released</label>
        <input
          type="date"
          name="released"
          value={input.released}
          onChange={(e) => handleChange(e)}
        /></div>

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
        {/* {errors.platform && <p>{errors.platform}</p>} */}
        </div>

        <div className={style.minibox}>
        <label htmlFor="">Description</label>
        <input
          type="text"
          name="description"
          value={input.description}
          onChange={(e) => handleChange(e)}
        />
        {/* {errors.description && <p>{errors.description}</p>} */}
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
        {/* {errors.videogames && <p>{errors.videogames}</p>} */}
        </div>

        {/* <label htmlFor="">insert Game</label>
        <input
          type="file"
          name="insertGame"
          value={input.insertGame}
          onChange={(e) => handleChange(e)}
        /> */}
        {/* {errors.insertGame && <p>{errors.insertGame}</p>} */}
        

        <button className="btn btn-danger mx-auto d-block" type="submit">Leave your game</button>
      </form>
      </div>
    </div>
  );
};

export default FormGames;
