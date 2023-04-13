import { useState } from 'react';

//const Slider = ({images}) => {
const Slider = () => {

    const images = [
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg'
    ]

    const [currImg, setCurrImg] = useState(0);
    const length = images?.length;

    const nextImg = () => {
        setCurrImg(currImg === length -1 ?
            0 : currImg +1)
    }

    const preImg = () => {
        setCurrImg(currImg === 0 ?
            length -1 : currImg -1)
    }

    return(
        <div>
            <button onClick={preImg}>pre</button>
            {images.map((imagen, index) => {
                return(
                    <div key={index}>
                        {currImg === index &&
                            <img key={index} src={imagen} alt='F' width='600px' height='300px' />
                        }
                    </ div>
                )
            })}
            <button onClick={nextImg}>next</button>
        </div>
    )
}

export default Slider;