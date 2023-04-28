import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react"

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
    <Card>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>ID</TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Rol</TableHeaderCell>
                    <TableHeaderCell>Sells</TableHeaderCell>
                    <TableHeaderCell>Buy</TableHeaderCell>
                    <TableHeaderCell>Profile</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => {
                    <TableRow>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.rol}</TableCell>
                        <TableCell>{user.sells}</TableCell>
                        <TableCell>{user.buy}</TableCell>
                        <TableCell>{user.dashBoard}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </Card>
}