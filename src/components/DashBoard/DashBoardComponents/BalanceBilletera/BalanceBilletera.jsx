import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

export default function Balance () {

    const [userInfo, setUserInfo] = useState(null);
    const  { user } = useAuth0();

    useEffect(() =>{
        const sub = user?.sub
        const loadData = async () =>{
            const {data} = await axios.get('http://localhost:3001/admin/allusers/' + sub);
            setUserInfo(data);
        }
        loadData();
      },[]);
      console.log(userInfo,'hola')

    //const balance = userInfo?.sellers ? userInfo.sallers.reduce((total, seller) => total + seller.clients, 0) : 100;
    const allUsers = userInfo?.sellers ? userInfo?.sellers.concat(userInfo.clients).reduce((totalBalance, seller) => totalBalance + seller.clients, 0) : 0;
    return(
        <>
            {/* {allUsers?.map((item) => ( */}
        <Card>
            <Flex>
                <Text>Total Balance</Text>
                ${allUsers}
            </Flex>
            <Metric>${allUsers}</Metric>
        </Card>
        {/* ))} */}
        
        </>
    )
};