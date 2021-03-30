import React, { FC } from 'react';
import styled from 'styled-components';

import { LeftNav } from '../LeftNav/LeftNav';
import { TopNav } from '../TopNav/TopNav';
import { HomePage } from '../HomePage/HomePage';
import { Colors } from '../../styledHelpers/Colors'

const Wrapper = styled.div`
  background-color: ${Colors.lightgray};
  height: 100vh;

`;
const Content = styled.div`
  max-width: 1200px;
  align-items: center;
  display: flex;
  flex-direction: row;
  
  margin-top: 1vh;

`;

export const MainPage: FC  = () => {
  return(
    <Wrapper>
      <TopNav/>
      <Content>
        <LeftNav/> 
        <HomePage/>
      </Content>
    </Wrapper>
  );
};

