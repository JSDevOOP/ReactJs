import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';

import Portfolio from './Portfolio';

import Resume from './Resume';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


let active = {
    color: 'green'
}

ReactDOM.render(

    <BrowserRouter>

        <div>

            <ul>
                <li><NavLink to="/About/PARIWAT CHAONA" activeStyle={active}>ABOUT</NavLink></li>

                <li><NavLink to="/Portfolio" activeStyle={active}>PORTFOLIO</NavLink></li>

                <li><NavLink to="/Resume" activeStyle={active}>RESUME</NavLink></li>
            </ul>

            <Route path="/" component={App} />
            <Route path="/About/:name" component={About} />

            <Route path="/Portfolio" component={Portfolio} />

            <Route path="/Resume" component={Resume} />


        </div>
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();
