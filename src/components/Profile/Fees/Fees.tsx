import React, { FC } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { AmountInput } from './AmountInput';
import { CurrencySelect } from './CurrencySelect';
import { LawFirmSelect } from './LawFirmSelect';
import { NumberInput } from './NumberInput';
import { YearSelect } from './YearSelect';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
    margin: 2vh 2vw;
    font-weight: bold;
    letter-spacing: 1px;
`;

const Table = styled.table`
    width: 90%;
    margin: 0 5%;
`;
const TableHead = styled.thead`
    margin: 1vh 0;
    th{
        padding: 0 0 0.5vh 2vw;

        font-size:${fontSize[18]};
        color: ${Colors.textDarkBlue};
        font-weight: bold;
        letter-spacing: 1px;
        text-align: left;

        width: 22.5%;
    }
`;
const TableBody = styled.tbody`
    td{
        padding: 0 0 0.5vh 2vw;
        width: 22.5%;
    }
`;
const CostCenter = styled.div`
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};

    display: flex;
    flex-direction: row;
    p{
        margin-top: 0.2vh;
    }


`;
const TotalAmount = styled.div`
    display: flex;
    flex-direction: row;
`;


const amountValues = [
    { year: '2019', costCenter: '153', amount: 3500, currency: 'euro', lawFirm: 'clifford' },
    { year: '2018', costCenter: '153', amount: 9500, currency: 'euro', lawFirm: 'link' },
    { year: '2017', costCenter: '47', amount: 10500, currency: 'euro', lawFirm: 'link' },
    { year: '', costCenter: '153', amount: 18500, currency: 'euro', lawFirm: 'link' },
    { year: '', costCenter: '32', amount: 15500, currency: 'euro', lawFirm: 'link' },
]

export const Fees: FC = () => {
    return (
        <Wrapper>
            <Title>
                Amount of fees
            </Title>
            <Table>

                <TableHead>
                    <tr>
                        <th>
                            Year
                        </th>
                        <th>
                            Cost center
                        </th>
                        <th>
                            Total amount
                        </th>
                        <th>
                            Law firm
                        </th>
                    </tr>


                </TableHead>

                <TableBody>
                    {
                        amountValues.map(item => {
                            return (
                                <tr>
                                    <td>
                                        <YearSelect year={item.year} />
                                    </td>
                                    <td>
                                        <CostCenter>
                                            <p>CS</p>
                                            <NumberInput initialValue={item.costCenter} />
                                        </CostCenter>
                                    </td>
                                    <td>
                                        <TotalAmount>
                                            <AmountInput initialValue={item.amount} />
                                            <CurrencySelect initialValue={item.currency} />
                                        </TotalAmount>
                                    </td>
                                    <td>
                                        <LawFirmSelect initialValue={item.lawFirm} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </TableBody>

            </Table>
        </Wrapper>
    )
}
