import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import '../css/home.css';
import '../css/header.css';
import '../css/project.css';
import '../fonts/style.css'


// App components
import Home from './Home';
import Work from './Work';
import About from './About';
import Header from './Header';

const App = () => (

  <BrowserRouter>
    <div className="container">
      <Header />      

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
    </BrowserRouter>
);


export default App;
