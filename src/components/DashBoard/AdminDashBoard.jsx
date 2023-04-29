import { Card, Text, Title } from "@tremor/react";
import AllGamesComments from "./DashBoardComponents/AllGamesComments/AllGamesComments";
import AllUsers from "./DashBoardComponents/AllUsers/AllUsers";

export default () => {
    return(
        <Card>
            <AllUsers />
            <AllGamesComments />
        </Card>
    )
}