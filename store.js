import { createStore, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk';
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

// firebase setting
const config = {
  apiKey: "AIzaSyChxm6desPyC4P9wsd4ebjSSM4uXaJAarQ",
  authDomain: "eno-school-tool-26be3.firebaseapp.com",
  databaseURL: "https://eno-school-tool-26be3.firebase.com",
  projectId: "eno-school-tool-26be3",
  storageBucket: "eno-school-tool-26be3.appspot.com",
  messagingSenderId: "1014845717896",
  appId: "1:1014845717896:web:76f68509075fd319a70e3d",
  measurementId: "G-3PGVGL9ZY0"
};

const initial = {
  login:false,
  username: '(click here!)',
  email: ''
}

// firebase initialize
var fireapp;
try {
  fireapp = initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
export default fireapp;


// reducer
function fireReducer(state = initial, action) {
  switch (action.type) {
    // dummy
    case 'UPDATE_USER':
      return action.value;
    // default
    default:
      return state;
  }
}

// initStore function
export function initStore(state = initial) {
  return createStore(fireReducer, state, applyMiddleware(ThunkMiddleware))
}