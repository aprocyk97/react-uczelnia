import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Select = styled.select`
    appearance: none;
    border: none;
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};

    margin: -0.2vh 0 0 0.2vw;
`;

const symbols = [
    {symbol: '$', id:'dollar'},
    {symbol: '€', id:'euro'},
    {symbol: '£', id:'pound'},
];

interface ICurrencySelect {
    initialValue: string;
}

export const CurrencySelect: FC<ICurrencySelect> = (props) => {

    const [curency, setCurrency] = useState<string>(props.initialValue);



    return (
        <Select value={curency} onChange={e => setCurrency(e.target.value)}>
            {
                symbols.map(item => {
                    return <option value={item.id}>{item.symbol}</option>
                })
            }

        </Select>
    )
}
