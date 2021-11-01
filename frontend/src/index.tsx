import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from './style';

ReactDOM.render(
  <>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </>,
  document.getElementById('root'),
);
