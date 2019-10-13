import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import rootReducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const history = require('history').createBrowserHistory();
const store = createStore(rootReducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/app');
  } else {
    // console.log('User has signed out or still needs to sign in.');
    history.replace('/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/app' component={App} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
