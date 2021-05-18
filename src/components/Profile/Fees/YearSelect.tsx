import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const StyledSelect = styled.select`
    appearance: none;
    border: none;
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
    

`;

interface IYearSelect {
    year: string;
}

export const YearSelect: FC<IYearSelect> = (props) => {

    const [yearList, setYearList] = useState<number[]>([]);
    const [year, setYear] = useState<string>(props.year);
    useEffect(() => {
        const arr: number[] = [];
        const date = new Date();
        for (let i = 1997; i <= date.getFullYear(); i++) {
            arr.push(i);
        }
        setYearList(arr);
    }, [])

    return (
        <>
        {
            props.year === '' ?
                <></>
                :
                <StyledSelect value={year} onChange={e => setYear(e.target.value)}>
                    {
                        yearList.map(item => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                </StyledSelect>
        }
        </>

    )
}
