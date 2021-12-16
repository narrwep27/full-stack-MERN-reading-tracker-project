import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Signup from './router/Signup';
import Login from './router/Login';
import NewBook from './router/NewBook';
import Bookshelf from './router/Bookshelf';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/about'} component={About}/>
          <Route path={'/signup'} component={Signup}/>
          <Route path={'/login'} component={Login}/>
          <Route path={'/:username/newbook'} component={NewBook}/>
          <Route path={'/:username/bookshelf'} component={Bookshelf}/>
        </Switch>
    </div>
  );
}

export default App;
