import React from "react";
import { BadgeDelta, Card, ColGrid, Flex, Metric, Text } from '@tremor/react';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";
// const chartdata = [
//     {
//       name: "Balance de Juegos Comprados",
//       "Balance": 34734,
//       delta: '9.5%',
//     },
//     {
//       name: "Saldo de Coins",
//       "Balance":1445,
//       delta: '5.1%',
//     },
//   ]

//   const dataFormatter = (number: number)  => 
//     `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Balance ()  {
    const [userInfo, setUserInfo] = useState({sallers: []});
    const  { user } = useAuth0();

    useEffect(() => {
        const sub = user?.sub
        //const loadData = async () => {
            //console.log(loadData)
            const {data} = axios.get(`http://localhost:3001/admin/allusers?sub=${sub}`);
            setUserInfo(data);
        
         //loadData();
        //console.log(loadData)
        
    }, []);

    const balance = userInfo?.sellers ? userInfo.sallers.reduce((total, seller) => total + seller.Balance, 0) : 0;

    return(
        <>
        <Card>
            <Flex>
                <Text>Total Balance</Text>
                <BadgeDelta text={balance} />
            </Flex>
            <Metric>${balance}</Metric>
        </Card>
        
        </>
    )
};