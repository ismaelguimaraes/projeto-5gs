import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import FooterPage from './components/Footer';

function App() {
  return (
    <>
        <GlobalStyle/>
        <Routes/>
        <FooterPage/>
    </>
  );
}

export default App;
