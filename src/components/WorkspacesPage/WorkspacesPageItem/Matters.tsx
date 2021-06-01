import React, { FC } from 'react'
import styled from 'styled-components';
import { MattersItem } from './MattersItem';

import entities from '../../../media/icons/entities.svg';
import briefcase from '../../../media/icons/briefcase.svg';
import bell from '../../../media/icons/bell.svg';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { Colors } from '../../../styledHelpers/Colors';


const MattersWrapper = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #ebebeb;

    border: 1px solid gray;
    border-radius: 5px;

    margin: 2vh 0;

    box-shadow: 0 2px 2px 0 rgba(0,0,0,.2);

`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;

    margin: 2vh 0;
    p{
        margin: 0 1vw 0 auto;
        font-size:${fontSize[18]};
        cursor: pointer;
    }
    h1{
        margin: 0 2vw;
        font-size:${fontSize[20]};
        color:${Colors.strongerTextGray};
    }
`;
const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
`;

export const Matters: FC = () => {
    return (
        <MattersWrapper>
            <TitleWrapper>
                <h1>
                    Start working on corporate matters
                </h1>
                <p>Hide</p>
            </TitleWrapper>
            <ItemsWrapper>
                <MattersItem
                    title='Explore your entities'
                    contentText='Take a few minutes to look at the most important elements and specificities of your entities.'
                    icon={entities}
                />
                <MattersItem
                    title='Structure the ownership'
                    contentText='Get a clear view of the ownership by looking at the relations between individuals and entities.'
                    icon={briefcase }
                />
                <MattersItem
                    title='Define the calendar'
                    contentText='Prepare future events by creating detailed plans around the life of your entity.'
                    icon={bell}
                />
            </ItemsWrapper>
        </MattersWrapper>
    )
}
