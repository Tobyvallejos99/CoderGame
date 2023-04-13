import Cards from '../Cards/cards';
import SearchBar from '../SearchBar/SearchBar'
import Slider from '../Slider/Slider';

const Home = () => {
    return(
        <div class="container text-center">
            <h1 class="text-danger">this is home</h1>
            <SearchBar />
            <Cards />
            <Slider />
        </div>
    )
}

export default Home;