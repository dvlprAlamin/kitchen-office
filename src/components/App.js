import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CheckOut from '../pages/CheckOut';
import Home from '../pages/Home';
import FoodItem from './FoodItem';
import FoodItemDetails from './FoodItemDetails';
import Navbar from './Navbar';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/food/:id' component={FoodItemDetails} />
        <Route path='/checkout' component={CheckOut} />
      </Switch>
    </Router>
  );
};

export default App;