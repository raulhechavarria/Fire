//dependecie
import React  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//componet
import App from './App'

import Home from './Container/Home'

import Fire from './Container/Fire'
import FireForm from './Container/Fire/Form'


const AppRouters = () =>
<App>
    <Switch>
     
            <Route path="/fire/edit/:id" component={FireForm}></Route>
            <Route path="/fire/new" component={FireForm}></Route>
            <Route path="/fire" component={Fire}></Route>
            <Route path="/" component={Home}></Route>
       
    </Switch>
</App>

export default AppRouters
