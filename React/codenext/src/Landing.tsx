import React from "react"
import './Landing.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
export class Landing extends React.Component{ 
    render() {
        return(
        <Route path="/">
    <body>
        <div className="Zoidberg">
            <img src="ZoidbergJesus.png"/>
        </div>
        <div className="words">
            <h1>
                This is Zoidberg
            </h1>
        </div>
        </body>
        
        <Link to="/Landing">Back Page</Link>
        </Route>
        )
    }
}