import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Navigation from '../components/Navigation';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/header" component={Header} />
        <Route path="/navigation" component={Navigation} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;