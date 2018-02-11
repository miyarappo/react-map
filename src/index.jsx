import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import App from './components/App';
import SearchPage from './components/SearchPage';
import reducer from './reducers/';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <SearchPage
      history={history}
      location={location}
    />
  </Provider>,
  document.querySelector('.container'),
);
