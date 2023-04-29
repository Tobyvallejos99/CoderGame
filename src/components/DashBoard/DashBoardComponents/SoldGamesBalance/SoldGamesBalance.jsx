import {Badge, Card, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";
import React from "react";

const games = [
    {
        name: 'Super Mario',
        price: 60,
        copiesSold: 98
    },
    {
        name: 'The Legen of Zelda',
        price: 70,
        copiesSold: 58
    },
    {
        name: 'Person 5 Royal',
        price: 50,
        copiesSold: 250
    },
    {
        name: 'Red Dean Redemption',
        price: 80,
        copiesSold: 40
    },
    {
        name: 'God of War',
        price: 60,
        copiesSold: 80
    },
    {
        name: 'Resident Evil 4',
        price: 55,
        copiesSold: 280
    },
    {
        name: 'Fifa',
        price: 65,
        copiesSold: 198
    },
    
]


export default  () => {

    const totalSold = games.reduce((total, game) => total + game.copiesSold, 0);

    const salesTotal = games.reduce((total, game) =>  total + game.price * game.copiesSold, 0);

    return (
        <>
        <Card>
            <Flex justifyContent="start" className="space-x-2">
                <Title>Juegos Vendidos</Title>
                <Badge color="gray">8</Badge>
            </Flex>
            <Text className="mt-2">Overview of this</Text>

            <Table className="mt-6">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Juegos Vendidos</TableHeaderCell>
                        <TableHeaderCell>price</TableHeaderCell>
                        <TableHeaderCell>copiesSold</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {games.map((item) => (
                        <TableRow key={item.games}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.copiesSold}</TableCell>
                        </TableRow>
                    ))}
                    <div>
                        <h1>Numero de juegos vendidos: {totalSold}</h1>
                    </div>
                    <div>
                        <h1>Saldo total de juegos vendidos: ${salesTotal}</h1>
                    </div>
                </TableBody>
            </Table>
        </Card>
        </>
    )
}