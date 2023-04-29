import { useAuth0 } from "@auth0/auth0-react"
import { Card, Metric, Text, TextInput } from "@tremor/react"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from './Perfil.module.css';
import pencil from './edit.svg';
import { Link } from "react-router-dom";

export default () => {
    const {user} = useAuth0();
    const [userInfo, setUserInfo] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [input, setInput] = useState({
        image: '',
        linkYoutube: '',
        description: ''
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });       
    }

    const editHandler = (e) => {
        e.preventDefault();
        isActive ? setIsActive(false) : setIsActive(true)
    }

    const submitHandle = async (e) => {
        e.preventDefault();
        const sub = user.sub;
        const update = {
            sub: sub,
            image: input.image.length > 0 ? input.image : userInfo.profile.image,
            linkYoutube: input.linkYoutube.length > 0 ? input.linkYoutube : userInfo.profile.linkYoutube,
            description: input.description.length > 0 ? input.description : userInfo.profile.description
        }
        console.log(update, sub)
        await axios.put(`http://localhost:3001/user/profile`, update);
        setInput({
            image: '',
            linkYoutube: '',
            description: ''
        });
    }

    useEffect(() =>{
        const loadData = async () =>{
            const {data} = await axios(`http://localhost:3001/user/profile/bybalance/${user.sub}`);
            setUserInfo(data);
        }
        loadData();
    },[]);
    
    return(
        <Card className={style.container}>
            <img src={userInfo?.profile.image || user?.picture} alt="F" />
            <button onClick={editHandler}><img className={style.pencil} src={pencil} alt="" /></button>
            
            {isActive && <form onSubmit={submitHandle}>
                            <label> Img:</label>
                            <TextInput name="image" value={input.image} onChange={handleChange} placeholder="insert img link here!!" />
                            <label> Youtube Link:</label>
                            <TextInput name="linkYoutube" value={input.linkYoutube} onChange={handleChange} placeholder="Text Here!!" />
                            <label> Descripcion:</label>
                            <TextInput name="description" value={input.description} onChange={handleChange} placeholder="Text Here!!" />
                            <button>Confirm</button>
                        </form>}
            <h2>{user?.given_name} - ID: ({userInfo?.profile.id})</h2>
            <h4>{user?.email}</h4>
            <p>Coins Balance:</p>
            <Metric>{userInfo?.balance.balance} coins.</Metric>
            <Link className="btn btn-outline-danger" to={"/payment"}>Buy Coins</Link>
            <p>Youtube link: </p>            
            <Text>{userInfo?.profile.linkYoutube}</Text>
            <p>Description: </p>
            <Text>{userInfo?.profile.description}</Text>
        </Card>
    )
}