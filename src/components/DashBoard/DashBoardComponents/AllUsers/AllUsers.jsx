import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react"
import style from './AllUsers.module.css';
const users = [
    {
        id: 1,
        name: 'pepe',
        rol: 'user',
        sells: 0,
        buy: 300,
        dashBoard: 'linktoDashboard'
    }
]

export default () => {
    <Card className={style.container}>
      <Title>List of Games</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Rol</TableHeaderCell>
            <TableHeaderCell>Sells</TableHeaderCell>
            <TableHeaderCell>Buys</TableHeaderCell>
            <TableHeaderCell>Dashboard</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Text>{item.name}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.rol}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.sells}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.buy}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.dashBoard}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
}