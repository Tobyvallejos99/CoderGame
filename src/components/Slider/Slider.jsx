import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './slider.module.css'


const Slider = ({maped}) => {    
    // const images = [
    //     'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    //     'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
    //     'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
    //     'https://img.utdstc.com/screen/213/b95/213b959901a318bd45e6a99ce2f3b4148aacc7219d5987857bd14b48a659d36a:400',
    //     'https://www.muycomputer.com/wp-content/uploads/2019/12/SuperMarioGalaxy2.jpg',
    //     'https://media.revistagq.com/photos/61bc91a5fbb7175cba582df3/16:9/w_2560%2Cc_limit/god-of-war-ragnarok-hero-banner-desktop-01-en-07sep21.jpeg',
    //     'https://japangemu.com/wp-content/uploads/2023/02/1639300650_471838_1639300814_noticia_normal.jpg',
    // ]

    const [currImg, setCurrImg] = useState(0);
    const length = maped?.length;

    const nextImg = () => {
        setCurrImg(currImg === length -1 ?
            0 : currImg +1)
    }

    const preImg = () => {
        setCurrImg(currImg === 0 ?
            length -1 : currImg -1)
    }

    useEffect(() => {
        setTimeout(nextImg, 5000)
    }, [setTimeout, nextImg]);

    return(
        <div className="text-center">
            <div className='text-center btn btn-danger'>Recomendados</div>
            {maped?.map((imagen, index) => {
                return(
                    <Link className={currImg === index ? style.container : style.noCurrent} key={index} to={'/game/'+imagen?.id}>
                        {currImg === index &&
                            <img key={index} src={imagen?.image} alt='F' width='600px' height='300px' />
                        }
                    </ Link>
                )
            })}
            <div className={style.container}>
                <button class="btn btn-danger" style={{ marginRight: "10px" }} onClick={preImg}>
                    ⇐
                </button>
                <button class="btn btn-danger" onClick={nextImg}>
                    ⇒
                </button>
                </div>
        </div>
    )
}

export default Slider;