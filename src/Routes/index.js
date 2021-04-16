//Importar as dependências
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAutenticated } from './auth'
//Importar as páginas
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={props => (
        isAutenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
)
//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" exact component={SignUp}/>
                <Route path="/signIn" component={SignIn} />
                <PrivateRoute path="/dashboard" component={Dashboard} isPrivate/>
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;