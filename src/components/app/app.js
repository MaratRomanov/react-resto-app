import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader />
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/cart' component={CartPage}/>
                <Route path = '/:id' component ={ItemPage}/>
            </Switch>            
        </div>
    )
}

export default App;