import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Current from '../components/Current'
import moment from 'moment'

ReactDOM.render(

    <Router history={browserHistory}>
            <Route path="/" component={Current}/>
    </Router>

    , document.getElementById('weatherBox')

)
