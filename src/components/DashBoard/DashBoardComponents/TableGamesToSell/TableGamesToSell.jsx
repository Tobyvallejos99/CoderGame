
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
  import style from './TableGamesToSell.module.css';

  const data = [
    {
        id:1,
        name: 'cesar',
        released: '12-06-1993',
        price: 200,
        unidadesVendidas: 2,
        ganancias: 1000,
        posiblesCompradores: 1,        
    },
    {
        id:2,
        name: 'cesar',
        released: '12-06-1993',
        price: 200,
        unidadesVendidas: 2,
        ganancias: 1000,
        posiblesCompradores: 1,        
    },
    {
        id:3,
        name: 'cesar',
        released: '12-06-1993',
        price: 200,
        unidadesVendidas: 2,
        ganancias: 1000,
        posiblesCompradores: 1,        
    }
]
 
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
                <Text>{item.released}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.price}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.unidadesVendidas}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.ganancias}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.posiblesCompradores}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );