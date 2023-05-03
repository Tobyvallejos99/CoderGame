import React, { useState, useEffect } from "react";
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
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default () => {
  const { user } = useAuth0();
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState({});
  const [sales, setSales] = useState({});
  const sub = user?.sub;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/empresa/ventas/${sub}`
        );
        setData(data);
        const initialSales = {};
        data.forEach((item) => {
          initialSales[item.id] = item.deleted;
        });
        setSales(initialSales);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [deleted]);

  const handlerDelet = async (id, sub) => {
    try {
      const res = await axios.put(
        `http://localhost:3001/videogames/delete/${id}`,
        { sub }
      );
      setDeleted((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    } catch (error) {
      console.error(error);
    }
  };

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
            <TableHeaderCell>Status Game</TableHeaderCell>
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
                  <Link
                    to={item.deleted}
                    onClick={() => handlerDelet(item.id, sub)}
                  >
                    {sales[item.id] ? "Start Sales" : "Stop Sales"}
                  </Link>
                </Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
