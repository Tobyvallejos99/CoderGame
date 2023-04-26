import Cards from '../Cards/cards';
import CartBtn from '../CartBtn/CartBtn';
import NavBar from '../NavBar/NavBar';
import SubNavBar from '../SubNavBar/SubNavBar';
import style from './videogames.module.css'



const VideoGames = () => {
    return(
        <div>
            <NavBar/>
            <CartBtn />
            <p/>
            <div class="d-flex justify-content-center align-items-center">
                <SubNavBar/>
               
            </div>
             <p/>
            <div className={style.minibox}>
                <h1 class="display-4 text-dark text-center"> 🎮 VideoGames 🎮</h1>
            </div>
            <div className=' text-center'>
                <p/>
                <Cards />
            </div>
            
        </div>
    )
}

export default VideoGames;