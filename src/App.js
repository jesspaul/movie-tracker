import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Watched from './pages/Watched/Watched';
import WatchList from './pages/WatchList/WatchList';
import NewMovie from './pages/NewMovie/NewMovie';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={(props) => 
          <Home />
        } />
        <Route path='/watched' render={(props) => 
          <Watched />
        } />
        <Route path='/watchlist' render={(props) => 
          <WatchList />
        } />
        <Route path='/new' render={(props) => 
          <NewMovie />
        } />
      </Switch>
    </div>
  );
}

export default App;
