import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import React from 'react'
import Intro from './Intro'
import Projects from "./Projects"
import Hobbies from "./Hobbies"
import Contact from "./Contact"
import Coursework from "./Coursework"

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
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
                <Route exact path="/Coursework">
                    <div>
                        <Coursework />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App