import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { MainPage } from './components/MainPage/MainPage';
import { Reset } from 'styled-reset';
import store  from './tools/store';
import {Fonts, GlobalFont} from '../src/styledHelpers/Fonts'


ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <Fonts />
    <GlobalFont />
    <MainPage />
  </Provider>
  ,
  document.getElementById('root')
);

