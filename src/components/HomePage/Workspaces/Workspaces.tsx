import React, { FC } from 'react';
import styled from 'styled-components'
import { WorkspacesItem } from './WorkspacesItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

    min-width: 80vw;
    max-width: 80vw;
    height: 50vh;
    align-items: center;
    justify-content: center;
`;
const StyledSlider = styled(Slider)`
    display: flex;
    flex-direction: row;
    height: 65%;
    width: 100%;
    
    
    

`;
const StyledWorkspaceItem = styled(WorkspacesItem)`
    margin: 1vh 0.5vw;
    
`;

export const Workspaces: FC = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'slider'
      };

    return (
        <Wrapper>
            <StyledSlider {...settings}>

                <StyledWorkspaceItem label="Client contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <StyledWorkspaceItem label="Supplier contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <StyledWorkspaceItem label="Corporate" type="Corporate" users={Math.floor(Math.random() * 101)} />
                <StyledWorkspaceItem label="Group Norms" type="Norms" users={Math.floor(Math.random() * 101)} />
                <StyledWorkspaceItem label="Real estate contracts" type="Contract" users={Math.floor(Math.random() * 101)} />
                <StyledWorkspaceItem label="Client contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <StyledWorkspaceItem label="Supplier contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <StyledWorkspaceItem label="Corporate" type="Corporate" users={Math.floor(Math.random() * 101)}  />
                <StyledWorkspaceItem label="Group Norms" type="Norms" users={Math.floor(Math.random() * 101)} />
                <StyledWorkspaceItem label="Real estate contracts" type="Contract" users={Math.floor(Math.random() * 101)} />



            </StyledSlider>
        </Wrapper>

    );
};