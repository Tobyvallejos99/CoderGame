import Cards from '../Cards/cards';
import Slider from '../Slider/Slider';
import NavBar from '../NavBar/NavBar';
import SubNavBar from '../SubNavBar/SubNavBar';
import FilterBar from '../FilterBar/FilterBar';


const Home = () => {
    return(
        <div>
            <NavBar/>
            <p/>
            <SubNavBar/>
            <p/>
            <Slider />
            <FilterBar />
            <Cards />
            
        </div>
    )
}

export default Home;