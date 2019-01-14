
import React from 'react'

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Home from './Home';

const Main = (props) => {
    return(
        <div>
            this is main
            <Link to='/home/a/456'>子路由</Link>

            <hr/>

            {props.children}
        </div>
    )
};

const About = (prop)  => {
   return(
       <div>
           this is about
           <hr/>
           {prop.match.params.id}
       </div>
   )
}

const Topic = () => {

    return(
        <div>
            this is topic
        </div>
    )
}

const NotMatch = () => {

    return (

        <div>

            404
        </div>
    )
}
export default class IRouter extends React.Component{



    render(){

        return(

            <Router>
                <Home>
                    <Switch>
                    <Route  path='/home' render={() =>
                        <Main>
                            <Route  path='/home/a/:id' component={About}></Route>
                        </Main>
                    }></Route>
                    <Route  path='/about' component={About}></Route>
                    <Route  path='/topic' component={Topic}></Route>
                    <Route component={NotMatch}></Route>
                    </Switch>

                </Home>

            </Router>
        )
    }
}