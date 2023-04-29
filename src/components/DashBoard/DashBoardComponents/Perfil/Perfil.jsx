import { useAuth0 } from "@auth0/auth0-react"
import { Card, Metric, Text, TextInput } from "@tremor/react"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from './Perfil.module.css';
import pencil from './edit.svg';

export default () => {
    const {user} = useAuth0();
    const [userInfo, setUserInfo] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [input, setInput] = useState({
        img: '',
        yt: '',
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

    useEffect(() =>{
        const loadData = async () =>{
            const {data} = await axios(`http://localhost:3001/user/profile/bybalance/${user.sub}`);
            setUserInfo(data);
        }
        loadData();
    },[])
    console.log(userInfo)
    
    return(
        <Card className={style.container}>
            <img src={userInfo?.profile.image || user?.picture} alt="F" />
            <button onClick={editHandler}><img className={style.pencil} src={pencil} alt="" /></button>
            {isActive && <div>
                            <label> Img:</label>
                            <TextInput name="img" placeholder="insert img link here!!" />
                            <label> Youtube Link:</label>
                            <TextInput name="yt" placeholder="Text Here!!" />
                            <label> Descripcion:</label>
                            <TextInput name="description" placeholder="Text Here!!" />
                            <button>Confirm</button>
                        </div>}
            <h2>{user?.given_name} - ID: ({userInfo?.profile.id})</h2>
            <h4>{user?.email}</h4>
            <p>Coins Balance:</p>
            <Metric>{userInfo?.balance.balance} coins.</Metric>
            <p>Youtube link: </p>
            
            
            <Text>{userInfo?.profile.linkYoutube}</Text>
            <p>Description: </p>
            <Text>{userInfo?.profile.description}</Text>
        </Card>
    )
}