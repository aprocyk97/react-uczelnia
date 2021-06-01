import React, { FC } from 'react'
import styled from 'styled-components';
import { TopBar } from './TopBar';

import office from '../../../media/office.jpg';
import entities from '../../../media/icons/entities2.svg';
import { ResumeWork } from '../../HomePage/ResumeWork/ResumeWork';
import { Matters } from './Matters';
import { UpdatesBar } from './UpdatesBar';

const Wrapper = styled.div`
    width: 80vw;
    height: auto;

    
`;

const LatestUpdates = styled(ResumeWork)`
    margin: 5vh 1.5vw;
    width: 75vw;
`;




interface IWorkspacesItem {
    title: string;
}

export const WorkspacesPageItem: FC<IWorkspacesItem> = (props) => {
    return (
        <Wrapper>
            <TopBar title={props.title} bannerImg={office} iconImg={entities} />
            <Matters />
            

            <LatestUpdates bar={<UpdatesBar />} title='Latest Updates' />
            
        </Wrapper>

    )
}
