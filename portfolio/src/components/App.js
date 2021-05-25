import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import {withRouter} from 'react-router-dom'

import React from 'react'
import Intro from './Intro'
import Projects from "./Projects"
import Hobbies from "./Hobbies"
import Contact from "./Contact"

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL} history={withRouter}>
            <Switch>
                <Route exact path="/">
                    <div>
                        <Intro />
                    </div>
                </Route>
                <Route exact path="/Projects">
                    <div>
                        <Projects />
                    </div>
                </Route>
                <Route exact path="/Hobbies">
                    <div>
                        <Hobbies />
                    </div>
                </Route>
                <Route exact path="/Contact">
                    <div>
                        <Contact />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App