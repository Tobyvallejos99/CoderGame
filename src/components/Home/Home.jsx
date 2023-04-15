import Cards from '../Cards/cards';
import Slider from '../Slider/Slider';
import NavBar from '../NavBar/NavBar';
import SubNavBar from '../SubNavBar/SubNavBar';



const Home = () => {
    return(
        <div>
            <NavBar/>
            <p/>
            <div class="d-flex justify-content-center align-items-center">
            <SubNavBar/>
            </div>
            <p/>
            <Slider />
            <div className='position-absolute'><Cards /></div>
            
        </div>
    )
}

export default Home;