var redux = require('redux');

console.log('%c Starting Redux todo example ', 'background: #222; color: #bada55');

const DEFAULT_STATE = {searchText: '', showCompleted: false, todos: []};

var reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// Subscribe to changes
var unsuscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('SearchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

// unsuscribe();

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Complete the React Formation'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Sleep'
});
