import Cards from '../Cards/cards';
import Slider from '../Slider/Slider';
import NavBar from '../NavBar/NavBar';
import style from '../Home/cards.module.css'


const Home = () => {
    return(
        <div>
            <NavBar/>
            <p/>
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
                <h1 class="display-4 text-dark text-center">🕹️ Best Games 🕹️</h1>
            </div>
            <div className='text-center '>
                <p/>
                <Cards />
            </div>
            
        </div>
    )
}

export default Home;