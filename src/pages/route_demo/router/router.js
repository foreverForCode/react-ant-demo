
import React from 'react'

import {HashRouter as Router, Route, Link} from "react-router-dom";

import Home from './Home';

const Main = (props) => {
    return(
        <div>
            this is main
            <Link to='/home/a'>子路由</Link>

            <hr/>

            {props.children}
        </div>
    )
};

const About = ()  => {
   return(
       <div>
           this is about
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

export default class IRouter extends React.Component{



    render(){

        return(

            <Router>
                <Home>
                    <Route  path='/home' render={() =>
                        <Main>
                            <Route  path='/home/a' component={About}></Route>
                        </Main>
                    }></Route>
                    <Route  path='/about' component={About}></Route>
                    <Route  path='/topic' component={Topic}></Route>
                </Home>

            </Router>
        )
    }
}