var redux = require('redux');

console.log('%c Starting Redux example ', 'background: #222; color: #bada55');

var reducer = (state = {name : 'Me'}, action) => {
  // state = state || {name : 'Me'};

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);
