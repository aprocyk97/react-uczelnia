import React, { FC } from 'react';
import styled from 'styled-components';

import house from '../../media/icons/house.png'
import comments from '../../media/icons/comments.png'
import bell from '../../media/icons/bell.png'
import logo from '../../media/logo.png';

import { TopNavDropdown } from './TopNavDropdown/TopNavDropdown';
import { Search } from './Search';


const Wrapper = styled.div`
  
  display: flex;
  height: 50px;
  background-color: #fff;

  align-items: center;

  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  

`;

const RightIcons = styled.div`
  margin-left: auto;
  margin-right: 2vw;

  img{
    margin: 0 0.5vw;
  }
`;
const Logo = styled.img`
  margin-left: 1vh;
  height: 35px;
  width: 35px;
`;

export const TopNav : FC = () => {
  return(
    <Wrapper>
      <Logo alt="" src={logo} />
      <TopNavDropdown/>
      <Search/>
      <RightIcons>
        <img alt="house" src={house} />
        <img alt="comments" src={comments} />
        <img alt="bell" src={bell} />
      </RightIcons>
      
    </Wrapper>
  );
};