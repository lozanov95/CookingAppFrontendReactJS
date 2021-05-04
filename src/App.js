import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/app.css';
import { Navigation } from './views/navigation.js';
import { RecipesView } from './views/recipes.js';
import { Register } from './views/register.js';
import { Login } from './views/login.js';
import { CreateRecipe } from './views/create.js';
import { Details } from './views/details.js';
import { Edit } from './views/edit.js';
import { About } from './views/about.js';
import { MyRecipesView } from './views/myrecipe.js';

class App extends Component {
  render() {
    return <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={RecipesView} />
        <Route path="/recipes" component={RecipesView} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create/" component={CreateRecipe} />
        <Route path="/details/:id" component={Details} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/about" component={About} />
        <Route path="/myrecipes" component={MyRecipesView} />
      </Switch>
    </Router>
  }
}

export default App;
