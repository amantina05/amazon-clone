import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HQCBaGHNWsy1zYawxlRIvG3w9hhW4dqbugq48tYvZkghbjhgrSp87mpu244XFFxwPkOPyVOpxSOPSpIIcEVYmsz00yWvShjFH'
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  //code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user is logged out

        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      //clean up opperations go here
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
