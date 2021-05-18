import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { TableSelect } from './TableSelect';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid gray;
`;

const Table = styled.table`
    width: 99%;
    margin: 0 0.5%;
    

`;
const TableHead = styled.thead`

    


    tr{
        border-bottom: 1px solid gray;
        
        
        
    }
    th{
        padding: 0 0 1.5vh 2vw;

        font-size:${fontSize[18]};
        color: ${Colors.textDarkBlue};
        font-weight: bold;
        letter-spacing: 1px;
        text-align: left;

        width: 16%;
            
    }
    

`;

const TableBody = styled.tbody`
    td{
        padding: 1vh 0 1vh 2vw;

        width: 16%;
        

        &:nth-child(1){
            padding-left: 1.5vw;
        }
    }

`;

const Title = styled.h1`
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
    margin: 3vh 2vw;
    font-weight: bold;
    letter-spacing: 1px;
`;
const Bottom = styled.div`
    display: flex;

`;
const Proposal = styled.h1`
    font-size:${fontSize[18]};
    color: ${Colors.linkBlue};
    margin: 3vh 2vw;
    font-weight: bold;
    letter-spacing: 1px;

    cursor: pointer;

    &:nth-child(1){
        margin-left: auto;
    }
`;
const Reviews = styled.h1`
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
    margin: 3vh 1vw;
    font-weight: bold;
    letter-spacing: 1px;

    cursor: pointer;
`;


const tableHeadArr = [
    { value: 'name', label: 'Name' },
    { value: 'ent', label: 'Entity' },
    { value: 'loc', label: 'Location' },
    { value: 'exp', label: 'Expertise' },
    { value: 'date', label: 'Date' },
    { value: 'firm', label: 'Firm' },
]
const link = [
    { value: 'proposals', label: 'See more proposals' },
    { value: 'reviews', label: 'See more reviews' },
]

interface IProfileTables {
    title: string;
    link: string;
    hasFirm: boolean;
}

export const ProfileTables: FC<IProfileTables> = (props) => {

    const [headList, setHeadList] = useState<{ value: string, label: string }[]>([]);

    useEffect(() => {
        if (props.hasFirm === false) {
            const arr = tableHeadArr.filter(item => item.value !== 'firm');
            setHeadList(arr);
        } else {
            setHeadList(tableHeadArr);
        }

    }, [])

    return (
        <Wrapper>
            <Title>
                {props.title}
            </Title>
            <Table>
                <TableHead>
                    <tr>
                        {
                            headList.map(item => {
                                return (

                                    <th>
                                        {item.label}
                                    </th>

                                )
                            })

                        }
                        {
                            props.hasFirm !== true ?
                                <th>

                                </th>
                                :
                                null
                        }
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        {
                            headList.map(item => {
                                return (
                                    <td>
                                        <TableSelect />
                                    </td>
                                )
                            })
                        }
                        {
                            props.hasFirm !== true ?
                                <td>

                                </td>
                                :
                                null
                        }
                    </tr>

                    <tr>
                        {
                            headList.map(item => {
                                return (
                                    <td>
                                        <TableSelect />
                                    </td>
                                )
                            })
                        }
                        {
                            props.hasFirm !== true ?
                                <td>

                                </td>
                                :
                                null
                        }
                    </tr>

                    <tr>
                        {
                            headList.map(item => {
                                return (
                                    <td>
                                        <TableSelect />
                                    </td>
                                )
                            })
                        }
                        {
                            props.hasFirm !== true ?
                                <td>

                                </td>
                                :
                                null
                        }
                    </tr>

                </TableBody>
            </Table>
            <Bottom>
                {
                    props.link === 'proposals' ?
                        <Proposal>
                            See more proposals
                    </Proposal>
                        :
                        <Reviews>
                            See more Reviews
                    </Reviews>
                }


            </Bottom>

        </Wrapper>
    )
}
