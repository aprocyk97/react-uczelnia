import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Select = styled.select`
    appearance: none;
    border: none;
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
`;


const lawFirmList = [
    {label:'Linklaters', value: 'link'},
    {label:'Clifford chance', value: 'clifford'},
    {label:'SomeFirm', value: 'some'},
    {label:'Law Is Good', value: 'lawgood'},
    {label:'Bananas Lovers', value: 'bananas'},
]

interface ILawFirmSelect {
    initialValue: string;

}
export const LawFirmSelect: FC<ILawFirmSelect> = (props) => {

    const [inputValue, setInputValue] = useState<string>(props.initialValue);


    return (
        <Select value={inputValue} onChange={e=>setInputValue(e.target.value)}>
            {
                lawFirmList.map(item => {
                    return(
                        <option value={item.value}>{item.label}</option>
                    )
                })
            }
        </Select>
    )
}
