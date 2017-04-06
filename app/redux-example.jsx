var redux = require('redux');

console.log('%c Starting Redux example ', 'background: #222; color: #bada55');

const DEFAULT_STATE = {
  name : 'Me',
  hobbies : [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = DEFAULT_STATE, action) => {
  // state = state || {name : 'Me'};
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id)
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// Subscribe to changes
var unsuscribe = store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});

// unsuscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Milan'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Sleep'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'François'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    title: 'Star Wars',
    genre: 'Sci-Fi'
  }
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    title: 'Mad Max',
    genre: 'Action'
  }
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});
