import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Info from './pages/Info';
import Comparacao from './pages/Comparacao'

import Header from './components/Header';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <> <Header/> <Home/> </>} />
                <Route path="/informacoes" exact render={() => <> <Header/> <Info/> </>} />
                <Route path="/comparacao" exact render={() => <> <Header/> <Comparacao/> </>} />
            </Switch>
        </BrowserRouter>
    );
}
