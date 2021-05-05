import React, {FC} from 'react';
import styled from 'styled-components';

import { MenuLink } from '../common/MenuLink';
import { ProfileResume } from '../common/ProfileResume'
import publicationsIcon from '../../media/icons/publications.svg'
import ecosystemIcon from '../../media/icons/ecosystem.svg'
import entitiesIcon from '../../media/icons/entities.svg'

const Wrapper = styled.div`
  display:flex;
  min-height: 80vh;
  height: 100%;
  flex-direction: column;
  
  min-width: 17vw;

  align-items: center;
`;

const LinkWrapper = styled.div`
  margin: 3vh 0;
  width: 80%;
`;

export const LeftNav: FC = () => {
  return(
    <Wrapper>
      <ProfileResume compact={false}/>
      <LinkWrapper>
        <MenuLink label="Publications" path="/publications" iconSrc={publicationsIcon}/>
        <MenuLink label="Ecosystem" path="/ecosystem" iconSrc={ecosystemIcon}/>
        <MenuLink label="Entities" path="/entities" iconSrc={entitiesIcon}/>
      </LinkWrapper>
    </Wrapper>

  );  
};