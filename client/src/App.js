import './App.css';
import Nav from './components/Nav';
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
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/about'} component={About}/>
          <Route path={'/signup'} component={Signup}/>
          <Route path={'/login'} component={Login}/>
          <Route path={'/:username/newbook'} component={NewBook}/>
          <Route path={'/:username/bookshelf'} component={Bookshelf}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
