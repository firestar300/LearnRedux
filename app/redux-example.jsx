var redux = require('redux');

console.log('%c Starting Redux example ', 'background: #222; color: #bada55');

var reducer = (state = {name : 'Me'}, action) => {
  // state = state || {name : 'Me'};
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// Subscribe to changes
var unsuscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});

// unsuscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Milan'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'François'
});
