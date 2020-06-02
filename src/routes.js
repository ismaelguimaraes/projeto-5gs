import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Info from './pages/Info';
import Comparacao from './pages/Comparacao'
import Loading from './components/Loading'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/informacoes" exact component={Info} />
                <Route path="/comparacao" exact component={Comparacao} />
                <Route path="/loading" exact component={Loading} />
            </Switch>
        </BrowserRouter>
    );
}
