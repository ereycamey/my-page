import React, { useState } from "react";
import NavBar from "./components/NavBar"
import {
  BrowserRouter as Router, Switch,
  Route, Redirect,
} from "react-router-dom";
import VotingList from "./components/VotingList";
import Users from "./components/Users";
import LoginForm from './components/loginform';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";


function App() {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Switch>
        <Route path="/NavBar">
        {loggedIn ? <NavBar /> : <Redirect to="/" />}
        </Route> 
        <Route path="/VotingList">
        {loggedIn ? <VotingList /> : <Redirect to="/" />}
        </Route> 
        <Route path="/Users">
        {loggedIn ? <Users /> : <Redirect to="/" />}
        </Route> 
        <Route path="/LoginForm">
        {loggedIn ? <LoginForm /> : <Redirect to="/" />}
        </Route> 
        <Route path="/">
        {loggedIn ? (
         <Redirect to="/NavBar" />
        ) : (
            <LoginForm parentCallback={callbackFunction} />
          )}
          </Route>
        <Route exact path="/editablerow" component={EditableRow} />
        <Route exact path="/readonlyrow" component={ReadOnlyRow} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
