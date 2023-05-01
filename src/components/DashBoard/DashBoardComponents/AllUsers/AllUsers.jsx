
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
import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() =>{
      const sub = user?.sub
      const loadData = async () =>{
          const {data} = await axios.get('http://localhost:3001/admin/allusers/' + sub);
          setUserInfo(data);
      }
      loadData();
    },[]);

    const allUsers = userInfo?.sellers.concat(userInfo.clients)

    console.log(allUsers, 'hola');
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
              {allUsers?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{allUsers.indexOf(item) +1}</TableCell>
                  <TableCell>
                    <Text>{item.name || 'User'}</Text>
                  </TableCell>
                  <TableCell>
                    <SelectBox className={style.selectBox}
                    onValueChange={async(value) => {
                      let type = null;
                      value === '1' ? type = 'client' : value === '2' ? type = 'seller' : type = 'admin';
                      
                      try {
                        const response = await axios.put("http://localhost:3001/user/"+ item?.sub, {
                          rol : type
                        })
                        alert('Your change has done');
                        navigate('/');
                      } catch (error) {
                        window.alert(error.response.data);
                      }
                    }}
                    defaultValue={item.rol === 'client' ? '1' : item.rol === 'seller' ? '2' : '3'}
                    >
                      <SelectBoxItem className={style.selectItem} value="1" text="User" />
                      <SelectBoxItem className={style.selectItem} value="2" text="Seller"  />
                      <SelectBoxItem className={style.selectItem} value="3" text="Admin"  />
                    </SelectBox>
                  </TableCell>
                  <TableCell>
                    <Text>{item.totalBalance}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.totalBuy}</Text>
                  </TableCell>
                  <TableCell>
                  <SelectBox className={style.selectBox}
                    onValueChange={async(value) => {
                      let bool = null;
                      value === '1' ? bool = false : bool = true;
                      try {
                        const response = await axios.put("http://localhost:3001/user/"+ item?.sub, {
                          banned : bool
                        })
                        alert('Your change has done');
                        navigate('/');
                      } catch (error) {
                        window.alert(error.response.data);
                      }
                    }}
                    defaultValue={item.banned ? '2' : '1'}
                    >
                      <SelectBoxItem className={style.selectItem} value="2" text="True" />
                      <SelectBoxItem className={style.selectItem} value="1" text="False"  />
                    </SelectBox>
                  </TableCell>
                  <TableCell>
                    <Link to={'/profile/' + item?.sub}>Link</Link>
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
  