import React, {FC} from 'react';
import styled from 'styled-components';

import logo from '../../media/logo.png';
import userPlus from '../../media/icons/user-plus.png';
import network from '../../media/icons/network.png';
import publications from '../../media/icons/publications.png';
import plus from '../../media/icons/plus.png';

import {fontSize} from '../../styledHelpers/FontSizes'
import { NavLinkWithButton } from './NavLinkWithButton';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    background-color: #fff;
    width: 80%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

    margin: 0 5% 0 5%;

`;
const Logo = styled.img`
    width: 75px;
    height: 75px;

    border-radius: 50%;
    margin-top: 2vh;
`;
const Name = styled.p`
    margin-top: 1vh;
    font-size: ${fontSize[18]};
    
    color: darkblue;
`;
const Company = styled.p`
    margin-top: 0.5vh;
    color: grey;
    font-size: ${fontSize[12]};
`;
const Line = styled.div`
    border-top: 1px solid lightgray;
    width: 98%;
    margin: 1vh 0;
`;

export const ProfileResume: FC = () => {
    return(
        <Wrapper>
            <Logo alt="Avatar" src={logo} />
            <Name>Dummy Name</Name>
            <Company>Job title - Company</Company>
            <Line />
            <NavLinkWithButton frontImgSrc={network} text="Your network" buttonImgSrc={userPlus}/>
            <NavLinkWithButton frontImgSrc={publications} text="Your publications" buttonImgSrc={plus}/>
        </Wrapper>
    );
};