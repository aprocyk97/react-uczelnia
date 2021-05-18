import React, { FC } from 'react';
import styled from 'styled-components';
import { ExpertiseForm } from './Expertise/ExpertiseForm';
import { Fees } from './Fees/Fees';
import { PanelInformations } from './PanelInformations/PanelInformations';
import { ProfileTables } from './ProfileTables/ProfileTables';
import { UserDataForm } from './UserDataForm';

const Wrapper = styled.div`
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    width: 70vw;
    margin: 2vh 5%;
    border-radius: 5px;
    border: 1px solid lightgray;

    box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);

    padding-bottom: 5vh;
`;

export const Profile: FC = () => {
    return (
        <Wrapper>
            <UserDataForm />
            <ExpertiseForm />
            <PanelInformations />
            <ProfileTables title='Proposals' link='proposals' hasFirm={true} />
            <ProfileTables title= 'Internal reviews' link='reviews' hasFirm={false} />
            <Fees />
            

        </Wrapper>
    )
}
