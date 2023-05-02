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

// const data = [
//   {
//     id: 1,
//     name: "cesar",
//     released: "12-06-1993",
//     price: 200,
//     unidadesVendidas: 2,
//     ganancias: 1000,
//     posiblesCompradores: 1,
//     delete: "X",
//   },
//   {
//     id: 2,
//     name: "cesar",
//     released: "12-06-1993",
//     price: 200,
//     unidadesVendidas: 2,
//     ganancias: 1000,
//     posiblesCompradores: 1,
//     delete: "X",
//   },
//   {
//     id: 3,
//     name: "cesar",
//     released: "12-06-1993",
//     price: 200,
//     unidadesVendidas: 2,
//     ganancias: 1000,
//     posiblesCompradores: 1,
//     delete: "X",
//   },
// ];
const data2 = [
  {
    name: "Aaromi 2",
    released: "2023-04-30",
    rating: null,
    description: "asdadadasdas",
    image:
      "https://res.cloudinary.com/dng2w6k2p/image/upload/v1682962107/imageGame/m7u6sa2ixu2eimlto0eo.png",
    price: 22,
    Transactions: [
      {
        id: 9,
        date: "2023-05-02T15:05:15.564Z",
        amount: 22,
        user: {
          name: "richar rodriguez",
        },
      },
      {
        id: 16,
        date: "2023-05-02T15:14:03.951Z",
        amount: 22,
        user: {
          name: "RODERICK RODRIGUEZ",
        },
      },
    ],
    ventasRealizadas: 2,
    ganancias: 44,
  },
  {
    name: "Aaromi 3",
    released: "2023-04-30",
    rating: null,
    description: "asdadadasdass",
    image:
      "https://res.cloudinary.com/dng2w6k2p/image/upload/v1682962800/imageGame/ufcrwvcxjeh5qs9sadui.jpg",
    price: 21,
    Transactions: [
      {
        id: 10,
        date: "2023-05-02T15:05:15.597Z",
        amount: 21,
        user: {
          name: "richar rodriguez",
        },
      },
      {
        id: 15,
        date: "2023-05-02T15:14:03.948Z",
        amount: 21,
        user: {
          name: "RODERICK RODRIGUEZ",
        },
      },
    ],
    ventasRealizadas: 2,
    ganancias: 42,
  },
  {
    name: "dinorex",
    released: "2023-04-30",
    rating: null,
    description: "admin",
    image:
      "https://res.cloudinary.com/dng2w6k2p/image/upload/v1682984637/imageGame/rmbqza2lyeyll4o16g7m.jpg",
    price: 50,
    Transactions: [
      {
        id: 12,
        date: "2023-05-02T15:05:15.608Z",
        amount: 50,
        user: {
          name: "richar rodriguez",
        },
      },
      {
        id: 13,
        date: "2023-05-02T15:14:03.938Z",
        amount: 50,
        user: {
          name: "RODERICK RODRIGUEZ",
        },
      },
    ],
    ventasRealizadas: 2,
    ganancias: 100,
  },
  {
    name: "aaron3",
    released: "2023-04-30",
    rating: null,
    description: "asdadadasdas",
    image:
      "https://res.cloudinary.com/dng2w6k2p/image/upload/v1682961965/imageGame/co7e71y9ke2wqw0ogs4f.jpg",
    price: 23,
    Transactions: [
      {
        id: 14,
        date: "2023-05-02T15:14:03.945Z",
        amount: 23,
        user: {
          name: "RODERICK RODRIGUEZ",
        },
      },
    ],
    ventasRealizadas: 1,
    ganancias: 23,
  },
  {
    name: "aaron1",
    released: "2023-04-30",
    rating: null,
    description: "asdadadasdas",
    image:
      "https://res.cloudinary.com/dng2w6k2p/image/upload/v1682961294/imageGame/d4ntr2dnp12dddjnh7fy.png",
    price: 2,
    Transactions: [
      {
        id: 18,
        date: "2023-05-02T15:14:03.961Z",
        amount: 2,
        user: {
          name: "RODERICK RODRIGUEZ",
        },
      },
    ],
    ventasRealizadas: 1,
    ganancias: 2,
  },
  {
    name: "aaron 5",
    released: "2023-04-30",
    rating: null,
    description: "asdadadasdas",
    image:
      "https://res.cloudinary.com/dng2w6k2p/image/upload/v1682963114/imageGame/fykegohwen3rntfixsff.png",
    price: 23,
    Transactions: [],
    ventasRealizadas: 0,
    ganancias: 0,
  },
  {
    name: "aaron 4",
    released: "2023-04-30",
    rating: null,
    description: "admin",
    image:
      "https://res.cloudinary.com/dng2w6k2p/image/upload/v1682963049/imageGame/i99hlnqnirihylfq2v6i.webp",
    price: 23,
    Transactions: [],
    ventasRealizadas: 0,
    ganancias: 0,
  },
];

export default () => (
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
        {data2.map((item) => (
          <TableRow key={item.id}>
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
