import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Videos from './Videos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';
import NoResult from './NoResult';


function App() {
  return (
    <div className="app">

        <Router>

          <Header/>

          <Switch>

          <Route path="/search/devbees">
             <div className="app__Container">
                <Sidebar/>
                <SearchPage/>
                </div>
              </Route>

          <Route path="/search/:searchTerm">
             <div className="app__Container">
                <Sidebar/>
                <NoResult/>
                </div>
              </Route>

              <Route path="/">
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
