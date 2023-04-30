import React from "react";
import { BadgeDelta, Card, ColGrid, Flex, Metric, Text } from '@tremor/react';
const chartdata = [
    {
      name: "Balance de Juegos Comprados",
      "Balance": 34734,
      delta: '9.5%',
    },
    {
      name: "Saldo de Coins",
      "Balance":1445,
      delta: '5.1%',
    },
  ]

  const dataFormatter = (number: number)  => 
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default () => {

    return(
        <ColGrid
        numColsMd={2}
        numColsLg={3}
        marginTop="mt-6"
        gapX="gap-x-6"
        gapY="gap-y-6"
        >
            {chartdata.map((item) => (
                <Card className="max-w-sm">
                    <Flex justifyContent="between" alignItems="center">
                        <Text>{item.name}</Text>
                        <BadgeDelta
                            deltaType="moderaIncrease"
                            isIncreasePositive={true}
                            text={item.delta}
                            size="xs"
                        >
                            {item.delta}
                        </BadgeDelta>
                    </Flex>
                    <Metric valueFormatter={dataFormatter}>${item.Balance}</Metric>
                </Card>
            ))}
        </ColGrid>
    )
};