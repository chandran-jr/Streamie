import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Videos from './Videos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="app">

        <Router>
          <Switch>

          <Route path="/search">
              <Header/>
            </Route>

            <Route path="/">
            <Header/>
            <div className="app__Container">
              <Sidebar/>
              <Videos/>
            </div>
            </Route>
            
          </Switch>
        </Router>

    </div>
  );
}

export default App;
