import React, { FC } from 'react'
import { Router, Switch, useHistory } from 'react-router';
import { Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components'
import { WorkspacesPageItem } from './WorkspacesPageItem/WorkspacesPageItem';

const Wrapper = styled.div`
    width: 80vw;
    height: auto;
    
    
`;

export const WorkspacesPage: FC = () => {

    const match = useRouteMatch('/workspaces');

    return (

        <Wrapper>
            
            <Switch>
                <Route path={`${match?.path}/client-contract`}>
                    <WorkspacesPageItem title='Client contract' />
                </Route>
                <Route path={`${match?.path}/supplier-contract`}>
                    <WorkspacesPageItem title='Supplier contract' />
                </Route>
                <Route path={`${match?.path}/corporate`}>
                    <WorkspacesPageItem title='Corporate' />
                </Route>
                <Route path={`${match?.path}/group-norms`}>
                    <WorkspacesPageItem title='Group norms' />
                </Route>
                <Route path={`${match?.path}/real-estate-contracts`}>
                    <WorkspacesPageItem title='Real estate contracts' />
                </Route>
            </Switch>



        </Wrapper>

    )
}
