import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CheckOut from '../pages/CheckOut';
import Home from '../pages/Home';
import CheckOutDetails from './CheckOutDetails';
import FoodItemDetails from './FoodItemDetails';
import Navbar from './Navbar';
const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Router>
      <Navbar handleClickOpen={handleClickOpen} />
      <CheckOutDetails
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/food/:id' component={FoodItemDetails} />
        <Route path='/checkout'>
          <CheckOut handleClickOpen={handleClickOpen} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;