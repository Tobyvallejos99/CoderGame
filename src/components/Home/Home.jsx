import Cards from '../Cards/cards';
import Slider from '../Slider/Slider';
import NavBar from '../NavBar/NavBar';
import FilterBar from '../FilterBar/FilterBar';

const Home = () => {
    return(
        <div>
            <NavBar/>
            <p/>
            <Slider />
            <FilterBar />
            <Cards />
            
        </div>
    )
}

export default Home;