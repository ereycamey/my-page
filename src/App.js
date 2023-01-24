import React from 'react';
import NavBar from "./components/NavBar"
import {
  BrowserRouter as Router, Switch,
  Route, Redirect,
} from "react-router-dom";
import VotingList from "./components/VotingList";
import Users from "./components/Users";
import LoginForm from './components/loginform';
import Voters from './components/Voters';
import Voted from './components/Voted'; 
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/navbar" component={NavBar} />
        <Route path="/votinglist" component={VotingList} />
        <Route path="/users" component={Users} />
        <Route exact path="/voters" component={Voters} />
        <Route exact path="/voted" component={Voted} />
        <Route exact path="/editablerow" component={EditableRow} />
        <Route exact path="/readonlyrow" component={ReadOnlyRow} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
