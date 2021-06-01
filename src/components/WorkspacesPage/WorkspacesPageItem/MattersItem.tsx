import React, { FC } from 'react'
import styled from 'styled-components';
import { fontSize } from '../../../styledHelpers/FontSizes';

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin: 2vh 0;

    position: relative;
    overflow: hidden;

    width: 25%;

    background-color: #fff;
    padding: 1vh 1vw;

    border-radius: 5px;

    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

    h1{
        font-size: ${fontSize[20]};
        margin: 1vh 0 3vh 0;
        font-weight: bold;
        letter-spacing: 1px;
    }
    p{
        font-size: ${fontSize[18]};
        line-height: 25px;

        margin-bottom: 3vh;
    }
`;

interface IMattersItem {
    title: string;
    contentText: string;
    icon: string;
}
const Icon = styled.img`
    height: 50px;
    width: 50px;

    margin: 1.5vh 0 0.5vh 0;
`;
const BackgroundIcon = styled.img`
    height: 90%;
    width: 45%;
    opacity: 0.1;
    position: absolute;
    right: 0;

    margin-right: 2vh;
`;

export const MattersItem: FC<IMattersItem> = (props) => {
    return (
        <ItemWrapper>
            <BackgroundIcon src={props.icon} />
            <Icon src={props.icon} />
            <h1>{props.title}</h1>
            <p>{props.contentText}</p>
        </ItemWrapper>
    )
}
