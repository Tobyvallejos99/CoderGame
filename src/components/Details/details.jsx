import { useEffect } from "react";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import style from './detail.module.css'
import axios from "axios";

export default function Detail() {
const params = useParams();
const [videogame, setVideogame] = useState({});

useEffect(() => {
    axios
    .get(`http://localhost:3001/videogames/${params.id}`)
    .then((response) => {
        setVideogame(response.data);
        console.log(videogame)
    })
    .catch((err) => window.alert(`${err.message}`));
    // return () => {
    // //setVideogame({});
    // };
}, []);

return (
    <div className={style.container}>
        <div className={style.imgBox}>
            <img className={style.image} src={videogame.image} alt="" width='300px'  heigth='300px' />
        </div>
    <div className={style.textBox}>
        <h1>{videogame.name}</h1>
        <NavLink to={"/"} className="btn btn-danger text-center">
        <button  className="btn btn-danger text-center">Return to home</button>
        </NavLink>
        <div>
        <div>
            <div>
                {videogame.description || videogame.description_raw ?
                    <h2 >Description</h2> : null
                }
            <p  value="description">
                {videogame.description_raw
                ? videogame.description_raw
                : videogame.description}
            </p>
            </div>
            <div>
            <div >
                <h2 >Genres</h2>
                <ul className={style.genderBox}>
                {videogame.Genregames?.map((obj) => {
                    return <li className='btn btn-danger' key={obj.name}>{obj.name}</li>;
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
                <ul className={style.platformBox}>
                {videogame.platforms?.map((obj) => {
                    if (obj.platform) {
                    return (
                        <li className='btn btn-danger' key={obj.platform.name}>{obj.platform.name}</li>
                    );
                    } else {
                    return <li className='btn btn-danger' key={obj}>{obj}</li>;
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
