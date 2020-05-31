import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import FooterPage from './components/Footer';

function App() {
  return (
    <>
        <Header/>
        <GlobalStyle/>
        <Routes/>
        <FooterPage/>
    </>
  );
}

export default App;
