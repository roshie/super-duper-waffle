import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';

import CreateNote from './pages/createNote';
import GetNotes from './pages/getNotes';

export default function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/createNote" component={CreateNote}/>
        <Route exact path="/getNotes" component={GetNotes} />
        <Redirect to="/getNotes" />
      </Switch>
    </Router>
  )
}