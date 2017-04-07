var redux = require('redux');

console.log('%c Starting Redux example ', 'background: #222; color: #bada55');

const DEFAULT_STATE = {
  name : 'Me',
  hobbies : [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter(hobby => hobby.id !== action.id);
    default:
      return state;
  }
};

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: action.movie
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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
