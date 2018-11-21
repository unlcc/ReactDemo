import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './src/Home.jsx'
import Detail from './src/Hot/component/Detail.jsx';

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
        </div>
    </Router>
), document.getElementById('root'))