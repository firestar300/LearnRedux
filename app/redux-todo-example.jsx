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

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Complete the React Formation'
});

console.log('searchText should be "Complete the React Formation"', store.getState());
