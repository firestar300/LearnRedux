var redux = require('redux');

console.log('%c Starting Redux todo example ', 'background: #222; color: #bada55');

const DEFAULT_STATE = {searchText: '', showCompleted: false, todos: []};

var reducer = (state = DEFAULT_STATE, action) => {
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);
