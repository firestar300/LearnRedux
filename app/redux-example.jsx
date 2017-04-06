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

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Milan'
});

console.log('Name should be Milan', store.getState());
