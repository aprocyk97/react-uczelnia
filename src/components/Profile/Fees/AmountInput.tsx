import React, { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Input = styled.input`

    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
    

    outline: none;
    border: none;
    max-width: 10vw;
`;
const AmountField = styled.div`
    
    p{
        width: auto;
    }
`;

interface IAmountInput {
    initialValue: number;
}

export const AmountInput: FC<IAmountInput> = (props) => {

    const [isEditable, setIsEditable] = useState<boolean>(false);

    const [inputValue, setInputValue] = useState<string>(props.initialValue.toLocaleString());

    const [numberValue, setNumberValue] = useState<number>(props.initialValue);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setInputValue(numberValue.toLocaleString());

    }, [numberValue])

    return (
        <AmountField onClick={() => {
            if(isEditable === false){
                setIsEditable(true)
                inputRef.current && inputRef.current.focus();
            }
        }}>
            {
                isEditable ?
                <Input ref={inputRef} onBlur={() => setIsEditable(false)} type='number' value={numberValue} onChange={e => setNumberValue(Number(e.target.value))} />
                :
                <p>{inputValue}</p>
            }
        

        </AmountField>
    )
}
