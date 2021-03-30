import React, {FC} from 'react';
import styled from 'styled-components';

import { MenuLink } from '../common/MenuLink';
import { ProfileResume } from './ProfileResume'

const Wrapper = styled.div`
  width: 20vw;
`;

export const LeftNav: FC = () => {
  return(
    <Wrapper>
      <ProfileResume/>
      
      <MenuLink/>
      <MenuLink/>
      <MenuLink/>
    </Wrapper>

  );  
};