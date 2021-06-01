import React, { FC } from 'react'
import styled from 'styled-components';

import cog from '../../../media/icons/cog.svg';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const TopBarWrapper = styled.div`
    width: 90%;

    height: 30vh;
    margin: 0 5%;
    display: flex;
    flex-direction: column;

    border: 1px solid lightgray;
    border-radius: 15px;

    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

`;
const TopBarImage = styled.img`

    width: 100%; /* width of container */
    height: 50%; /* height of container */
    overflow: hidden;
    object-fit: cover;

    border-radius: 15px 15px 0 0;

`;

const TopBarContent = styled.div`
    height: 50%;

    display: flex;
    flex-direction: row;

    

    border-radius: 0 0 15px 15px;
`;
const ContentIcon = styled.img`
    height: 75px;
    width: 75px;

    padding: 0 3vw 0 3vw;
    margin: 3vh 0;
`;
const ContentRight = styled.div`
    display: flex;
    flex-direction: column;

    align-items: none;
`;
const ContentTitle= styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 2vh;

    h1{
        font-size: ${fontSize[22]};
        font-weight: bold;
        letter-spacing: 1px;
        color: ${Colors.textDarkBlue}
    }

    img{
        margin: 0 2vw 0 auto;
        cursor: pointer;
    }
`;
const ContentText = styled.div`
    margin: 1.5vh 4vw 5vh 1vw;

    font-size:${fontSize[18]};
    color:${Colors.subtleTextGray};
    text-align: justify;
    text-justify: inter-word;

`;


interface ITopBar {
    title: string;
    bannerImg: string;
    iconImg: string;
}

export const TopBar:FC<ITopBar> = (props) => {
    return (
        <TopBarWrapper>
            <TopBarImage src={props.bannerImg} />
            <TopBarContent>
                <ContentIcon src={props.iconImg} />
                <ContentRight>
                    <ContentTitle>
                        <h1>
                            {props.title}
                        </h1>
                        <img src={cog} />
                    </ContentTitle>
                    <ContentText>
                        <p>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.</p>
                    </ContentText>
                </ContentRight>
            </TopBarContent>
        </TopBarWrapper>
    )
}
