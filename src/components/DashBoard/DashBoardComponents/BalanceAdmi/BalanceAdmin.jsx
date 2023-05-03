import React from "react";
import { Card, Metric, Table, Text } from '@tremor/react';
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
            const {data} = await axios.put('http://localhost:3001/admin/balance/' + sub);
            setUserInfo(data);
            
        }
        loadData()
    }, []);

    return(
        <>
        {userInfo ? (
            <Table>
        {userInfo.map((item) => (
            
        <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
            <Text>totalAmount</Text>
            <Metric>${item.totalAmount}</Metric>
            <Text>transactionCount</Text>
            <Metric>{item.transactionCount}</Metric>
            <Text>averageAmount</Text>
            <Metric>{item.averageAmount.substring(0, 6)}</Metric>
        </Card>
        ))}
        </Table>
        ):(
            <p>Loading...</p>
        )}
        
        </>
    )
};