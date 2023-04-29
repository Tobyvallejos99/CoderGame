import { useAuth0 } from "@auth0/auth0-react"
import { Card } from "@tremor/react"
import style from './Perfil.module.css';

export default () => {
    const {user} = useAuth0();


    return(
        <Card className={style.container}>
            <img src={user.picture} alt="F" />
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
        </Card>
    )
}