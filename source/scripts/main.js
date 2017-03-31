import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyDbZbmByxC-tPqa9A8qZdxji04NxLpE3pE",
  authDomain: "office-scoreboard.firebaseapp.com",
  databaseURL: "https://office-scoreboard.firebaseio.com",
  storageBucket: "office-scoreboard.appspot.com",
  messagingSenderId: "727705217553"
};
var scoreboardApp = firebase.initializeApp(firebaseConfig);

import Counter from './components/Counter';

import Player from './database/Player'
import PlayerList from './database/PlayerList'

window.app = scoreboardApp;
window.Player = Player;
window.PlayerList = PlayerList;

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('container')
  );
});
