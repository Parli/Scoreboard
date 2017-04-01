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
var app = firebase.initializeApp(firebaseConfig);

import PlayerPage from './pages/PlayerPage';

import * as models from './models'

window.app = app;
window.models = models;

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(PlayerPage, {app, playerKey: '-KgaUwpaXsEKO6UhyDey'}),
    document.getElementById('container')
  );
});
