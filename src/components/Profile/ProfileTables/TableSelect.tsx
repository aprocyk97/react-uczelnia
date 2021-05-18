import React, { FC } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Select = styled.select`

    font-size: ${fontSize[16]};
    color: ${Colors.textDarkBlue};
    border: none;
    outline: none;
    appearance: none;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    

`;

export const TableSelect: FC = () => {
    return (
        <Select>
            <option value='test1'>Testowe pole takie</option>
            <option value='test2'>Testowe pole siakie</option>
            <option value='test3'>Testowe pole owakie</option>
        </Select>
        
    )
}
