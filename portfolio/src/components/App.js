import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import React from 'react'
import Intro from './Intro'
import Projects from "./Projects"

const App = () => {
    return (
        <Router>
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
            </Switch>
        </Router>
    )
}

export default App