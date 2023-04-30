
import style from './AllUsers.module.css';

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
    SelectBox,
    SelectBoxItem,
  } from "@tremor/react";
import { Link } from 'react-router-dom';
import trash from './iconmonstr-trash-can-29.svg'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
  
  const data = [
    {
        id: 1,
      name: "Viola Amherd",
      rol: "user",
      buys: 23,
      sells: 0,
      banned: 'false',
      DashBoard: 'link'      
    },
    {
        id: 2,
      name: "Viola Amherd",
      rol: "user",
      buys: 23,
      sells: 0,
      banned: 'false',
      DashBoard: 'link'      
    },
    {
        id: 3,
      name: "Viola Amherd",
      rol: "user",
      buys: 23,
      sells: 0,
      banned: 'false',
      DashBoard: 'link'      
    }
  ];
  
  export default () => {
    const {user} = useAuth0();
    const [userInfo, setUserInfo] = useState(null);
    

    useEffect(() =>{
      const sub = user.sub
      console.log(sub)
      const loadData = async () =>{
          const {data} = await axios.get('http://localhost:3001/admin/allusers', {sub: sub});
          setUserInfo(data);
      }
      loadData();
    },[]);

    console.log(userInfo, 'hola');
    return(
      <Card className={style.container}>
        <Title>All Users</Title>
        <Table >
          <TableHead>
            <TableRow>
              <TableHeaderCell >ID</TableHeaderCell>
              <TableHeaderCell >Name</TableHeaderCell>
              <TableHeaderCell >Rol</TableHeaderCell>
              <TableHeaderCell >Buys</TableHeaderCell>
              <TableHeaderCell >Sells</TableHeaderCell>
              <TableHeaderCell >Banned</TableHeaderCell>
              <TableHeaderCell >Profile</TableHeaderCell>
              <TableHeaderCell ><img src={trash} alt="F" /></TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  <Text>{item.name}</Text>
                </TableCell>
                <TableCell>
                  <SelectBox className={style.selectBox}
                  onValueChange={(value) => item.rol = value.toLocaleLowerCase()}
                  defaultValue="1"
                  >
                    <SelectBoxItem className={style.selectItem} value="1" text="User" />
                    <SelectBoxItem className={style.selectItem} value="2" text="Seller"  />
                    <SelectBoxItem className={style.selectItem} value="3" text="Admin"  />
                  </SelectBox>
                </TableCell>
                <TableCell>
                  <Text>{item.buys}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.sells}</Text>
                </TableCell>
                <TableCell>
                <SelectBox className={style.selectBox}
                  onValueChange={(value) => item.banned = value.toLocaleLowerCase()}
                  defaultValue="1"
                  >
                    <SelectBoxItem className={style.selectItem} value="2" text="True" />
                    <SelectBoxItem className={style.selectItem} value="1" text="False"  />
                  </SelectBox>
                </TableCell>
                <TableCell>
                  <Link to={'/user'+item.id}>Link</Link>
                </TableCell>
                <TableCell>
                  <button><img src={trash} alt="F" /></button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
  )};
  