import { useEffect } from "react";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

export default function Detail() {
const { detailId } = useParams();
const [videogame, setVideogame] = useState({});

useEffect(() => {
    axios
    .get(`/videogames/${detailId}`)
    .then((response) => {
        setVideogame(response.data);
    })
    .catch((err) => window.alert(`${err.message}`));
    return () => {
    setVideogame({});
    };
}, []);

return (
    <div>
    <img src={img} alt="" />
    <div>
        <h1>{videogame.name}</h1>
        <NavLink to={"/home"}>
        <button>Return to home</button>
        </NavLink>
        <div>
        <div>
            <img
            src={videogame.background_image}
            alt=""
            />
        </div>
        <div>
            <div>
            <h2 >Description</h2>
            <p  value="description">
                {videogame.description_raw
                ? videogame.description_raw
                : videogame.description}
            </p>
            </div>
            <div>
            <div >
                <h2 >Genres</h2>
                <ul >
                {videogame.genres?.map((obj) => {
                    return <li key={obj.name}>{obj.name}</li>;
                })}
                </ul>
            </div>
            <div >
                <h2 >Released</h2>
                <p value="released">
                {videogame.released}
                </p>
            </div>
            <div >
                <h2 >Rating</h2>
                <p value="rating">
                {videogame.rating}
                </p>
            </div>
            <div>
                <h2>Platforms</h2>
                <ul>
                {videogame.platforms?.map((obj) => {
                    if (obj.platform) {
                    return (
                        <li key={obj.platform.name}>{obj.platform.name}</li>
                    );
                    } else {
                    return <li key={obj}>{obj}</li>;
                    }
                })}
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
}
