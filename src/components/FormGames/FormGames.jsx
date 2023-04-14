import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenres } from "../../Redux/actions/actions";
import NavBar from "../NavBar/NavBar";

const FormGames = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  // const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    platform: "",
    allGenres: [],
    img: [],
    description: "",
    insertGame: "",
    released: "",
  });
  console.log(input, "holaaa");

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSelect = (e) => {
    setInput((input) => {
      if (e.target.name === "allGenres") {
        return {
          ...input,
          allGenres: [...input.allGenres, e.target.value],
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
    setInput(e.target.files[0]);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(input);
  //   if (
  //     !input.allGenres ||
  //     !input.name ||
  //     !input.platform ||
  //     !input.released ||
  //     !input.img ||
  //     !input.description ||
  //     !input.insertGame
  //   ) {
  //     return alert("Complete the form correctly before submitting it");
  //   }

  //   dispatch(postGame(input));
  //   alert("The game has been created");
  //   setInput({
  //     released: "",
  //     name: "",
  //     platform: "",
  //     allGenres: [],
  //     img: "",
  //     description: "",
  //     insertGame: "",
  //   });
  // };

  return (
    <div>
      <NavBar />

      <form>
        <h1>INSERT GAME</h1>
        <hr />

        <label>Image</label>
        <input
          type="text"
          name="img"
          value={input.img}
          onChange={(e) => handleImageChange(e)}
        />
        <hr />

        <label>Game Name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        {/* {errors.name && <p>{errors.name}</p>} */}
        <hr />

        <label>Genres</label>
        <select
          name="allgenres"
          id="allgenres"
          onChange={(e) => handleSelect(e)}
        >
          <option value="empty"></option>
          {allGenres?.map((el) => (
            <option value={el.id}>{el.name}</option>
          ))}
        </select>
        {/* {errors.videogames && <p>{errors.videogames}</p>} */}
        <hr />

        <label>Platforms</label>
        <select name="platform" id="platform" onChange={(e) => handleSelect(e)}>
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
        <hr />
        <label>Released</label>
        <input
          type="date"
          name="released"
          value={input.released}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="">Description</label>
        <input
          type="text"
          name="description"
          value={input.description}
          onChange={(e) => handleChange(e)}
        />
        {/* {errors.description && <p>{errors.description}</p>} */}
        <hr />

        <label htmlFor="">insert Game</label>
        <input
          type="file"
          name="insertGame"
          value={input.insertGame}
          onChange={(e) => handleChange(e)}
        />
        {/* {errors.insertGame && <p>{errors.insertGame}</p>} */}
      </form>
    </div>
  );
};

export default FormGames;
