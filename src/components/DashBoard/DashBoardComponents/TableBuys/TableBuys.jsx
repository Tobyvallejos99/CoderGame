import { useAuth0 } from "@auth0/auth0-react";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
  } from "@tremor/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from './TableBuys.module.css';
import btn from '../plus.svg';

export default () => {
    const { user } = useAuth0();
    const [ userInfo, setUserInfo] = useState(null);
    const [ show, setShow] = useState(false)

    const handleClick = () => {
        show ? setShow(false) : setShow(true)
    }

    useEffect(() =>{
        const loadData = async () =>{
            const {data} = await axios(`http://localhost:3001/user/bytransaction/${user.sub}`);
            setUserInfo(data);
        }
        loadData();
    },[]);

    console.log(userInfo)
    return(
      <Card className="container rounded bg-danger">
            <Title>List of Transactions</Title>
            <button onClick={handleClick}><img src={btn} alt="f" /></button>
            {show ? <Card className={style.container}>
            
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userInfo?.Wallet.Transactions.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Text>{item.amount}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.date}</Text>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Card> 
        :
         null}
        </Card>
    )
}