import React , { Component}from 'react';

import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';

class Routes extends Component {
    render () {
       return (
            <div>
            <Switch>
                <Route exact path = '/' component = {Dashboard}/>
                <Route path = '/wizard' component = {Wizard}/>
            </Switch>
            </div>
    )}
}

export default Routes;