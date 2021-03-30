import React, { FC } from 'react';
import styled from 'styled-components';

import house from '../../../media/icons/house.png'
import arrowDown from '../../../media/icons/arrow-down.png'

import {fontSize} from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size:${fontSize[18]};
    margin: 0 10vh 0 2vh;

    width: 20vh;

    p{
        margin-left: 1vh;
    }

    img:last-child{
        margin-left: auto;
    }
`;

export const TopNavDropdown: FC  = () => {
    return(
        <Wrapper>
            <img alt ="" src={house} />
            <p>Home</p>
            <img alt ="" src={arrowDown} />
        </Wrapper>
    );
};

