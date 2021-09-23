import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Videos from './Videos';

function App() {
  return (
    <div className="app">

          <Header/>

          <div className="app__Container">
          <Sidebar/>
          <Videos/>
          </div>


    </div>
  );
}

export default App;
