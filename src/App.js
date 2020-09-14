import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth2 } from './firebase';
import firebase from 'firebase'


function App() {

  const [{ user }, dispatch] = useStateValue();

  // useEffect hook <<<<<<<< POWERFUL
  //use of code which runs based on a given condition
  //want to make a listener which is going to be listening every time to if user signedIn or signedOut

  useEffect(() => {
    //will run only once when all components loads...

    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if(authUser){
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })

    return () => {
      //Any cleanup operations go in here
      unsubscribe();
    }
    
  }, [])

console.log('User is -> ',user)

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/* default Route */}
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
