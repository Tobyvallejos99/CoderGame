import React from "react";
import { BadgeDelta, Card, ColGrid, Flex, Metric, Text } from '@tremor/react';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

export default function Balance ()  {
    const [userInfo, setUserInfo] = useState('');
    const  { user } = useAuth0();

    useEffect(() => {
        const sub = user?.sub
        const loadData = async () =>{
            const {data} = await axios.get('https://localhost:3001/admin/balance/' + sub);
            setUserInfo(data);
            
        }
        loadData()
    }, []);

    const balance = userInfo?.clients ? userInfo?.clients.reduce((total, sellers) => total + sellers.totalBalance, 0) : 0;

    return(
        <>
        
        <Card>
            <Flex>
                <Text>Total Balance</Text>
                {balance}
            </Flex>
            <Metric></Metric>
        </Card>
        
        </>
    )
};