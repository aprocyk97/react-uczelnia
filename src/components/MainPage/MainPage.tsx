import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/usersActions'
import { getPosts } from '../../actions/postsActions';
import { getPhotos } from '../../actions/photosActions';

import { LeftNav } from '../LeftNav/LeftNav';
import { TopNav } from '../TopNav/TopNav';
import { HomePage } from '../HomePage/HomePage';
import { Colors } from '../../styledHelpers/Colors'
import { EntitiesPage } from '../EntitiesPage/EntitiesPage';
import { EcosystemPage } from '../EcosystemPage/EcosystemPage';
import { PublicationsPage } from '../PublicationsPage/PublicationsPage';

const Wrapper = styled.div`
  background-color: ${Colors.mainBackgroundColor};
  min-height: 80vh;

`;
const Content = styled.div`
  min-height: 80vh;
  height: 100%;
  width: 100%;
  min-width: 99vw;
  
  display: flex;
  flex-direction: row;
  
  margin-top: 1vh;

`;

type GetUsers = ReturnType<typeof getUsers>
type GetPosts = ReturnType<typeof getPosts>
type GetPhotos = ReturnType<typeof getPhotos>

export const MainPage: FC = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {

    const fetchData = async () => {
      await dispatch<GetPhotos>(getPhotos());
      await dispatch<GetPosts>(getPosts());
      await dispatch<GetUsers>(getUsers());
    }

    fetchData()
      .then(() => {
        setLoading(false);
      })



  }, [])

  return (
    <>
      {
        (loading) ?
          <Wrapper>Loading...</Wrapper> :
          <Wrapper>
            <Router>
              <TopNav />

              <Content>
                <LeftNav />

                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/publications" component={PublicationsPage} />
                  <Route path="/ecosystem" component={EcosystemPage} />
                  <Route path="/entities" component={EntitiesPage} />
                </Switch>

              </Content>
            </Router>
          </Wrapper>
      }
    </>
  );
};

