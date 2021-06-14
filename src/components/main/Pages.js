import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Banner from './screen/Banner'
import About from './screen/About'

function Pages() {
    return (
        <Switch>
            <Route path='/' exact component={Banner} />
            <Route path='/about' exact component={About} />
        </Switch>
    )
}

export default Pages
