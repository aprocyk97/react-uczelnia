import React, { FC } from 'react'
import styled from 'styled-components';
import { fontSize } from '../../../styledHelpers/FontSizes';

const BarWrapper = styled.div`

    display: flex;
    flex-direction: row;

    margin: 2vh 0;

    width: 100%;

    

`;
interface IBarButton {
    bgColor: string;
}
const BarButton = styled.div<IBarButton>`
    background-color: ${props => props.bgColor};

    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.4);

    padding: 0.8vh 1vw;
    font-size: ${fontSize[18]};

    margin-right: 1vw;

    cursor: pointer;
    
`;


export const UpdatesBar:FC = () => {
    return (
        <BarWrapper>
            <BarButton bgColor='plum'>
                All
            </BarButton>
            <BarButton bgColor='lightgreen'>
                SAS
            </BarButton>
            <BarButton bgColor='powderblue'>
                SARL
            </BarButton>
            <BarButton bgColor='#ffc875'>
                Secondary business
            </BarButton>
            <BarButton bgColor='#a6a6a6'>
                Communities
            </BarButton>
            <BarButton bgColor='lightgray'>
                POA
            </BarButton>
            <BarButton bgColor='#fff'>
                Survey
            </BarButton>
            <BarButton bgColor='#fff'>
                ...
            </BarButton>
            
        </BarWrapper>
    )
}
