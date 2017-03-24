import * as firebase from 'firebase'
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

var firebaseConfig = {
  apiKey: "AIzaSyDbZbmByxC-tPqa9A8qZdxji04NxLpE3pE",
  authDomain: "office-scoreboard.firebaseapp.com",
  databaseURL: "https://office-scoreboard.firebaseio.com",
  storageBucket: "office-scoreboard.appspot.com",
  messagingSenderId: "727705217553"
};

var scoreboardApp = firebase.initializeApp(firebaseConfig);

var scoreboardAppStorage = scoreboardApp.storage();
var scoreboardAppDatabase = scoreboardApp.database();

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('container')
  );
});
