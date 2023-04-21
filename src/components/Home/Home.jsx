import Cards from '../Cards/cards';
import Slider from '../Slider/Slider';
import NavBar from '../NavBar/NavBar';
import SubNavBar from '../SubNavBar/SubNavBar';
import style from '../Home/cards.module.css'


const Home = () => {
    return(
        <div>
            <NavBar/>
            <p/>
            <div class="d-flex justify-content-center align-items-center">
                <SubNavBar/>
            </div>
                <p/>
                <div className='container'>
                <div class="row">
                <div class="col-md">
                <div class="d-inline-block"><Slider/></div>
                <div class="d-inline-block"><Slider/></div>
                </div>
                <p/>
            </div>
            </div>
            <div className={style.minibox}>
                <h1 class="display-5 text-danger">VideoGames</h1>
            </div>
            <div className=' text-center'>
                <p/>
                <Cards />
            </div>
            
        </div>
    )
}

export default Home;