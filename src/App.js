import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './nav.css';
import Home from './Home';
import Google from './Nav bar/Google';
import Detai from './Nav bar/Details';
import Show from './Fast';
import List from './Review';
import Child from './Child'
import Distance from './Filter';
import Branches from './Sorting';
import Date from './function'
import Form from './Nav bar/Form'



function App() {
  return (
    
      <Router>
      <Switch>
      <Route exact path="/">
            <Home/>
          </Route>
      <Route exact path="/Google">
            <Google/>
          </Route>
          <Route exact path="/Details">
            <Detai/>
          </Route>
          <Route exact path="/Fast">
            <Show/>
          </Route>
          <Route exact path="/Review">
            <List/>
          </Route>
          <Route exact path="/Child">
            <Child/>
          </Route>
          <Route exact path="/Filter">
            <Distance/>
          </Route>
          <Route exact path="/Sorting">
            <Branches/>
          </Route>
          <Route exact path="/function">
            <Date/>
          </Route>
          <Route exact path="/Form">
            <Form/>
          </Route>
         
        </Switch>
     
    </Router>
   
   );
  }

export default App;

