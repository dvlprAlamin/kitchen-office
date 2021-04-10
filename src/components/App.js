import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';
import CheckOut from '../pages/CheckOut';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import CheckOutDetails from './CheckOutDetails';
import FoodItemDetails from './FoodItemDetails';
import Footer from './Footer';
import LoginSignUp from './LoginSignup';
import Navigation from './Navigation';
import PrivateRoute from './PrivateRoute';
const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AuthProvider>
      <Router>
        <Navigation handleClickOpen={handleClickOpen} />
        <CheckOutDetails
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/food/:id' component={FoodItemDetails} />
          <Route path='/login' component={LoginSignUp} />
          <Route path='/signup' component={LoginSignUp} />
          <PrivateRoute path='/checkout'>
            <CheckOut handleClickOpen={handleClickOpen} />
          </PrivateRoute>
          <PrivateRoute path='/orders'>
            <Orders />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;