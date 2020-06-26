import React from 'react';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import './assets/scss/index.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ErrorPage />
    </BrowserRouter>
  );
}

export default App;
