import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from "@tremor/react";
import { useState } from "react";
import style from './AllGamesComments.module.css';
import plus from '../plus.svg';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";
import { TableHeader } from "semantic-ui-react";
import trash from '../iconmonstr-trash-can-29.svg';
import { Link, useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    const {user} = useAuth0();
    const [show, setShow] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const showBtn = () => {
        show ? setShow(false) : setShow(true);
      }

      useEffect(() =>{
        const sub = user?.sub
        const loadData = async () =>{
            const {data} = await axios.get('http://localhost:3001/admin/allvideogames/' + sub);
            setUserInfo(data);
        }
        loadData();
      },[]);
      console.log(userInfo)
      
    return(
        <Card className={style.container}>
            <button onClick={showBtn}><img src={plus} alt="" /></button>
            {show && (
                <Table>
                    <TableHead>
                        <TableHeader>
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Image</TableHeaderCell>
                            <TableHeaderCell>Price</TableHeaderCell>
                            <TableHeaderCell>Rating</TableHeaderCell>
                            <TableHeaderCell>Released</TableHeaderCell>
                            <TableHeaderCell>Download</TableHeaderCell>
                            <TableHeaderCell>Description</TableHeaderCell>
                            <TableHeaderCell>Seller</TableHeaderCell>
                            <TableHeaderCell><img src={trash} alt="" /></TableHeaderCell>
                        </TableHeader>
                    </TableHead>
                    <TableBody>
                    {userInfo?.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>
                          <Text>{item.name || 'User'}</Text>
                        </TableCell>
                        <TableCell>
                          <Text><img className={style.gameImg} src={item.image} alt="" /></Text>
                        </TableCell>
                        <TableCell>
                          <Text>{item.price}</Text>
                        </TableCell>
                        <TableCell>
                          <Text>{item.rating || 0}</Text>
                        </TableCell>
                        <TableCell>
                          <Text>{item.released}</Text>
                        </TableCell>
                        <TableCell>
                          <Link to={item.gameLink}>Download</Link>
                        </TableCell>
                        <TableCell>
                            {item.UserSub ? <Link to={'/profile/' + item?.UserSub}>Link</Link> : <button>Unavailable</button>}                            
                        </TableCell>
                        <TableCell>
                          <button onClick={
                            async () => {
                                const sub = user?.sub;
                              try {
                                const response = await axios.put("http://localhost:3001/videogames/"+ item?.id,  {sub} )
                                alert('Game has been deleted');
                              } catch (error) {
                                window.alert(error.response.data);
                              }
                            }
                          }>  
                            {item.deleted ? <img src={plus} alt="F" /> : <img src={trash} alt="F" />}
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                    </TableBody>
                </Table>
            )}
        </Card>
    )
}