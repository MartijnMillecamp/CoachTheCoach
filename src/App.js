import './App.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";


import Questionnaire from "./Screens/questionnaire"
import Profile from "./Screens/profile"
import Error from "./Screens/error"


export default function App() {
	return (
    <Router>
      <Switch>
	      <Route path="/Error" component={Error}/>
	      <Route path="/Profile" component={Profile}/>
	      <Route path="/" component={Questionnaire}/>

      </Switch>
    </Router>
	);
}
