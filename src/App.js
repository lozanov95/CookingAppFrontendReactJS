import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/app.css';
import { Navigation } from './views/navigation.js';
import { CardList } from './views/card.js';
import { Register } from './views/register.js';
import { Login } from './views/login.js';
/*
function App() {
  return (
    <div>
    <Navigation />
    <Register />
    </div>
    );
  }
  */

class App extends Component {
  render() {
    return <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  }
}

export default App;
