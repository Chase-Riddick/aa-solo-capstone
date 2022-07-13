import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from './components/Navbar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import DisplayCatchesCollection from './components/DisplayCatchesCollection';
import Footer from './components/Footer';
import About from './components/About';
import SplashPage from './components/Splash';
import Home from './components/MapTest';
import SearchPage from './components/Search/SearchPage';

import { authenticate } from './store/session';
import { getAllCatches } from './store/catch';
import { getMapAPIKey } from './store/map';
import { getAllUsers } from './store/user';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  //Clarify utility of below.
  const catches = useSelector(state => state.catches)
  const mapAPIKey = useSelector(state => state.map)
  const id = useSelector(state => state.session.id)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllCatches());
      await dispatch(getMapAPIKey());
      await dispatch(getAllUsers());
      setLoaded(true);
    })();
  }, [dispatch]);

  //Clarify utility of below.
  // useEffect(() => {
  //   (async() => {
  //   await dispatch(getAllCatches());
  //   await dispatch(getMapAPIKey());
  // }), [dispatch]);


  if (!loaded || !catches || !mapAPIKey) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className='main-content'>
      <Switch>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <SplashPage/>
        </Route>
        <Route path='/catches' exact={true} >
          <DisplayCatchesCollection />
        </Route>
        <Route path='/about' exact={true} >
          <About/>
        </Route>
        <Route path='/map' exact={true} >
          <Home />
        </Route>
        <Route path='/search' exact={true} >
          <SearchPage />
        </Route>
      </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
