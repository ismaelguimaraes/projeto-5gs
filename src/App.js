import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global'
import Header from './components/header'

function App() {
  return (
    <>
        <Header/>
        <GlobalStyle/>
        <Routes/>
    </>
  );
}

export default App;
