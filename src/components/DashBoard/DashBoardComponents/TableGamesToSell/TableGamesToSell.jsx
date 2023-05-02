import React from "react";
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
import style from "./TableGamesToSell.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default () => {
  const { user } = useAuth0();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sub = user?.sub;
        const { data } = await axios.get(
          `http://localhost:3001/empresa/ventas/${sub}`
        );
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user?.sub]);

  console.log("DATA:", data);

  return (
    <div className={style.container}>
      <Title>List of Games</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Released</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Selled Units</TableHeaderCell>
            <TableHeaderCell>Earns</TableHeaderCell>
            <TableHeaderCell>In the CART of</TableHeaderCell>
            <TableHeaderCell>Delete Game</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Text>{item.name}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.released}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.price}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.ventasRealizadas}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.ganancias}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.posiblesCompradores}</Text>
              </TableCell>
              <TableCell>
                <Text>
                  <Link to={item.delete}> Delete</Link>
                </Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
