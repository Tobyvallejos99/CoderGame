import { Card, Text, Title } from "@tremor/react";
import AllGamesComments from "./DashBoardComponents/AllGamesComments/AllGamesComments";
import AllUsers from "./DashBoardComponents/AllUsers/AllUsers";
import style from "../DashBoard/DashBoard.module.css"

export default () => {
    return(
        <div className={style.container}>
            <AllUsers />
            <AllGamesComments />
        </div>
    )
}