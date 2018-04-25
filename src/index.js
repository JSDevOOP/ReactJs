import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Job from './Job';
import Portfolio from './Portfolio';
import Skill from './Skill';
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
                <li><NavLink to="/Job" activeStyle={active}>JOB</NavLink></li>
                <li><NavLink to="/Portfolio" activeStyle={active}>PORTFOLIO</NavLink></li>
                <li><NavLink to="/Skill" activeStyle={active}>SKILLS</NavLink></li>
                <li><NavLink to="/Resume" activeStyle={active}>RESUME</NavLink></li>
            </ul>

            <Route path="/" component={App} />
            <Route path="/About/:name" component={About} />
            <Route path="/Job" component={Job} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Skill" component={Skill} />
            <Route path="/Resume" component={Resume} />


        </div>
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();
