import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Input = styled.input`

    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
    width: 3vw;

    outline: none;
    border: none;

`;

interface INumberInput {
    initialValue: string;
}

export const NumberInput: FC<INumberInput> = (props) => {

    const [inputValue, setInputValue] = useState<string>(props.initialValue);

    return (
        <Input type='number' value={inputValue} onChange={e => setInputValue(e.target.value)} />
    )
}
