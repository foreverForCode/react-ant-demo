
import React from 'react';

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import App from './App';

import Login from './pages/Login'
import Admin from './admin';
import Buttons from './pages/ui/Buttons';
import Modals from './pages/ui/Modals'
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
export default class IRouter extends React.Component{

    render(){

        return(

            <Router>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route  path='/admin/home' component={Home} />
                                <Route  path='/admin/ui/buttons' component={Buttons} />
                                <Route  path='/admin/ui/modals' component={Modals} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path='/order/detail' component={Login}/>
                </App>
            </Router>
        )
    }
}