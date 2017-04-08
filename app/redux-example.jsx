var redux = require('redux');

console.log('%c Starting Redux example ', 'background: #222; color: #bada55');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsuscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url+'" target="_blank">View your location</a>';
  }
});

// unsuscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Milan'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Sleep'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Jan'));

store.dispatch(actions.addMovie({title: 'Star Wars', genre: 'Sci-Fi'}));

store.dispatch(actions.addMovie({title: 'Mad Max', genre: 'Action'}));

store.dispatch(actions.removeMovie(2));
