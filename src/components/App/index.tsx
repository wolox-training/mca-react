import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'scss/application.scss';

import Home from 'screens/Home';
import SignUp from 'screens/SignUp';
import Header from 'components/Header';
import Login from 'screens/Login';

function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Switch>
          <Route path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
