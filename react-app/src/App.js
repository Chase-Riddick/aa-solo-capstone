import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import DisplayCatchesCollection from './components/DisplayCatchesCollection';
import { authenticate } from './store/session';
import { getAllCatches } from './store/catch';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  //Clarify utility of below.
  const catches = useSelector(state => state.catches)
  const id = useSelector(state => state.session.id)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  //Clarify utility of below.
  useEffect(() => {
    dispatch(getAllCatches());
  }, [dispatch]);

  if (!loaded || !catches) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <>
          <h1>My Home Page</h1>
          <DisplayCatchesCollection />
          </>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
