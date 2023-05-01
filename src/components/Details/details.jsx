import { useEffect } from "react";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import style from './detail.module.css'
import axios from "axios";
import NavBar from '../NavBar/NavBar'
import Comments from "../Comments/comment";

export default function Detail() {
const params = useParams();
const [videogame, setVideogame] = useState({});
const comentario=videogame.ComentariosVs;


useEffect(() => {
    axios
    .get(`http://localhost:3001/videogames/${params.id}`)
    .then((response) => {
        setVideogame(response.data);
    })
    .catch((err) => window.alert(`${err.message}`));
    // return () => {
    // //setVideogame({});
    // };
}, []);

return (
    <div className={style.fondo2}>
        <NavBar />
    <div className={style.container}>
        <div className={style.imgBox}>
            <img className={style.image} src={videogame.image} alt="" width='300px'  heigth='300px' />
        </div>
    <div className='text-center'>
        <h1>{videogame.name}</h1>
        <div>
        <div>
            <div className={style.minibox}>
                {videogame.description || videogame.description_raw ?
                    <div>Description</div> : null
                }
                <div >
            <p  value="description">
                {videogame.description_raw
                ? videogame.description_raw
                : videogame.description}
            </p>
            </div>
            </div>
            <div>
            <div className={style.minibox} >
                <h2 >Genres</h2>
                <ul className={style.genderBox}>
                {videogame.Genregames?.map((obj) => {
                    return <li className='btn btn-danger' key={obj.name}>{obj.name}</li>;
                })}
                </ul>
            </div>
            <div className={style.minibox}>
                <h2 >Released</h2>
                <p value="released">
                {videogame.released}
                </p>
            </div>
            <div className={style.minibox}>
                <h2 >Rating</h2>
                <p value="rating">
                {videogame.rating ? videogame.rating : 'No Rated Yet'}
                </p>
            </div>
            <div className={style.minibox}>
                <h2>Platforms</h2>
                <ul className={style.platformBox}>
                {videogame.Platforms?.map((obj) => {
                    return(
                        <li className='btn btn-danger' key={obj.name}>{obj.name}</li>
                    )
                })}
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className={style.container}>
        <Comments id={params.id} />
    </div>

    <div className={style.container}>
    {videogame.ComentariosVs?.map((comment) => (
    <div key={comment.id}>
        <p className="btn btn-danger">Comments :</p>
        <p>{comment.message}</p>
        <p>{comment.date}</p>
        <p>{comment.name}</p>
    </div>
    ))}
</div>
    </div>
);
}
